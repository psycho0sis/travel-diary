import { createContext, useState } from 'react';

import { VoronovoRoute } from 'components/custom-google-maps/voronovo';
import { Title } from 'components/ui/title';

interface IContext {
  email: string;
  changeEmail: (email: string) => void;
}

export const Context = createContext<IContext>({} as IContext);

export const Home = () => {
  const [email, setEmail] = useState<string>('');

  const changeEmail = (email: string) => setEmail(email);
  return (
    <>
      <Context.Provider value={{ email, changeEmail }}>
        <Title>Дневник путешественника</Title>
        <VoronovoRoute />
      </Context.Provider>
    </>
  );
};
