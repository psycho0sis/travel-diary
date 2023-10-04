import { ChangeEvent, FC, useEffect, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';

import { IQuizItem } from '../../types';

import styles from '../../styles.module.scss';

export const Item: FC<IQuizItem> = ({
  id,
  disabled,
  question,
  questions,
  answers,
  setQuestions,
  correctAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSelectedAnswer(event.target.value);

  useEffect(() => {
    if (selectedAnswer) {
      setQuestions({
        ...questions,
        [id]: { selectedAnswer: selectedAnswer, correctAnswer: selectedAnswer === correctAnswer },
      });
    }
  }, [selectedAnswer]);

  return (
    <div key={id} className={styles.quizItem}>
      <p className={styles.question}>{question}</p>

      {answers.map((answer) => (
        <div className={styles.variants} key={answer}>
          <Form.Check
            disabled={disabled}
            type='radio'
            id='default-radio'
            label={answer}
            checked={selectedAnswer === answer}
            onChange={handleChange}
            value={answer}
          />
        </div>
      ))}
    </div>
  );
};
