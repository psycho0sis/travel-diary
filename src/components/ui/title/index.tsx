import type { FC, ReactNode } from 'react';

import './styles.scss';

interface IProps {
  children: ReactNode;
}

export const Title: FC<IProps> = ({ children }) => {
  return <h3 className='title'>{children}</h3>;
};
