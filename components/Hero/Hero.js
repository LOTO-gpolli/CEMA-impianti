import PropTypes from 'prop-types'
import styles from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
/* Components */
import useInfiniteLoop from '../../hooks/useInfiniteLoop'
/* Helpers */
import { scrollToSection } from '../../helpers/utils'

const Hero = ({ title, subtitle, services }) => {
  return (
    <div className={`${styles['hero']}`}>
      <div className={`${styles['hero__heading']}`}>
        <h1 className={`${styles['hero__title']}`}>
          {title}
        </h1>
        <h2 className={`${styles['hero__subtitle']}`}>{subtitle}</h2>
        <p className={`${styles['hero__service']}`}>{useInfiniteLoop(services, 2000)}</p>
        <button
          className={`${styles['hero__button']}`}
          type="button"
          onClick={() => scrollToSection('services')}
        >
            <FontAwesomeIcon icon={faArrowDown} size="lg" /> Scopri di più
        </button>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.string)
}

export default Hero;
