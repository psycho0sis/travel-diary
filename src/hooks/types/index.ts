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

export interface IReview {
  id: number;
  excursion: string;
  email: string;
  review: string;
}
