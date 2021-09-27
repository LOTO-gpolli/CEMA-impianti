import styles from '../Burger/Burger.module.css';
const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${styles['burger-menu']}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={`${styles['fancy-burger']}`}>
        <span
          className={`${styles['rectangle']} ${styles['rectangle--top']} ${
            styles['rectangle--small']
          } ${isOpen ? `${styles['open']}` : ''}`}
        ></span>
        <span
          className={`${styles['rectangle']} ${styles['rectangle--middle']} ${
            isOpen ? `${styles['open']}` : ''
          } `}
        ></span>
        <span
          className={`${styles['rectangle']} ${styles['rectangle--bottom']} ${
            styles['rectangle--small']
          } ${isOpen ? `${styles['open']}` : ''} `}
        ></span>
      </button>
    </div>
  );
};

export default Burger;
