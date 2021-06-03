import styles from './Button.module.css';

export const Button = ({ settings = { text: '', type: 'button', customClass: '' } }) => {
  const { customClass, text, type } = settings;

  return (
    <button className={`${styles['button']} ${customClass}`} type={type}>{text}</button>
  );
}