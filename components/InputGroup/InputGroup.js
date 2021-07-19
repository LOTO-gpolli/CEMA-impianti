import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Select from '../Select/Select';
/* Styles */
import styles from './InputGroup.module.css';

const InputGroup = (props) => {
  const { label = '', placeholder = 'This is a placeholder', required = false, size = 'large', theme = 'light', type = '', optionsList = [], validation = {}, error = {} } = props;
  
  console.log('error: ', error);
  
  const renderField = (type) => {
    switch (type) {
      case 'input':
        return (<Input parentClass={`${styles['input-group__field']} ${error.type ? `${styles['input-group__field--has-errors']}` : ''}`} placeholder={placeholder} validation={validation} />);
      case 'textarea':
        return (<Textarea parentClass={`${styles['input-group__field']} ${error.type ? `${styles['input-group__field--has-errors']}` : ''}`} placeholder={placeholder} validation={validation} />);
      case 'select':
        return (<Select parentClass={`${styles['input-group__field']} ${error.type ? `${styles['input-group__field--has-errors']}` : ''}`} placeholder={placeholder} optionsList={optionsList} validation={validation} />);
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
