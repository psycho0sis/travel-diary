import { createContext } from 'react';

import map from 'assets/map.png';
import { Title } from 'components/ui/title';

import './styles.scss';

interface IContext {
  email: string;
  changeEmail: (email: string) => void;
}

export const Context = createContext<IContext>({} as IContext);

export const Home = () => (
  <>
    <div className='mainPage__title-wrapper'>
      <Title>Дневник путешественника</Title>
    </div>
    <img className='mainPage__img' src={map} />
  </>
);
