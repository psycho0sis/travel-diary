import { IUser } from 'store/features/students/types';

export interface IExcursionForm {
  addMarkerToTheMap: (name: string, surname: string) => void;
  name: string;
  surname: string;
}

export interface IStudentsMapper {
  students: IUser[];
  status: string;
}
