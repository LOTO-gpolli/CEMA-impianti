// import Checkbox from 'components/Checkbox/Checkbox';
/* Styles */
import styles from './CheckboxGroup.module.css';

const CheckboxGroup = ({ children }) => {
  return (
    <div className={`${styles['checkbox-group']}`}>
      {children}
    </div>
  );
}

export default CheckboxGroup;
