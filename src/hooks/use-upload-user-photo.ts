import { type FormEvent, useEffect, useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL } from 'firebase/storage';

import { getUploadTask } from 'helpers/get-upload-task';
import { fetchStudents } from 'store/features/students/students-action';
import { useAppDispatch } from 'store/hooks';

import { db } from '../firebase';

import { useLoadStudents } from './use-load-students-group';

export const useUploadUserPhoto = (email: string) => {
  const [userPhoto, setUserPhoto] = useState<File>(new File([], '', {}));
  const [isChangeAvatarAvailable, setIsChangeAvatarAvailable] = useState<boolean>(false);
  const [currentUserPhoto, setCurrentUserPhoto] = useState<string>('');
  const { students } = useLoadStudents();
  const dispatch = useAppDispatch();

  useEffect(() => {
    students.length &&
      setCurrentUserPhoto(students.filter((item) => item.email === email)[0].photo);
  }, [isChangeAvatarAvailable, students]);

  const addImage = (file: File) => {
    const uploadTask = getUploadTask(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        switch (snapshot.state) {
          case 'paused':
            break;
          case 'running':
            console.error('Upload is running');
            break;
        }
      },
      ({ message }) => {
        console.error(message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.info('File available at: ', downloadURL);

          const student = doc(db, 'children', email);

          updateDoc(student, {
            photo: downloadURL,
          });
          dispatch(fetchStudents());
          setIsChangeAvatarAvailable(true);
        });
      }
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files?.length) {
      setUserPhoto(files[0]);

      setIsChangeAvatarAvailable(false);
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    addImage(userPhoto);

    // очищаем инпут с файлом от значения
    Array.from((event.target as HTMLFormElement).elements).forEach((control) => {
      if (control instanceof HTMLInputElement && control.name === 'photo') {
        control.value = '';
      }
    });
  };

  return { currentUserPhoto, handleChange, onSubmit };
};
