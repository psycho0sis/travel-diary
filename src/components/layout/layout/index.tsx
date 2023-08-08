import { Outlet } from 'react-router-dom';

import { Container } from 'components/layout/container';
import { Header } from 'components/layout/header';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
