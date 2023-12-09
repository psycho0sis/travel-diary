import { Status } from 'store/types';

import type { IExcursion } from '../excursions/types';

export interface IUser {
  name: string;
  email: string;
  password: string;
  surname: string;
  photo: string;
  excursions?: IExcursion[];
  role: 'student' | 'teacher';
  showAvatarBlock?: boolean;
}
export interface IAsyncStudentsSlice {
  status: Status;
  asyncStudents: IUser[] | null;
}
