import { Outlet } from 'react-router-dom';

import { Container } from 'components/layout/container';
import { Footer } from 'components/layout/footer';
import { Header } from 'components/layout/header';

export const Layout = () => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    <Footer />
  </>
);
