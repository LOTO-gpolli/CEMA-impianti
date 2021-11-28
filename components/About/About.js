import Image from 'next/image';
import SectionHeading from '../SectionHeading/SectionHeading';
import StoryLine from '../StoryLine/StoryLine';
import TeamMembers from '../TeamMembers/TeamMembers';
// Styles
import styles from '../About/About.module.css';

const About = () => {
  return (
    <section className={`${styles['about']}`} id='about'>
      <SectionHeading
        title='chi siamo'
      />
      <StoryLine
        title='Titolo di esempio'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, nisl at dictum tempor, enim mauris posuere tortor, nec vulputate eros arcu et ante. Suspendisse ullamcorper semper metus. Aenean ut metus tristique, imperdiet odio vitae, fermentum dolor. Proin varius lorem id dui porttitor, nec euismod mi convallis. Duis in mollis ipsum, ac volutpat orci.'
        imageSource="/images/placeholder_image_black_and_white.jpg"
      />
      <StoryLine
        title='Titolo di esempio'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, nisl at dictum tempor, enim mauris posuere tortor, nec vulputate eros arcu et ante. Suspendisse ullamcorper semper metus. Aenean ut metus tristique, imperdiet odio vitae, fermentum dolor. Proin varius lorem id dui porttitor, nec euismod mi convallis. Duis in mollis ipsum, ac volutpat orci.'
        imageSource="/images/placeholder_image_black_and_white.jpg"
        reverse
      />
      <TeamMembers />
    </section>
  );

  return (
    <section id="about" className={`${styles['about__container']}`}>
      <h2 className={`${styles['about__title']}`}>CHI SIAMO</h2>

      <div className={`${styles['about__grid-container']}`}>
        {/* <Fade> */}
        <p className={`${styles['grid__item1']}`}>
          <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam, voluptatum
          fugiat soluta expedita quae exercitationem optio in! Libero tempore accusantium
          consequatur quia! Dolor ipsum magnam reprehenderit repellat a illum dolorem.
          <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam, voluptatum
          fugiat soluta expedita quae exercitationem optio in! Libero tempore accusantium
          consequatur quia! Dolor ipsum magnam reprehenderit repellat a illum dolorem.
          <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam, voluptatum
          fugiat soluta expedita quae exercitationem optio in! Libero tempore accusantium
          consequatur quia! Dolor ipsum magnam reprehenderit repellat a illum dolorem.
        </p>
        {/* </Fade> */}
        {/* Le immagini sono in un div per evitare lo stretch delle foto  */}
        {/* <Fade> */}
        <div className={`${styles['grid__item2']}`}>
          <Image
            className={`${styles['about__image']}`}
            src="/images/mare.jpg"
            width={600}
            height={400}
            layout={'responsive'} /*per adattare l'immagine al div*/
          />
        </div>
        {/* </Fade>
        <Fade> */}
        <div className={`${styles['grid__item3']}`}>
          <Image
            className={`${styles['about__image']}`}
            src="/images/mare.jpg"
            width={600}
            height={400}
            layout={'responsive'}
          />
        </div>
        {/* </Fade>
        <Fade> */}
        <p className={`${styles['grid__item4']}`}>
          <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam, voluptatum
          fugiat soluta expedita quae exercitationem optio in! Libero tempore accusantium
          consequatur quia! Dolor ipsum magnam reprehenderit repellat a illum dolorem.
          <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam, voluptatum
          fugiat soluta expedita quae exercitationem optio in! Libero tempore accusantium
          consequatur quia! Dolor ipsum magnam reprehenderit repellat a illum dolorem.
          <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam, voluptatum
          fugiat soluta expedita quae exercitationem optio in! Libero tempore accusantium
          consequatur quia! Dolor ipsum magnam reprehenderit repellat a illum dolorem.
        </p>
        {/* </Fade> */}
      </div>
      <div className={`${styles['about__list-container']}`}>
        <h3>LOREM IPSUM</h3>
        {/* <Fade cascade> */}
        <ul className={`${styles['about__list']}`}>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
        {/* </Fade> */}
      </div>
    </section>
  );
};

export default About;
