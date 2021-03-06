import styles from './Textarea.module.css';

const Textarea = ({ children, ...props}) => {
  const { 
    id,
    parentClass = '',
    placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    validation,
  } = props;
  
  return (
    <textarea id={id} className={`${styles['textarea']} ${parentClass ? parentClass : ''} `} placeholder={placeholder} {...validation}>
      {children}
    </textarea>
  );
}

export default Textarea;