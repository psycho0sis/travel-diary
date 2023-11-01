import { type FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, doc, query, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

import { fetchStudents } from 'store/features/students/students-action';
import { fetchReview } from 'store/features/review/review-action';
import { selectAsyncReview } from 'store/features/review/review-selectors';
import { useAppDispatch } from 'store/hooks';

import { db } from '../firebase';

export const useUploadPicture = (email: string, excursion: string) => {
  const [picture, setPicture] = useState<Blob>(new Blob());
  // const [isChangeAvatarAvailable, setIsChangeAvatarAvailable] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReview({ excursion }));
  }, []);

  const asyncReview = useSelector(selectAsyncReview);

  console.log(asyncReview);

  const addImage = (url: string) => {
    const storage = getStorage();

    const metadata = {
      contentType: 'image/jpeg',
    };

    const storageRef = ref(storage, url);
    const uploadTask = uploadBytesResumable(storageRef, picture, metadata);

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

          const reviews = doc(db, 'reviews', asyncReview?.id || '');

          console.log(reviews);

          updateDoc(reviews, {
            photo: downloadURL,
          });
          dispatch(fetchStudents(''));
          // setIsChangeAvatarAvailable(true);
        });
      }
    );
  };

  const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      setPicture(files[0]);

      // setIsChangeAvatarAvailable(false);
    }
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addImage(picture.name);
      } else {
        console.log('error');
      }
    });
  };

  return { handleChange, onSubmit };
};
