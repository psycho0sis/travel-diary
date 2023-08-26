import { FC, useState } from 'react';

import { Title } from 'components/ui/title';

import { Item } from './item';

import './styles.scss';

interface IQuizItem {
  id: string;
  question: string;
  correctAnswer: string;
  answers: string[];
}

interface IQuiz {
  data: IQuizItem[];
}

export const Quiz: FC<IQuiz> = ({ data }) => {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const countCorrectAnswers = (answer: string) => {
    !answers.includes(answer) && setCount((prev) => prev + 1);
  };

  const changeAnswersArray = (answer: string) =>
    !answers.includes(answer) && setAnswers([...answers, answer]);

  const isQuizFinished = answers.length === data.length;

  return (
    <div className='quiz'>
      <Title fontSize={36}>Ответьте на следующие вопросы:</Title>
      {data.map((item) => (
        <Item
          key={item.id}
          countCorrectAnswers={countCorrectAnswers}
          changeAnswersArray={changeAnswersArray}
          {...item}
        />
      ))}

      {isQuizFinished && (
        <div className='quiz__congratulations-wrapper'>
          <p className='quiz__congratulations'>Поздравляем!</p>
          <p className='quiz__correct-answers'>Правильных ответов: </p>
          <p className='quiz__correct-answers-number'>{count}</p>
        </div>
      )}
    </div>
  );
};
