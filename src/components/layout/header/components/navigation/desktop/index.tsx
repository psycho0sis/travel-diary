import type { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { navigation } from '../../../config';
import { useNavigationContext } from '../navigation-provider/context';
import { INavigation } from '../types';

import styles from './styles.module.scss';

export const NestedNavigation: FC<INavigation> = ({ navigation }) => {
  const { pathname, toggleMenu } = useNavigationContext();

  return (
    <>
      {navigation.map(({ id, route, title, submenu }) => {
        const isPrivatePageActive = route === '/user' && pathname === '/login';
        const isMainLinkActive = pathname.includes(route);
        const isSecondPartActive = pathname === route;

        return (
          <div key={id} className={styles.link}>
            {submenu ? (
              <>
                <Link
                  key={id}
                  to={route}
                  className={classNames({
                    [styles.mainLinkActive]: isMainLinkActive,
                    [styles.secondLevelLinkActive]: isSecondPartActive,
                  })}
                  onClick={toggleMenu}
                >
                  {title}
                </Link>
                <div className={classNames(styles.submenu, styles.vertical)}>
                  <NestedNavigation navigation={submenu} />
                </div>
              </>
            ) : (
              <Link
                key={id}
                to={route}
                className={classNames({
                  [styles.secondLevelLinkActive]: isSecondPartActive,
                  [styles.privatePageActive]: isPrivatePageActive,
                })}
                onClick={toggleMenu}
              >
                {title}
              </Link>
            )}
          </div>
        );
      })}
    </>
  );
};

export const BurgerNavigation = () => {};

export const NavigationDesktop = () => (
  <nav className={classNames(styles.navigation, styles.horizontal, styles.navigationVisible)}>
    <NestedNavigation navigation={navigation} />
  </nav>
);
