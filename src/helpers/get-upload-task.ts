import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';

export const getUploadTask = (file: File) => {
  const storage = getStorage();

  const metadata = {
    contentType: 'image/jpeg',
  };

  const storageRef = ref(storage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  return uploadTask;
};
