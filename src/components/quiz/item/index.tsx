import { ChangeEvent, FC, useEffect, useState } from 'react';

interface IItem {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
  countCorrectAnswers: (answer: string) => void;
  changeAnswersArray: (answer: string) => void;
}

export const Item: FC<IItem> = ({
  id,
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
    changeAnswersArray(selectedAnswer);
    selectedAnswer === correctAnswer && countCorrectAnswers(selectedAnswer);
  }, [selectedAnswer]);

  return (
    <div className='question__item' key={id}>
      <p className='quiz__question'>{question}</p>

      {answers.map((answer) => (
        <div className='quiz__variants' key={answer}>
          <input
            className='quiz__input'
            type='radio'
            checked={selectedAnswer === answer}
            onChange={handleChange}
            value={answer}
          />
          <label className='quiz__label' htmlFor={answer}>
            {answer}
          </label>
        </div>
      ))}
    </div>
  );
};
