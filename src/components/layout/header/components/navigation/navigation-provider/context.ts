import { createContext, useContext } from 'react';

interface IContext {
  toggleMenu: (e: React.MouseEvent<Element, MouseEvent>) => void;
  isBurgerMenuOpen: boolean;
  pathname: string;
}

export const Context = createContext<IContext>({} as IContext);

export const useNavigationContext = () => useContext(Context);
