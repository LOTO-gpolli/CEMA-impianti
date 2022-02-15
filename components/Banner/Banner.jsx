import styles from './Banner.module.css'
import Image from "next/image"

const Banner = () => {
  return (
    <div className={`${styles['banner']}`}>
      <div>
      <Image className={`${styles['banner__icon']}`} src='/images/IMQ_certification.png' alt='IMQ certification' width={75} height={75} />
      </div>
      <div className={`${styles['banner__text-wrapper']}`}>
        <p className={`${styles['banner__title']}`}>Installatori certificati IMQ-AIR</p>
        <cite className={`${styles['banner__citation']}`}>Certificazione esperto impianti di allarme intrusione e rapina</cite>
      </div>
    </div>
  );
}

export default Banner;
