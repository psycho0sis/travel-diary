export interface IQuizItem {
  id: string;
  question: string;
  correctAnswer: string;
  answers: string[];
}

export interface IQuiz {
  data: IQuizItem[];
}

export type TQuestions = Record<string, { selectedAnswer: string; correctAnswer: boolean }>;

export interface IItem {
  id: string;
  disabled: boolean;
  question: string;
  questions: TQuestions;
  answers: string[];
  correctAnswer: string;
  setQuestions: React.Dispatch<React.SetStateAction<TQuestions>>;
}
