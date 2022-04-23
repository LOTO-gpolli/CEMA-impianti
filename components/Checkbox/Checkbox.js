/* Styles */
import styles from './Checkbox.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Checkbox = ({ error = {}, label, name, value, validation }) => {
  return (
    <>
      <div className={`${styles['checkbox']}`}>
        <input className={`${styles['checkbox__input']}`} type='checkbox' name={name} value={value} {...validation} />
        <span className={`${styles['checkbox__control']} ${ error.type ? `${styles['checkbox__field--has-errors']}` : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        </span>
        <label className={`${styles['checkbox__label']}`} htmlFor={name}>{label}</label>
      </div>
      { error.type && <div className={`${styles['checkbox__error-message']}`}>{<FontAwesomeIcon icon={faExclamationCircle} />} {error.message}</div> }
    </>
  );
}

export default Checkbox;
