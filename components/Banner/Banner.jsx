import Image from 'next/image';

import styles from './Banner.module.css';

const Banner = () => {
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
        <p className={`${styles['banner__title']}`}>Installatori certificati IMQ-AIR</p>
        <cite className={`${styles['banner__citation']}`}>Certificazione esperto impianti di allarme intrusione e rapina</cite>
      </div>
    </div>
  );
}

export default Banner;
