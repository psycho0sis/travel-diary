export interface IExcursion {
  id: number;
  excursion: string;
  date: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  surname: string;
  photo: string;
  excursions?: IExcursion[];
  role: 'student' | 'teacher';
}

export type TReview = {
  id: number;
  date: string;
  excursion: string;
  email: string;
  review: string;
};
