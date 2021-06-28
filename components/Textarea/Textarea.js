import styles from './Textarea.module.css';

const Textarea = ({ children, ...props}) => {
  const { 
    parentClass = '',
    placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  } = props;
  
  return (
    <textarea className={`${styles['textarea']} ${parentClass ? parentClass : ''} `} placeholder={placeholder}>
      {children}
    </textarea>
  );
}

export default Textarea;
