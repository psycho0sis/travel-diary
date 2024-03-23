import { Container } from 'components/layout/container';
import { Header } from 'components/layout/header';
import { Logo } from 'components/layout/logo';
import { WeatherWidget } from 'components/weather-widget';

import styles from './styles.module.scss';

export const FirstScreen = () => (
  <div className={styles.bg}>
    <Container>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.main}>
          <Logo />
          <WeatherWidget />
        </div>
      </div>
    </Container>
  </div>
);
