import styles from './Hero.module.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the FontAwesomeIcon component
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; // import the icons you need
// import { Fade } from 'react-reveal';
import { motion } from 'framer-motion';

const Hero = () => {
  /*Parallax Effect*/
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  // console.log(`offsetY: ${offsetY}`);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  /*End of Parallax Effect*/

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: '-20px',
    },
    visible: {
      opacity: 1,
      y: '0px',
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div
      className={`${styles['hero']}`}
      /*Applicazione del Parallax Effect al div Hero. Memo background-attachment: fixed;*/
      style={{
        transform: `translateY(${-offsetY * 0.3}px)`,
        opacity: `${-offsetY * 0.0025 + 1}`,
      }}
    >
      {/* <Fade left> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`${styles['hero__heading']}`}
      >
        <motion.h1 variants={childVariants} className={`${styles['hero__title']}`}>
          CE.MA Impianti
        </motion.h1>
        <h2 className={`${styles['hero__subtitle']}`}>
          I migliori professionisti per il tuo
        </h2>
        <p className={`${styles['hero__dynamic-product']}`}></p>
        {/* <Fade up delay={800}> */}
        <motion.button
          variants={childVariants}
          className={`${styles['hero__button']}`}
          type="button"
        >
          <a href="#servizi">
            <FontAwesomeIcon icon={faArrowDown} size="lg" /> Scopri di più
          </a>
        </motion.button>
        {/* </Fade> */}
      </motion.div>
      {/* </Fade> */}
    </div>
  );
};
export default Hero;
