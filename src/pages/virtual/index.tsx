import { Container } from 'components/layout/container';
import { Header } from 'components/layout/header';
import { PanoramaVoronovo } from 'components/panoramas/panorama-voronovo';
import { Title } from 'components/ui/title';

export const Virtual = () => (
  <Container>
    <Header />
    <Title>Виртуальная экскурсия по братским могилам г.п. Вороново</Title>
    <PanoramaVoronovo />
  </Container>
);
