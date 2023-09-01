import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import logo from 'assets/logo.png';

import { isLoggedIn } from '../../../session';

import './styles.scss';

export const navigation = [
  {
    id: 0,
    route: '/',
    title: 'Главная',
  },
  {
    id: 1,
    route: '/virtual',
    title: 'Виртуальные экскурсии',
  },
  {
    id: 2,
    route: '/students',
    title: 'Ученики',
  },
  {
    id: 3,
    route: '/teachers',
    title: 'Учителя',
  },
  {
    id: 4,
    route: '/login',
    title: 'Личный кабинет',
  },
  {
    id: 5,
    route: '/user',
    title: 'Ученик',
  },
];

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [filteredNavigation, setFilteredNavigation] = useState(navigation);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      setFilteredNavigation((prev) => prev.filter((item) => item.title !== 'Личный кабинет'));
    } else {
      setFilteredNavigation((prev) => prev.filter((item) => item.title !== 'Ученик'));
    }
  }, []);

  const toggleMenu = (e: React.MouseEvent<Element, MouseEvent>) => {
    const overlay = document.querySelector('.overlay');

    setIsBurgerMenuOpen((prev) => !prev);
    if (!isBurgerMenuOpen) {
      (e.currentTarget as HTMLElement).classList.add('close');
      overlay?.classList.add('active');
      setIsBurgerMenuOpen(true);
    } else {
      (e.currentTarget as HTMLElement).classList.remove('close');
      overlay?.classList.remove('active');
      setIsBurgerMenuOpen(false);
    }
  };

  const closeModal = () => {
    const menuBtn = document.querySelector('.menu-button');
    const overlay = document.querySelector('.overlay');

    menuBtn?.classList.remove('close');
    overlay?.classList.remove('active');
    setIsBurgerMenuOpen(false);
  };

  return (
    <>
      <div className='overlay' onClick={toggleMenu} />
      <div className='header'>
        <div className='header__content'>
          <img className='header__logo' src={logo} onClick={() => navigate('/')} />

          <div className='menu-button' onClick={toggleMenu}>
            <div className='menu-button-line'></div>
            <div className='menu-button-line'></div>
            <div className='menu-button-line'></div>
          </div>

          <nav className={isBurgerMenuOpen ? 'header__navigation open' : 'header__navigation'}>
            {filteredNavigation.map(({ id, route, title }) => (
              <Button
                key={id}
                variant={pathname === route ? 'warning' : 'link'}
                size='sm'
                href={route}
                className='text-dark'
              >
                {title}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
