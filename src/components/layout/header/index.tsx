import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import logo from 'assets/logo.png';
import { useToggleMenu } from 'hooks/use-toggle-menu';

import { navigation } from './config';

import styles from './styles.module.scss';

export const Header = () => {
  const { toggleMenu, isBurgerMenuOpen, pathname } = useToggleMenu();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={classNames(styles.overlay, { [styles.active]: isBurgerMenuOpen })}
        onClick={toggleMenu}
      />
      <div className={styles.header}>
        <div className={styles.content}>
          <img className={styles.logo} src={logo} onClick={() => navigate('/')} />

          <div
            className={classNames(styles.menuButton, { [styles.close]: isBurgerMenuOpen })}
            onClick={toggleMenu}
          >
            <div className={styles.menuButtonLine}></div>
            <div className={styles.menuButtonLine}></div>
            <div className={styles.menuButtonLine}></div>
          </div>

          <Navbar
            className={classNames(styles.navigation, {
              [styles.open]: isBurgerMenuOpen,
            })}
            role='navigation'
          >
            {navigation.map(({ id, route, title }) => (
              <Nav.Link
                key={id}
                href={route}
                className={classNames({ [styles.active]: pathname === route })}
              >
                {title}
              </Nav.Link>
            ))}
          </Navbar>
        </div>
      </div>
    </>
  );
};
