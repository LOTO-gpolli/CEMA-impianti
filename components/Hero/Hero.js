import styles from "../Hero/Hero.module.css";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div className={`${styles["hero"]}`}>
      <Fade duration={2000}>
        <div className={`${styles["hero__text"]}`}>
          <h1>Soluzioni per privati e aziende</h1>
          <h2>Impianti civili e industriali</h2>
          <h2>Installazione allarmi e videosorveglianza</h2>
          <h2>Videocitofonia</h2>
          <h2>Automazione</h2>
          <Fade bottom delay={1000}>
            <div className={`${styles["hero__text"]}`}>
              <a className={`${styles["hero__btn"]}`} href="#servizi">
                I nostri servizi
              </a>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
