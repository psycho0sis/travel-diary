import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { BackButton } from 'components/ui/back-button';
import { Title } from 'components/ui/title';

import { Item } from './item';
import { IQuiz, TQuestions } from './types';

import styles from './styles.module.scss';

export const Quiz: FC<IQuiz> = ({ data }) => {
  const [amountOfCorrectAnswers, setAmountOfCorrectAnswers] = useState(0);
  const [questions, setQuestions] = useState<TQuestions>({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (Object.values(questions).length === data.length) {
      const amountOfCorrectAnswers = Object.values(questions).filter(
        ({ correctAnswer }) => correctAnswer
      ).length;

      setAmountOfCorrectAnswers(amountOfCorrectAnswers);
      setIsQuizFinished(true);
      setIsDisabled(true);
    }
  };

  return (
    <div className={styles.quiz}>
      <BackButton text='Назад' />
      <Title fontSize={36}>Ответьте на следующие вопросы:</Title>
      <Form>
        {data.map((item) => (
          <Item
            disabled={isQuizFinished}
            key={item.id}
            setQuestions={setQuestions}
            questions={questions}
            {...item}
          />
        ))}
      </Form>

      <Button className='mt-4' disabled={isDisabled} variant='dark' onClick={handleClick}>
        Показать результаты
      </Button>

      {isQuizFinished && (
        <div className={styles.congratulationsWrapper}>
          <p className={styles.congratulations}>Поздравляем!</p>
          <p className={styles.correctAnswers}>Правильных ответов: </p>
          <p className={styles.correctAnswersNumber}>{amountOfCorrectAnswers}</p>
        </div>
      )}
    </div>
  );
};
