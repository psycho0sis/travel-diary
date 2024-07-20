import type { ButtonProps } from 'react-bootstrap';

export interface IButtonLink extends ButtonProps {
  text: string;
  href: string;
  className?: string;
}
