import { Container } from 'components/layout/container';
import { Header } from 'components/layout/header';
import { PanoramasSlider } from 'components/panoramas/panaramas-slider';
import { Title } from 'components/ui/title';

export const Virtual = () => (
  <Container>
    <Header />
    <Title>Виртуальная экскурсия по братским могилам г.п. Вороново</Title>
    <PanoramasSlider />
  </Container>
);
