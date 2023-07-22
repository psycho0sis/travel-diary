import { Panorama,YMaps } from '@pbe/react-yandex-maps';

export const App = () => (
  <YMaps query={{ apikey: '814eca8f-408b-4e50-8c83-475ee8cd49d9' }}>
    <div>
      <Panorama defaultPoint={[54.14027, 25.31091]} />
    </div>
  </YMaps>
);
