import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './TimelineItem.module.css'

const TimelineItem = ({ title, description, image, reverse }) => {
  return (
    <div className={`${styles['timeline-item']} ${styles[`timeline-item--${reverse ? 'right' : 'left'}`]}`}>
      <div className={styles['timeline-item__text-container']}>
        <h4 className={`${styles['timeline-item__title']}`}>{title}</h4>
        <p className={`${styles['timeline-item__text']}`}>{description}</p>
      </div>
      <div className={`${styles['timeline-item__image-container']}`}>
        <Image
          alt="Fase del progetto"
          className={`${styles['timeline-item__image']}`}
          layout="fill"
          loader={() => image}
          src={image}
          objectFit="cover"
        />
      </div>
    </div>
  );
}

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
}

export default TimelineItem;