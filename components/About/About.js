import Image from 'next/image';
import styles from '../About/About.module.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import Team from '../Team/Team';

const About = () => {
  return (
    <>
      <section id="about" className={`${styles['about__container']}`}>
        {/* <h2 className={`${styles['about__title']}`}>CHI SIAMO</h2> */}
        <SectionHeading title="chi siamo" />

        <div className={`${styles['about__grid-container']}`}>
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
          {/* Le immagini sono in un div per evitare lo stretch delle foto  */}
          <div className={`${styles['grid__item2']}`}>
            <Image
              className={`${styles['about__image']}`}
              src="/images/mare.jpg"
              width={600}
              height={400}
              layout={'responsive'} /*per adattare l'immagine al div*/
            />
          </div>

          <div className={`${styles['grid__item3']}`}>
            <Image
              className={`${styles['about__image']}`}
              src="/images/mare.jpg"
              width={600}
              height={400}
              layout={'responsive'}
            />
          </div>

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
        </div>
        <div className={`${styles['about__list-container']}`}>
          <h3>LOREM IPSUM</h3>
          <ul className={`${styles['about__list']}`}>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <Team />
      </section>
    </>
  );
};

export default About;
