import Offcanvas from 'react-bootstrap/Offcanvas';
import classNames from 'classnames';

import { useToggleMenu } from 'hooks/use-toggle-menu';

import { Logo } from './components/logo';
import { NavigationDesktop } from './components/navigation/desktop';
import { NavigationMobile } from './components/navigation/mobile';

import styles from './styles.module.scss';

export const Header = () => {
  const { toggleMenu, isBurgerMenuOpen } = useToggleMenu();

  return (
    <div className={styles.header}>
      <Logo />

      <NavigationDesktop />

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
          <NavigationMobile />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
