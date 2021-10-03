/* Styles */
import styles from './ButtonGroup.module.css';

const ButtonGroup = ({ children, position = 'left' }) => {
  return <div className={`${styles['button-group']} ${styles[`button-group--${position}`]}`}>
    { children }
  </div>
}

export default ButtonGroup;