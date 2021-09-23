import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../TeamMember/TeamMember.module.css';
import Fade from 'react-reveal';

const TeamMember = ({
  settings = {
    src: '',
    alt: '',
    title: '',
    text: ''
  }
}) => {
  const { src, alt, title, text } = settings;

  // const [underline, setUnderline] = useState(false);

  // const changeUL = () => {
  //   if (window.scrollY > 5000) {
  //     setUnderline(true);
  //   } else {
  //     setUnderline(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", changeUL);
  // });

  return (
    <>
      <Fade bottom>
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
            <Fade cascade>
              <h3 className={styles['team-member__title']}>{title}</h3>
              <p className={styles['team-member__subtitle']}>{text}</p>
            </Fade>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default TeamMember;
