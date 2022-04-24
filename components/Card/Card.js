import PropTypes from "prop-types";
import { useState } from 'react';
import styles from '../Card/Card.module.css';

const Card = ({
  title,
  description,
  icon
}) => {
  const [underline, setUnderline] = useState(false);

  return (
    <>
      <div
        className={`${styles['card__container']}`}
      >
        <div
          className={styles['card__icon-container']}
        >
          <img className={styles['card__icon']} src={icon} alt="" />
        </div>
        <div
          className={styles['card__content']}
        >
          {/* TODO understand why the underline condition */}
          <h3 className={underline ? styles['card__title-scroll'] : styles['card__title']}>
            {title}
          </h3>

          <p className={styles['card__subtitle']}>{description}</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Card;
