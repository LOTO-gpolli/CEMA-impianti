import Image from "next/image";
import styles from "../Card/Card.module.css";

const Card = ({
  settings = {
    src: "",
    alt: "",
    width: "",
    height: "",
    title: "",
    text: ""
  }
}) => {
  const { src, alt, width, height, title, text } = settings;

  return (
    <>
      <div className={`${styles["card__container"]}`}>
        <Image src={src} alt={alt} width={width} height={height} />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Card;
