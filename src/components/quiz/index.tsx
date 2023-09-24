import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import { Title } from 'components/ui/title';

import { Item } from './item';
import { IQuiz, TQuestions } from './types';

import './styles.scss';

export const Quiz: FC<IQuiz> = ({ data }) => {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState<TQuestions>({});
  const [isResult, setIsResult] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (Object.values(questions).length === data.length) {
      const amountOfCorrectAnswers = Object.values(questions).filter(
        ({ correctAnswer }) => correctAnswer
      ).length;

      setCount(amountOfCorrectAnswers);
      setIsResult(true);
      setIsDisabled(true);
    }
  };

  return (
    <div className='quiz'>
      <div className='excursion__back-btn-wrapper'>
        <div className='excursion__back-btn' onClick={() => navigate(-1)}>
          Назад
        </div>
      </div>
      <Title fontSize={36}>Ответьте на следующие вопросы:</Title>
      <Form>
        {data.map((item) => (
          <Item
            disabled={isResult}
            key={item.id}
            setQuestions={setQuestions}
            questions={questions}
            {...item}
          />
        ))}
      </Form>

      <Button disabled={isDisabled} variant='dark' onClick={handleClick}>
        Показать результаты
      </Button>

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
