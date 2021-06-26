import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Select from '../Select/Select';
/* Styles */
import styles from './InputGroup.module.css';

const InputGroup = (props) => {
  const { label = '', placeholder = 'This is a placeholder', required = false, size = 'large', theme = 'light', type = '', optionsList = [] } = props;

  const renderField = (type) => {
    switch (type) {
      case 'input':
        return (<Input parentClass={`${styles['input-group__field']}`} placeholder={placeholder} />);
      case 'textarea':
        return (<Textarea parentClass={`${styles['input-group__field']}`} placeholder={placeholder} />);
      case 'select':
        return (<Select parentClass={`${styles['input-group__field']}`} placeholder={placeholder} optionsList={optionsList} required={required} />);
      default:
        return null;
    }
  }
  if (type) {
    return (
      <div className={`${styles['input-group']} ${styles[`input-group--${size}`]} ${styles[`input-group--${theme}-theme`]}`}>
        { label ? <label className={`${styles['input-group__label']} ${styles['input-group__label--is-visible']}`}>{label} {required ? '*': ''}</label> : null }
        { renderField(type) }
      </div>
    );
  }
  
  return null;
}

export default InputGroup;
