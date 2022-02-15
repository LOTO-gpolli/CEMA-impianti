import Image from 'next/dist/client/image';
// Styles
import styles from './StoryLine.module.css';

const StoryLine = ({ description, imageSource, title = '', reverse = false  }) => {
  return (
    <div className={`${styles['storyline']} ${ reverse ? `${styles['storyline--reverse']}` : '' }`}>
      <div className={styles['storyline__text-wrapper']}>
        {title && <h4 className={styles['storyline__title']}>{title}</h4>}
        <p className={styles['storyline__description']}>{description}</p>
      </div>
      <div className={styles['storyline__image-wrapper']}> 
        <Image className={styles['storyline__image']} src={imageSource} width={600} height={400}/>
      </div>
    </div>
  );
}

export default StoryLine;