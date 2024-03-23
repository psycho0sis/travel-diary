import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import logo from 'assets/logo.png';
import { useToggleMenu } from 'hooks/use-toggle-menu';

import { navigation } from './config';

import styles from './styles.module.scss';

export const Header = () => {
  const { toggleMenu, isBurgerMenuOpen, pathname } = useToggleMenu();
  const navigate = useNavigate();

  const navigationBlock = (
    <>
      {navigation.map(({ id, route, title }) => (
        <div>
          <Nav.Link
            key={id}
            href={route}
            className={classNames({ [styles.active]: pathname === route }, styles.hovered)}
          >
            {title}
          </Nav.Link>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.logo} onClick={() => navigate('/')}>
            <img src={logo} alt='Дневник путешественника' />
            <div className={styles.logoText}>
              <h1>Дневник</h1>
              <h1>путешественника</h1>
            </div>
          </div>

          <nav
            className={classNames(styles.navigation, styles.horizontal, styles.navigationVisible)}
          >
            {navigationBlock}
          </nav>

          <div className={classNames(styles.menuButton)} onClick={toggleMenu}>
            <div className={styles.menuButtonLine}></div>
            <div className={styles.menuButtonLine}></div>
            <div className={styles.menuButtonLine}></div>
          </div>

          <Offcanvas show={isBurgerMenuOpen} onHide={toggleMenu} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <nav className={styles.navigation}>{navigationBlock}</nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};
