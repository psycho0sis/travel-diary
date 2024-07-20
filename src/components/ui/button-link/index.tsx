import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { IButtonLink } from './types';

import styles from './styles.module.scss';

export const ButtonLink: FC<IButtonLink> = ({ className, href, text, variant }) => (
  <Button variant={variant} className={className}>
    <Link className={styles.link} to={href}>
      {text}
    </Link>
  </Button>
);
