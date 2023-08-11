import { FC, useState } from 'react';

import { Item } from './item';

import './styles.scss';

interface IQuizItem {
  id: string;
  question: string;
  correctAnswer: string;
  answers: string[];
}

interface IQuiz {
  palacesQuizData: IQuizItem[];
}

export const Quiz: FC<IQuiz> = ({ palacesQuizData }) => {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const countCorrectAnswers = (answer: string) => {
    !answers.includes(answer) && setCount((prev) => prev + 1);
  };

  const changeAnswersArray = (answer: string) =>
    !answers.includes(answer) && setAnswers([...answers, answer]);

  return (
    <div className='quiz'>
      {palacesQuizData.map((item) => (
        <Item
          key={item.id}
          countCorrectAnswers={countCorrectAnswers}
          changeAnswersArray={changeAnswersArray}
          {...item}
        />
      ))}
      <p>Правильных ответов: </p>
      {count}
    </div>
  );
};
