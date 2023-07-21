import { Container } from 'components/layout/container';
import { Header } from 'components/layout/header';
import { VoronovoRoute } from 'components/custom-google-maps/voronovo';
import { GoogleMaps } from 'components/google-map';
import { Title } from 'components/ui/title';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Title>Дневник путешественника</Title>
      <GoogleMaps />
      <VoronovoRoute />
    </Container>
  );
};
