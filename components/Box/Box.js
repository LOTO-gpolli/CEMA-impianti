import styles from '../Box/Box.module.css';
import Image from 'next/image';

const Box = () => {
  return (
    <div className={`${styles['box__container']}`}>
      <div className={`${styles['box']}`}>
        <p className={`${styles['box__text']}`}>
          <strong>Installatori Certificati IMQ-AIR.</strong>
          <br />
          "Certificazione esperto impianti di allarme intrusione e rapina."
        </p>
        <div>
          <Image
            className={`${styles['box__image']}`}
            src="/images/IMQ-logo.png"
            width={200}
            height={62.5}
          />
        </div>
      </div>
    </div>
  );
};

export default Box;
