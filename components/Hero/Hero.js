import styles from './Hero.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the FontAwesomeIcon component
import { faArrowDown, faPhone } from '@fortawesome/free-solid-svg-icons'; // import the icons you need
import { Button } from '../Button/Button';

const Hero = () => {
  return (
    <div className={`${styles['hero']}`}>
      <div className={`${styles['hero__heading']}`}>
        <h1 className={`${styles['hero__title']}`}>CE.MA Impianti</h1>
        <h2 className={`${styles['hero__subtitle']}`}>
          Impianti elettrici civili e industriali
        </h2>
        <button className={`${styles['hero__button']}`} type="button">
          <a href="#servizi">
            <FontAwesomeIcon icon={faArrowDown} /> Scopri di più
          </a>
        </button>
      </div>
      <div className={`${styles['hero__image-container']}`}>
        <Image
          className={`${styles['hero__image']}`}
          src="/images/Hero-image-sm.jpg"
          width={484}
          height={367}
        />
      </div>
    </div>
  );
};
export default Hero;
