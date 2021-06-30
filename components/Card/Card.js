import Image from "next/image";
import styles from "../Card/Card.module.css";
import Fade from "react-reveal";

const Card = ({
  settings = {
    src: "",
    alt: "",
    title: "",
    text: ""
  }
}) => {
  const { src, alt, title, text } = settings;

  return (
    <>
      <Fade bottom>
        <div className={`${styles["card__container"]}`}>
          <Image src={src} alt={alt} width={50} height={50} />
          <h2 className={styles["card__title"]}>{title}</h2>
          <p className={styles["card__subtitle"]}>{text}</p>
        </div>
      </Fade>
    </>
  );
};

export default Card;
