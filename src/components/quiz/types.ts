export interface IQuizData {
  id: string;
  question: string;
  correctAnswer: string;
  answers: string[];
}

export interface IQuiz {
  data: IQuizData[];
}

export type TQuestions = Record<string, { selectedAnswer: string; correctAnswer: boolean }>;

export interface IQuizItem extends IQuizData {
  disabled: boolean;
  questions: TQuestions;
  setQuestions: React.Dispatch<React.SetStateAction<TQuestions>>;
}
