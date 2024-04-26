import { useState } from 'react';
import { getDownloadURL } from 'firebase/storage';

import { getUploadTask } from 'helpers/get-upload-task';

export const useUploadPicture = () => {
  const [pictureUrls, setPictureUrls] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files?.length) {
      const uploadTask = getUploadTask(files[0]);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              console.info('Upload is running');
              break;
          }
        },
        ({ message }) => {
          console.error(message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.info('File available at: ', downloadURL);

            setPictureUrls((prev) => prev.concat(downloadURL));

            event.target.value = '';
          });
        }
      );
    }
  };

  const deletePhoto = (id: number) => {
    setPictureUrls((prev) => prev.filter((_, index) => index !== id));
  };

  return { pictureUrls, setPictureUrls, handleChange, deletePhoto };
};
