import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../Card/Card.module.css";
import Fade from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

const Card = ({
  settings = {
    icon: {},
    // alt: "",
    title: "",
    text: ""
  }
}) => {
  const { title, text, icon } = settings;

  const [underline, setUnderline] = useState(false);

  const changeUL = () => {
    if (window.scrollY > 600) {
      setUnderline(true);
    } else {
      setUnderline(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeUL);
  });

  return (
    <>
      <Fade bottom>
        <div className={`${styles["card__container"]}`}>
          <div className={styles["card__icon-container"]}>
            <FontAwesomeIcon icon={icon} size={"2x"} className={styles["card__icon"]} />
          </div>
          <Fade cascade>
            <div className={styles["card__content"]}>
              <h3
                className={
                  underline ? styles["card__title-scroll"] : styles["card__title"]
                }
              >
                {title}
              </h3>

              <p className={styles["card__subtitle"]}>{text}</p>
            </div>
          </Fade>
        </div>
      </Fade>
    </>
  );
};

export default Card;
