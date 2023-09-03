import { FC, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { Title } from 'components/ui/title';

import { Item } from './item';
import { IQuiz } from './types';

import './styles.scss';

export const Quiz: FC<IQuiz> = ({ data }) => {
  const [count, setCount] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isResult, setIsResult] = useState<boolean>(false);

  const countCorrectAnswers = (answer: string) => {
    !answers.includes(answer) && setCount((prev) => prev + 1);
  };

  const changeAnswersArray = (answer: string) =>
    !answers.includes(answer) && setAnswers([...answers, answer]);

  useEffect(() => {
    if (answers.length === data.length) setIsResult(true);
  }, [answers]);

  return (
    <div className='quiz'>
      <Title fontSize={36}>Ответьте на следующие вопросы:</Title>
      <Form>
        {data.map((item) => (
          <Item
            disabled={isResult}
            key={item.id}
            countCorrectAnswers={countCorrectAnswers}
            changeAnswersArray={changeAnswersArray}
            {...item}
          />
        ))}
      </Form>

      {isResult && (
        <div className='quiz__congratulations-wrapper'>
          <p className='quiz__congratulations'>Поздравляем!</p>
          <p className='quiz__correct-answers'>Правильных ответов: </p>
          <p className='quiz__correct-answers-number'>{count}</p>
        </div>
      )}
    </div>
  );
};
