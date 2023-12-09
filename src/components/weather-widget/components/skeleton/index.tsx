import { FC } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import styles from '../../styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISkeleton {}

export const WeatherSkeleton: FC<ISkeleton> = () => (
  <div className={styles.weatherWidget}>
    <SkeletonTheme baseColor='#e1e1e1' highlightColor='#c7c6c6'>
      <p>
        <Skeleton count={1} width={220} height={26} className='mb-1' borderRadius={16} />
        <Skeleton count={1} width={220} height={266} borderRadius={16} />
      </p>
    </SkeletonTheme>
  </div>
);
