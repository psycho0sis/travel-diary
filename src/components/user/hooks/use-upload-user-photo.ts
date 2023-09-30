import { type FormEvent, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

import { fetchStudents } from 'store/features/students/students-action';
import { useAppDispatch } from 'store/hooks';

import { db } from '../../../firebase';
import { useLoadStudents } from '../hooks/use-load-students-group';

export const useUploadUserPhoto = (email: string) => {
  const [userPhoto, setUserPhoto] = useState<Blob>(new Blob());
  const [isChangeAvatarAvailable, setIsChangeAvatarAvailable] = useState<boolean>(false);
  const [currentUserPhoto, setCurrentUserPhoto] = useState<string>('');
  const { students } = useLoadStudents();
  const dispatch = useAppDispatch();

  useEffect(() => {
    students.length &&
      setCurrentUserPhoto(students.filter((item) => item.email === email)[0].photo);
  }, [isChangeAvatarAvailable, students]);

  const addImage = (url: string) => {
    const storage = getStorage();

    const metadata = {
      contentType: 'image/jpeg',
    };

    const storageRef = ref(storage, url);
    const uploadTask = uploadBytesResumable(storageRef, userPhoto, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        switch (snapshot.state) {
          case 'paused':
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);

          const student = doc(db, 'children', email);

          updateDoc(student, {
            photo: downloadURL,
          });
          dispatch(fetchStudents(''));
          setIsChangeAvatarAvailable(true);
        });
      }
    );
  };

  const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      setUserPhoto(files[0]);

      setIsChangeAvatarAvailable(false);
    }
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addImage(userPhoto.name);
      } else {
        console.log('error');
      }
    });
  };

  return { currentUserPhoto, handleChange, onSubmit };
};
