import type { FC, ReactNode } from 'react';

import './styles.scss';

interface IProps {
  children: ReactNode;
  fontSize?: number;
}

export const Title: FC<IProps> = ({ children, fontSize }) => {
  return (
    <h3 className='title' style={{ fontSize: fontSize && fontSize }}>
      {children}
    </h3>
  );
};
