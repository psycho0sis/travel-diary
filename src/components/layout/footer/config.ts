import { type IconDefinition, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

interface IItems {
  id: number;
  icon: IconDefinition;
  email?: string;
  linkHref?: string;
  text?: string;
}

export const footerAddressesItems: IItems[] = [
  {
    id: 0,
    icon: faLocationDot,
    text: 'улица Калинина 4б, Вороново',
  },
  {
    id: 1,
    icon: faPhone,
    text: '8 015 94 4-15-48',
  },
  {
    id: 2,
    icon: faEnvelope,
    email: 'voronssh@mail.grodno.by',
  },
  {
    id: 3,
    icon: faFacebookF,
    linkHref:
      'https://www.facebook.com/search/posts?q=%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D0%B0',
    text: 'Facebook',
  },
];
