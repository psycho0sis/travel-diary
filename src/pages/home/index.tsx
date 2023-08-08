import { VoronovoRoute } from 'components/custom-google-maps/voronovo';
import { GoogleMaps } from 'components/google-map';
import { Title } from 'components/ui/title';

export const Home = () => {
  return (
    <>
      <Title>Дневник путешественника</Title>
      <GoogleMaps />
      <VoronovoRoute />
    </>
  );
};
