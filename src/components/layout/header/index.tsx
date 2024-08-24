import Offcanvas from 'react-bootstrap/Offcanvas';
import classNames from 'classnames';

import { useToggleMenu } from 'hooks/use-toggle-menu';

import { useViewport } from '../../../hooks/use-viewport';

import { Logo } from './components/logo';
import { NavigationDesktop } from './components/navigation/desktop';
import { NavigationMobile } from './components/navigation/mobile';
import { Context } from './components/navigation/navigation-provider/context';

import styles from './styles.module.scss';

export const Header = () => {
  const { toggleMenu, isBurgerMenuOpen, pathname } = useToggleMenu();
  const { width } = useViewport();
  const isMobile = width < 1075;

  return (
    <div className={styles.header}>
      <Logo />

      <Context.Provider value={{ toggleMenu, isBurgerMenuOpen, pathname }}>
        <NavigationDesktop />
      </Context.Provider>

      <div className={classNames(styles.menuButton)} onClick={toggleMenu}>
        <div className={styles.menuButtonLine}></div>
        <div className={styles.menuButtonLine}></div>
        <div className={styles.menuButtonLine}></div>
      </div>

      {isMobile && (
        <Offcanvas show={isBurgerMenuOpen} onHide={toggleMenu} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Context.Provider value={{ toggleMenu, isBurgerMenuOpen, pathname }}>
              <NavigationMobile />
            </Context.Provider>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </div>
  );
};
