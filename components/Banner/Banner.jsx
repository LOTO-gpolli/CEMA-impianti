import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={`${styles['banner']}`}>
      <img className={`${styles['banner__icon']}`} src='/images/IMQ_certification.png' />
      <div className={`${styles['banner__text-wrapper']}`}>
        <p className={`${styles['banner__title']}`}>Installatori certificati IMQ-AIR</p>
        <cite className={`${styles['banner__citation']}`}>Certificazione esperto impianti di allarme intrusione e rapina</cite>
      </div>
    </div>
  );
}

export default Banner;
