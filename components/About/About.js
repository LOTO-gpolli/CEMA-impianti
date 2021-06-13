import Image from "next/image";
import styles from "../About/About.module.css";

const About = () => {
  return (
    <>
      <section className={`${styles["about__container"]}`}>
        <h2>CHI SIAMO</h2>
        <div className={`${styles["about__grid-container"]}`}>
          <p className={`${styles["grid__item1"]}`}>
            <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
            voluptatum fugiat soluta expedita quae exercitationem optio in! Libero tempore
            accusantium consequatur quia! Dolor ipsum magnam reprehenderit repellat a
            illum dolorem.
            <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
            voluptatum fugiat soluta expedita quae exercitationem optio in! Libero tempore
            accusantium consequatur quia! Dolor ipsum magnam reprehenderit repellat a
            illum dolorem.
            <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
            voluptatum fugiat soluta expedita quae exercitationem optio in! Libero tempore
            accusantium consequatur quia! Dolor ipsum magnam reprehenderit repellat a
            illum dolorem.
          </p>
          {/* Le immagini sono in un div per evitare lo stretch delle foto  */}
          <div className={`${styles["grid__item2"]}`}>
            <Image
              className={`${styles["about__image"]}`}
              src="/images/mare.jpg"
              width={600}
              height={400}
            />
          </div>
          <div className={`${styles["grid__item3"]}`}>
            <Image
              className={`${styles["about__image"]}`}
              src="/images/mare.jpg"
              width={600}
              height={400}
            />
          </div>

          <p className={`${styles["grid__item4"]}`}>
            <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
            voluptatum fugiat soluta expedita quae exercitationem optio in! Libero tempore
            accusantium consequatur quia! Dolor ipsum magnam reprehenderit repellat a
            illum dolorem.
            <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
            voluptatum fugiat soluta expedita quae exercitationem optio in! Libero tempore
            accusantium consequatur quia! Dolor ipsum magnam reprehenderit repellat a
            illum dolorem.
            <b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit. Aperiam,
            voluptatum fugiat soluta expedita quae exercitationem optio in! Libero tempore
            accusantium consequatur quia! Dolor ipsum magnam reprehenderit repellat a
            illum dolorem.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
