import { createContext } from 'react';

import map from 'assets/map.png';
import { Title } from 'components/ui/title';

interface IContext {
  email: string;
  changeEmail: (email: string) => void;
}

export const Context = createContext<IContext>({} as IContext);

export const Home = () => (
  <>
    <Title>Дневник путешественника</Title>
    <img src={map} />
  </>
);
