import { ChangeEvent, FC, useEffect, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';

interface IItem {
  id: string;
  disabled: boolean;
  question: string;
  answers: string[];
  correctAnswer: string;
  countCorrectAnswers: (answer: string) => void;
  changeAnswersArray: (answer: string) => void;
}

export const Item: FC<IItem> = ({
  id,
  disabled,
  question,
  answers,
  countCorrectAnswers,
  changeAnswersArray,
  correctAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  useEffect(() => {
    selectedAnswer && changeAnswersArray(selectedAnswer);
    selectedAnswer === correctAnswer && countCorrectAnswers(selectedAnswer);
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
