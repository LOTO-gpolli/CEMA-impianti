import styles from "./Hero.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the FontAwesomeIcon component
import { faArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Button } from "../Button/Button";
import { Fade, Flip } from "react-reveal";

const Hero = () => {
  return (
    <div className={`${styles["hero"]}`}>
      <Fade left delay={800}>
        <div className={`${styles["hero__heading"]}`}>
          <h1 className={`${styles["hero__title"]}`}>CE.MA Impianti</h1>
          <h2 className={`${styles["hero__subtitle"]}`}>
            Impianti elettrici civili e industriali
          </h2>
          <Fade up delay={1600}>
            <button className={`${styles["hero__button"]}`} type="button">
              <FontAwesomeIcon icon={faArrowDown} /> Scopri di più
            </button>
          </Fade>
        </div>
      </Fade>
      <Flip top>
        <div className={`${styles["hero__image-container"]}`}>
          <Image
            className={`${styles["hero__image"]}`}
            src="/images/Hero-image-sm.jpg"
            width={646}
            height={490}
          />
        </div>
      </Flip>
    </div>
  );
};
export default Hero;
