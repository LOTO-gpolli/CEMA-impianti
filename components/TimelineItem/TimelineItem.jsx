import Image from 'next/image';
import styles from './TimelineItem.module.css'

const TimelineItem = ({ position }) => {
  return (
    <div className={`${styles['timeline-item']} ${styles[`timeline-item--${position}`]}`}>
      <div className={styles['timeline-item__text-container']}>
        <h4 className={`${styles['timeline-item__title']}`}>Timeline title</h4>
        <p className={`${styles['timeline-item__text']}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam facere est debitis adipisci temporibus. Aperiam praesentium repellat, sunt maiores non ad facere minus magnam. Numquam quia quos placeat eveniet quam?</p>
      </div>
      <div className={`${styles['timeline-item__image-container']}`}>
        <Image
          alt="Fase del progetto"
          className={`${styles['timeline-item__image']}`}
          layout="fill"
          src="/images/placeholder_image_black_and_white.jpg"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default TimelineItem;