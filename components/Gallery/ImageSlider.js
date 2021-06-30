import { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import styles from "../Gallery/ImageSlider.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className={styles["gallery__container"]}>
      <h2>IMAGE SLIDER</h2>
      <div className={styles["gallery__slider"]}>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className={styles["slider__left-arrow"]}
          onClick={prevSlide}
        />
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className={styles["slider__right-arrow"]}
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) => {
          return (
            <>
              <div
                className={
                  index == current
                    ? `${styles["slider__slide--is-active"]}`
                    : styles["slider__slide"]
                }
                key={index}
              >
                {index == current && (
                  <div
                    className={styles["slider__image-container"]}
                    onMouseOver={() => setIsActive(false)}
                    onMouseLeave={() => setIsActive(true)}
                  >
                    <Image
                      src={slide.image}
                      alt="travel image"
                      className={styles["slider__image"]}
                      width={600}
                      height={400}
                    />
                    <div
                      className={
                        isActive
                          ? styles["slide__text"]
                          : styles["slide__text--is-paused"]
                      }
                    >
                      <h2 className={styles["slide__title"]}>{slide.title}</h2>
                      <p className={styles["slide__subtitle"]}>{slide.subtitle}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
      {SliderData.map((dot, index) => {
        return (
          <div className={styles["slider__dots"]} key={index}>
            <div
              className={
                index == current
                  ? styles["slider__dot--is-active"]
                  : styles["slider__dot"]
              }
              /*Al click vado sulla slide corrispondente al segnaposto*/
              onClick={() => setCurrent(index)}
            >
              {dot.index}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
