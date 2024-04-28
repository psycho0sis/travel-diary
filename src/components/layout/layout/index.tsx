import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Container } from 'components/layout/container';
import { FirstScreen } from 'components/layout/first-screen';
import { Footer } from 'components/layout/footer';
import { Header } from 'components/layout/header';
import { BackToTopButton } from 'components/ui/back-to-top-button';

import styles from './styles.module.scss';

export const Layout = () => {
  const [showOnlyNavigation, setShowOnlyNavigation] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setShowOnlyNavigation(false);
    } else {
      setShowOnlyNavigation(true);
    }
  }, [pathname]);

  return (
    <div className={styles.layout}>
      {showOnlyNavigation ? (
        <Container>
          <Header />
        </Container>
      ) : (
        <FirstScreen />
      )}
      <div className={styles.main}>
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
      <BackToTopButton />
    </div>
  );
};
