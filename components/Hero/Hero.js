import styles from './Hero.module.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Hero = () => {
  /*-- Parallax Effect --*/
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);
  // console.log(`offsetY: ${offsetY}`);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  /*-- End of Parallax Effect --*/

  /*-- FRAMER MOTION --*/
  // const containerVariants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.4,
  //     },
  //   },
  // };

  // const childVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: '-20px',
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: '0px',
  //     transition: {
  //       duration: 1,
  //     },
  //   },
  // };
  /*-- END OF FRAMER MOTION --*/

  return (
    <div
      className={`${styles['hero']}`}
      /*Applicazione del Parallax Effect al div Hero. Memo background-attachment: fixed;*/
      // style={{
      //   transform: `translateY(${-offsetY * 0.3}px)`,
      //   opacity: `${-offsetY * 0.0025 + 1}`,
      // }}
    >
      <motion.div
        // initial="hidden"
        // animate="visible"
        // variants={containerVariants}
        className={`${styles['hero__heading']}`}
      >
        <motion.h1
          //  variants={childVariants}
          className={`${styles['hero__title']}`}
        >
          CE.MA Impianti
        </motion.h1>
        <h2 className={`${styles['hero__subtitle']}`}>
          I migliori professionisti per il tuo
        </h2>
        <p className={`${styles['hero__dynamic-product']}`}></p>
        {/* <Fade up delay={800}> */}
        <motion.button
          // variants={childVariants}
          className={`${styles['hero__button']}`}
          type="button"
        >
          <a href="#servizi">
            <FontAwesomeIcon icon={faArrowDown} size="lg" /> Scopri di più
          </a>
        </motion.button>
      </motion.div>
    </div>
  );
};
export default Hero;
