import styles from "./Hero.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the FontAwesomeIcon component
import { faArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const Hero = () => {
  return (
    <div className={`${styles["hero"]}`}>
      <div className={`${styles["hero__text-container"]}`}>
        <h1 className={`${styles["hero__text-title"]}`}>CE.MA Impianti</h1>
        <h2 className={`${styles["hero__text"]}`}>
          Impianti elettrici civili e industriali
        </h2>
        <button className={`${styles["hero__button"]}`} type="button">
          <FontAwesomeIcon icon={faArrowDown} /> Scopri di più
        </button>
      </div>
      <div className={`${styles["hero__image-container"]}`}>
        <Image
          className={`${styles["hero__image"]}`}
          src="/images/Hero-image-sm.jpg"
          width={646}
          height={490}
        />
      </div>
    </div>
  );
};
export default Hero;
