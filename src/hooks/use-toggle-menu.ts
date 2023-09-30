import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useToggleMenu = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = (e: React.MouseEvent<Element, MouseEvent>) => {
    const overlay = document.querySelector('.overlay');

    setIsBurgerMenuOpen((prev) => !prev);

    (e.currentTarget as HTMLElement).classList.toggle('close');

    overlay?.classList.toggle('active');
  };

  return { toggleMenu, isBurgerMenuOpen, pathname };
};
