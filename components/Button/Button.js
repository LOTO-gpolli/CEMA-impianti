import styles from './Button.module.css';
// /*Fontawesome*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the FontAwesomeIcon component
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // import the icons you need
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Button = ({
  settings = { text: '', type: 'button', customClass: '', customClassText: '' },
}) => {
  const { customClass, customClassText, text, type } = settings;

  const buttonVariants = {
    hidden: {
      scale: 1,
    },
    visible: {
      scale: [1, 1.1, 1, 1.1, 1],
      transition: {
        delay: 2,
        duration: 0.5,
        yoyo: 2,
      },
    },
  };

  return (
    <Link href="tel:0211122333">
      <motion.button
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        className={`${styles['button']} ${customClass}`}
        type={type}
      >
        {' '}
        <FontAwesomeIcon icon={faPhone} size="lg" />{' '}
        <span className={`${customClassText}`}>{text}</span>
      </motion.button>
    </Link>
  );
};
