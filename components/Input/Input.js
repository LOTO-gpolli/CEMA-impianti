import styles from './Input.module.css';

const Input = ({ children, ...props }) => {
  const { parentClass, placeholder, validation } = props;
  
  return (
    <input className={`${styles['input']} ${ parentClass ? `${parentClass}` : '' }`} placeholder={placeholder} {...validation}></input>
  );
}

export default Input;