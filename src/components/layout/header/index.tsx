import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'assets/logo.png';

import './styles.scss';

const navigation = [
  {
    id: 0,
    route: '/',
    title: 'Главная',
  },
  {
    id: 1,
    route: '/virtual',
    title: 'Виртуальные экологические экскурсии',
  },
  {
    id: 2,
    route: '/students',
    title: 'Ученики',
  },
  {
    id: 3,
    route: '/login',
    title: 'Личный кабинет',
  },
  {
    id: 4,
    route: '/user',
    title: 'Ученик',
  },
];

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsBurgerMenuOpen((prev) => !prev);

  return (
    <div className='header' ref={ref}>
      <img className='header__logo' src={logo} />
      {<button onClick={toggleMenu}>Show menu</button>}
      <nav className={isBurgerMenuOpen ? 'header__navigation open' : 'header__navigation'}>
        {navigation.map(({ id, route, title }) => (
          <NavLink
            key={id}
            to={route}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
