import Image from 'next/image';
import styles from '../TeamMember/TeamMember.module.css';
// import Fade from 'react-reveal';

const TeamMember = ({
  settings = {
    src: '',
    alt: '',
    title: '',
    text: '',
  },
}) => {
  const { src, alt, title, text } = settings;

  return (
    <>
      <div className={`${styles['team-member__container']}`}>
        <div className={styles['team-member__content']}>
          <div className={`${styles['team-member__image-container']}`}>
            <Image
              className={`${styles['team-member__image']}`}
              src={src}
              alt={alt}
              width={500}
              height={500}
              layout={'responsive'}
            />
          </div>
          <h3 className={styles['team-member__title']}>{title}</h3>
          <p className={styles['team-member__subtitle']}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
