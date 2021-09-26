import styles from './Hero.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the FontAwesomeIcon component
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; // import the icons you need
import { Fade, Flip } from 'react-reveal';

const Hero = () => {
  /*Parallax Effect*/
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  console.log(`offsetY: ${offsetY}`);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  /*End of Parallax Effect*/

  return (
    <div
      className={`${styles['hero']}`}
      /*Applicazione del Parallax Effect al div Hero. Memo background-attachment: fixed;*/
      style={{
        transform: `translateY(${-offsetY * 0.3}px)`,
        opacity: `${-offsetY * 0.0025 + 1}`
      }}
    >
      <Fade left>
        <div className={`${styles['hero__heading']}`}>
          <h1 className={`${styles['hero__title']}`}>CE.MA Impianti</h1>
          <h2 className={`${styles['hero__subtitle']}`}>
            Impianti elettrici civili e industriali
          </h2>
          <Fade up delay={800}>
            <button className={`${styles['hero__button']}`} type="button">
              <a href="#servizi">
                <FontAwesomeIcon icon={faArrowDown} size="lg" /> Scopri di più
              </a>
            </button>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};
export default Hero;
