import { Link } from 'react-router-dom';

import { PanoramaVoronovo } from 'components/panoramas/panorama-voronovo';
import { Title } from 'components/ui/title';

export const VirtualExcursionVoronovo = () => {
  return (
    <>
      <Link to='/virtual/'>Назад</Link>
      <Title>Братская могила мирных граждан г.п. Вороново</Title>
      <PanoramaVoronovo index={0} />
    </>
  );
};
