import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Select from '../Select/Select';
/* Styles */
import styles from './InputGroup.module.css';

const InputGroup = (props) => {
  const { label = '', id, placeholder = 'This is a placeholder', required = false, size = 'large', theme = 'light', type = '', optionsList = [], clearErrors, validation = {}, error = {}, setValue } = props;
  
  const renderField = (type) => {
    switch (type) {
      case 'input':
        return (<Input id={id} parentClass={`${styles['input-group__field']} ${error.type ? `${styles['input-group__field--has-errors']}` : ''}`} placeholder={placeholder} validation={validation} />);
      case 'textarea':
        return (<Textarea id={id} parentClass={`${styles['input-group__field']} ${error.type ? `${styles['input-group__field--has-errors']}` : ''}`} placeholder={placeholder} validation={validation} />);
      case 'select':
        return (<Select parentClass={`${styles['input-group__field']} ${error.type ? `${styles['input-group__field--has-errors']}` : ''}`} placeholder={placeholder} optionsList={optionsList} clearErrors={clearErrors} validation={validation} setValue={setValue} />);
      default:
        return null;
    }
  }
  if (type) {
    return (
      <div className={`${styles['input-group']} ${styles[`input-group--${size}`]} ${styles[`input-group--${theme}-theme`]}`}>
        { label && <label className={`${styles['input-group__label']} ${styles['input-group__label--is-visible']}`} htmlFor={id}>{label} {required ? '*': ''}</label> }
        { renderField(type) }
      </div>
    );
  }
  
  return null;
}

export default InputGroup;
