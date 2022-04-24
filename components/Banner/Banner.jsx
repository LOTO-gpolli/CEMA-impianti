import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './Banner.module.css';

const Banner = ({ title, description }) => {
  return (
    <div className={`${styles['banner']}`}>
      <div className={`${styles['banner__icon-wrapper']}`}>
        <Image
          className={`${styles['banner__icon']}`}
          src='/images/IMQ_certification.png'
          alt='IMQ certification'
          width={60}
          height={60}
          layout='fixed'
        />
      </div>
      <div className={`${styles['banner__text-wrapper']}`}>
        <p className={`${styles['banner__title']}`}>{title}</p>
        <cite className={`${styles['banner__citation']}`}>{description}</cite>
      </div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Banner;
