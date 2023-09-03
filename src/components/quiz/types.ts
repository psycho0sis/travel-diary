export interface IQuizItem {
  id: string;
  question: string;
  correctAnswer: string;
  answers: string[];
}

export interface IQuiz {
  data: IQuizItem[];
}

export interface IItem {
  id: string;
  disabled: boolean;
  question: string;
  answers: string[];
  correctAnswer: string;
  countCorrectAnswers: (answer: string) => void;
  changeAnswersArray: (answer: string) => void;
}
