/* Styles */
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles['footer']} ${styles['footer--red']}`}>
      Header
    </header>
  );
}

export default Header;