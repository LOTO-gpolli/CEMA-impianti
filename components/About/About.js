import Image from "next/image";
import styles from "../About/About.module.css";
import Fade from "react-reveal";

const About = () => {
  return (
    <>
      <section id="about" className={`${styles["about__container"]}`}>
        <h2>CHI SIAMO</h2>

        <div className={`${styles["about__grid-container"]}`}>
          <Fade>
            <p className={`${styles["grid__item1"]}`}>
              <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
              voluptatum fugiat soluta expedita quae exercitationem optio in! Libero
              tempore accusantium consequatur quia! Dolor ipsum magnam reprehenderit
              repellat a illum dolorem.
              <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
              voluptatum fugiat soluta expedita quae exercitationem optio in! Libero
              tempore accusantium consequatur quia! Dolor ipsum magnam reprehenderit
              repellat a illum dolorem.
              <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
              voluptatum fugiat soluta expedita quae exercitationem optio in! Libero
              tempore accusantium consequatur quia! Dolor ipsum magnam reprehenderit
              repellat a illum dolorem.
            </p>
          </Fade>
          {/* Le immagini sono in un div per evitare lo stretch delle foto  */}
          <Fade>
            <div className={`${styles["grid__item2"]}`}>
              <Image
                className={`${styles["about__image"]}`}
                src="/images/mare.jpg"
                width={600}
                height={400}
                layout={"responsive"} /*per adattare l'immagine al div*/
              />
            </div>
          </Fade>
          <Fade>
            <div className={`${styles["grid__item3"]}`}>
              <Image
                className={`${styles["about__image"]}`}
                src="/images/mare.jpg"
                width={600}
                height={400}
                layout={"responsive"}
              />
            </div>
          </Fade>
          <Fade>
            <p className={`${styles["grid__item4"]}`}>
              <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
              voluptatum fugiat soluta expedita quae exercitationem optio in! Libero
              tempore accusantium consequatur quia! Dolor ipsum magnam reprehenderit
              repellat a illum dolorem.
              <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
              voluptatum fugiat soluta expedita quae exercitationem optio in! Libero
              tempore accusantium consequatur quia! Dolor ipsum magnam reprehenderit
              repellat a illum dolorem.
              <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
              voluptatum fugiat soluta expedita quae exercitationem optio in! Libero
              tempore accusantium consequatur quia! Dolor ipsum magnam reprehenderit
              repellat a illum dolorem.
            </p>
          </Fade>
        </div>
        <Fade>
          <div className={`${styles["about__list"]}`}>
            <h3>LOREM IPSUM</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default About;
