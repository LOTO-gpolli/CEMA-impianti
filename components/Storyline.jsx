// Styles
import styles from './StoryLine.module.css';

const StoryLine = ({ description, imageSource, title = '', reverse = false }) => {
  return (
    <div className={`${styles['storyline']} ${reverse ? `${styles['storyline--reverse']}` : ''}`}>
      <div className={styles['storyline__text-wrapper']}>
        {title && <h4 className={styles['storyline__title']}>{title}</h4>}
        <p className={styles['storyline__description']}>{description}</p>
      </div>
      <img className={styles['storyline__image']} src={imageSource} alt="" />
    </div>
  );
};

export default StoryLine;
