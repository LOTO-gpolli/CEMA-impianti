import React from 'react';
/* Styles */
import styles from './Checkbox.module.css';

const Checkbox = ({ label, name, value }) => {
  return (
    <div className={`${styles['checkbox']}`}>
      <input className={`${styles['checkbox__input']}`} type='checkbox' name={name} value={value} />
      <span className={`${styles['checkbox__control']}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            d="M1.73 12.91l6.37 6.37L22.79 4.59"
          />
        </svg>
      </span>
      <label className={`${styles['checkbox__label']}`} htmlFor={name}>{label}</label>
    </div>
  );
}

export default Checkbox;
