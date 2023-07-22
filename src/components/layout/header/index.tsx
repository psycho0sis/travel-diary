import { NavLink } from 'react-router-dom';

import logo from 'assets/logo.png';

import './styles.scss';

export const Header = () => (
  <div className="header">
    <img className="header__logo" src={logo} />
    <nav className="header__navigation">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Главная
      </NavLink>
      <NavLink
        to="/virtual"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Виртуальные экологические экскурсии
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Личный кабинет
      </NavLink>
    </nav>
  </div>
);
