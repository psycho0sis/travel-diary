import type { FC, ReactNode } from 'react';

import './styles.scss';

interface IProps {
  children: ReactNode;
}

export const Container: FC<IProps> = ({ children }) => <div className='container'>{children}</div>;
