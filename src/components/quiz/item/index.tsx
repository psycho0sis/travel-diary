import { ChangeEvent, FC, useEffect, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';

import { IItem } from '../types';

export const Item: FC<IItem> = ({
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
    <div className='question__item' key={id}>
      <p className='quiz__question'>{question}</p>

      {answers.map((answer) => (
        <div className='quiz__variants' key={answer}>
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
