import { type FC, useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

interface ICustomAlert {
  isShown: boolean;
  text: string;
}

export const CustomAlert: FC<ICustomAlert> = ({ isShown, text }) => {
  const [show, setShow] = useState(isShown);

  useEffect(() => {
    setShow(isShown);
  }, [isShown]);

  return (
    <Alert variant='danger' show={show} onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Извините, что-то пошло не так.</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
};
