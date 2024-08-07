import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { navigation } from '../header/config';

import { footerAddressesItems } from './config';

import styles from './styles.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.navigation}>
        {navigation.map(({ id, route, title }) => (
          <NavLink key={id} to={route} onClick={() => window.scrollTo(0, 0)}>
            {title}
          </NavLink>
        ))}
      </div>

      <div className={styles.address}>
        {footerAddressesItems.map(({ id, icon, text, linkHref, email }) => (
          <div className={styles.addressItem} key={id}>
            {linkHref ? (
              <a href={linkHref}>
                <FontAwesomeIcon icon={icon} size='lg' style={{ color: '#bbbbb4' }} />
                <span>{text}</span>
              </a>
            ) : (
              <>
                <FontAwesomeIcon icon={icon} size='lg' style={{ color: '#bbbbb4' }} />
                {text && <p>{text}</p>}
                {email && <a href='mailto:support@company.com'>{email}</a>}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    <p className={styles.school}>Вороновская средняя школа © 2023</p>
  </footer>
);
