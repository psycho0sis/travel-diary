import { FC, useEffect, useRef } from 'react';

import { IBackToTopButton } from './types';

import styles from './styles.module.scss';

export const BackToTopButton: FC<IBackToTopButton> = () => {
  const refBtn: React.MutableRefObject<null> = useRef(null);

  useEffect(() => {
    const scrollFunction = (elem: HTMLDivElement) => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        elem.style.display = 'block';
      } else {
        elem.style.display = 'none';
      }
    };

    if (refBtn.current) {
      const button = refBtn.current;
      document.addEventListener('scroll', () => scrollFunction(button));

      return document.removeEventListener('scroll', () => scrollFunction(button));
    }
  }, []);

  return (
    <div ref={refBtn} className={styles.backBtn} onClick={() => window.scrollTo(0, 0)}>
      <img src='https://firebasestorage.googleapis.com/v0/b/travel-diary-3bb0c.appspot.com/o/9111047_arrow_top_icon.png?alt=media&token=317923da-70ca-40a4-adfa-142109f6f013' />
    </div>
  );
};
