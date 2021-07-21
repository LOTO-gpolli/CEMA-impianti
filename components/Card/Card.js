import Image from "next/image";
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

  return (
    <>
      <Fade bottom cascade>
        <div className={`${styles["card__container"]}`}>
          {/* <Image src={src} alt={alt} width={50} height={50} /> */}
          <FontAwesomeIcon icon={icon} size={"2x"} className={styles["card__icon"]} />
          <div className={styles["card__content"]}>
            <h3 className={styles["card__title"]}>{title}</h3>
            <p className={styles["card__subtitle"]}>{text}</p>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Card;
