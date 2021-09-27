import { useEffect, useState, useRef } from 'react';
import styles from '../Card/Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { motion } from 'framer-motion';
import useOnScreen from '../../hooks/useOnScreen';

const Card = ({
  settings = {
    icon: {},
    title: '',
    text: '',
  },
}) => {
  const { title, text, icon } = settings;

  const [underline, setUnderline] = useState(false);

  // Effetto CSS sulla sottolineatura del titolo

  // const changeUL = () => {
  //   if (window.scrollY > 500) {
  //     setUnderline(true);
  //   } else {
  //     setUnderline(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', changeUL);
  // });

  /*useOnScreen*/
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  /*End of useOnScreen*/

  const containerVariants = {
    hidden: {
      opacity: isVisible ? 1 : 0,
    },
    visible: {
      opacity: isVisible ? 1 : 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <>
      {/* <Fade bottom> */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`${styles['card__container']}`}
      >
        <div className={styles['card__icon-container']}>
          <FontAwesomeIcon icon={icon} size={'2x'} className={styles['card__icon']} />
        </div>
        {/* <Fade cascade> */}
        <div className={styles['card__content']}>
          <h3 className={underline ? styles['card__title-scroll'] : styles['card__title']}>
            {title}
          </h3>

          <p className={styles['card__subtitle']}>{text}</p>
        </div>
        {/* </Fade> */}
      </motion.div>
      {/* </Fade> */}
    </>
  );
};

export default Card;
