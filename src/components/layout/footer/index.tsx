import { NavLink } from 'react-router-dom';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { navigation } from '../header';

import './styles.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__navigation'>
          {navigation.map(({ id, route, title }) => (
            <NavLink
              key={id}
              to={route}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              {title}
            </NavLink>
          ))}
        </div>

        <div className='footer__address'>
          <div className='footer__address-item'>
            <FontAwesomeIcon icon={faLocationDot} size='lg' style={{ color: '#bbbbb4' }} />
            <p>улица Калинина 4б, Вороново</p>
          </div>
          <div className='footer__address-item'>
            <FontAwesomeIcon icon={faPhone} size='lg' style={{ color: '#bbbbb4' }} />
            <p>(8 015 94) 4-15-48</p>
          </div>
          <div className='footer__address-item'>
            <FontAwesomeIcon icon={faEnvelope} size='lg' style={{ color: '#bbbbb4' }} />
            <a href='mailto:support@company.com'>voronssh@mail.grodno.by</a>
          </div>
          <div className='footer__address-item'>
            <a href='https://www.facebook.com/search/posts?q=%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D0%B0'>
              <FontAwesomeIcon icon={faFacebookF} size='lg' style={{ color: '#bbbbb4' }} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
      <p className='footer__school'>Вороновская средняя школа © 2023</p>
    </footer>
  );
};
