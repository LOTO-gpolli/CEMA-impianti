import styles from "./Hero.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the FontAwesomeIcon component
import { faArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Button } from "../Button/Button";
import { Fade, Flip } from "react-reveal";
import { useState, useEffect } from "react";

const Hero = () => {
  /*Parallax Effect*/
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /*End of Parallax Effect*/

  return (
    <div className={`${styles["hero"]}`}>
      <Fade left delay={800}>
        <div className={`${styles["hero__heading"]}`}>
          <div style={{ transform: `translateY(${-offsetY * 0.4}px)` }}>
            <h1 className={`${styles["hero__title"]}`}>CE.MA Impianti</h1>
            <h2 className={`${styles["hero__subtitle"]}`}>
              Impianti elettrici civili e industriali
            </h2>
            <Fade up delay={1600}>
              <button className={`${styles["hero__button"]}`} type="button">
                <a href="#servizi">
                  <FontAwesomeIcon icon={faArrowDown} /> Scopri di più
                </a>
              </button>
            </Fade>
          </div>
        </div>
      </Fade>
      <div style={{ transform: `translateY(${-offsetY * 0.4}px)` }}>
        <Fade>
          <Flip top>
            <div className={`${styles["hero__image-container"]}`}>
              <Image
                className={`${styles["hero__image"]}`}
                src="/images/Hero-image-sm.jpg"
                width={484}
                height={367}
              />
            </div>
          </Flip>
        </Fade>
      </div>
    </div>
  );
};
export default Hero;
