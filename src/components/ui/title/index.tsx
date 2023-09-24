import type { FC, ReactNode } from 'react';

import './styles.scss';

interface IProps {
  children: ReactNode;
  fontSize?: number;
  margin?: string;
}

export const Title: FC<IProps> = ({ children, fontSize, margin }) => (
  <h3 className='title' style={{ fontSize: fontSize && fontSize, margin: margin }}>
    {children}
  </h3>
);
