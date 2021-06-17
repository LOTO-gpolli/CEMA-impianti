import { useState } from "react";
import styles from "../Gallery/Gallery.module.css";
import Carousel from "react-bootstrap/Carousel";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="gallery" className={`${styles["gallery__container"]}`}>
      <h2 className={`${styles["gallery__title"]}`}>I NOSTRI LAVORI</h2>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={`${styles["gallery__carousel"]}`}
      >
        <Carousel.Item>
          <img className="d-block w-100" src="/images/Mare.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3 className={`${styles["slide__title"]}`}>First slide label</h3>
            <p className={`${styles["slide__subtitle"]}`}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/Montagna.jpg" alt="Second slide" />

          <Carousel.Caption>
            <h3 className={`${styles["slide__title"]}`}>Second slide label</h3>
            <p className={`${styles["slide__subtitle"]}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/Foresta.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h3 className={`${styles["slide__title"]}`}>Third slide label</h3>
            <p className={`${styles["slide__subtitle"]}`}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
export default Gallery;
