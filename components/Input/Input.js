import styles from './Input.module.css';

const Input = ({ children, ...props }) => {
  const { parentClass, placeholder } = props;

  console.log(placeholder);
  
  return (
    <input className={`${styles['input']} ${ parentClass ? `${parentClass}` : '' }`} placeholder={placeholder}></input>
  );
}

export default Input;