import styles from './Input.module.css';

const Input = ({ children, ...props }) => {
  const { id, parentClass, placeholder, validation } = props;
  
  return (
    <input id={id} className={`${styles['input']} ${ parentClass ? `${parentClass}` : '' }`} placeholder={placeholder} {...validation}></input>
  );
}

export default Input;