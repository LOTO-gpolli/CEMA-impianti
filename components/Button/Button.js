import styles from './Button.module.css';
// /*Fontawesome*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the FontAwesomeIcon component
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // import the icons you need

import Link from 'next/link';

export const Button = ({
  settings = { text: '', type: 'button', customClass: '', customClassText: '' }
}) => {
  const { customClass, customClassText, text, type } = settings;

  return (
    <Link href="tel:0211122333">
      <button className={`${styles['button']} ${customClass}`} type={type}>
        {' '}
        <FontAwesomeIcon icon={faPhone} size="lg" />{' '}
        <span className={`${customClassText}`}>{text}</span>
      </button>
    </Link>
  );
};
