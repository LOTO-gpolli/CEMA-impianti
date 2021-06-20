import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
/* Styles */
import styles from './InputGroup.module.css';

const InputGroup = (props) => {
  const { label = '', placeholder = 'This is a placeholder', required = false, size = 'size', theme = 'light', type = '' } = props;

  const renderField = (type) => {
    switch (type) {
      case 'input':
        return (<Input parentClass={`${styles['input-group__field']}`} placeholder={placeholder} />);
      case 'textarea':
        return (<Textarea parentClass={`${styles['input-group__field']}`} placeholder={placeholder} />);
      default:
        return null;
    }
  }
  if (type) {
    return (
      <div className={`${styles['input-group']} ${styles[`input-group--${size}`]} ${styles[`input-group--${theme}-theme`]}`}>
        <label className={`${styles['input-group__label']} ${styles['input-group__label--is-visible']}`}>{label} {required ? '*': ''}</label>
        { renderField(type) }
      </div>
    );
  }
  
  return null;
}

export default InputGroup;
