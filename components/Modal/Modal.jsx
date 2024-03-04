import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = ({ onClose, open, text }) => {
  if (open) {
    return (
      <div className={`${styles['overlay']}`}>
        <div className={`${styles['modal']}`}>
          <p className={`${styles['modal-text']}`}>{text}</p>
          <Button text="Chiudi" settings={{ handleClick: onClose }} />
        </div>
      </div>
    );
  }

  return null;
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Modal;
