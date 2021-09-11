import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Styles */
import styles from './ButtonGP.module.css';

const ButtonGP = ({
  text,
  link = false,
  settings = {
    handleClick: function() {},
    href: '',
    icon: {
      name: '',
      position: '',
    },
    type: 'button',
  } 
}) => {
  const { handleClick, href, icon, type } = settings;

  const renderContent = (text, icon = {}) => {
    const { name: iconName, position: iconPosition = 'left' } = icon;
    
    if (iconName) {
      const faIcon = <FontAwesomeIcon className={`${styles['button-GP__icon']} ${styles[`button-GP__icon--${iconPosition}`]}`} icon={iconName} />;
      const content = <span className={`${styles['button-GP__text']}`}>{text}</span>;

      switch (iconPosition) {
        case 'right':
          return (
            <>
              {content}
              {faIcon}
            </>
          );
        default:
          return (
            <>
              {faIcon}
              {content}
            </>
          );
      }
    }

    return text;
  }

  if (link) {
    return <a className={`${styles['button-GP']}`} href={href}>{renderContent(text, icon)}</a>
  }

  return <button className={`${styles['button-GP']}`} type={type} onClick={handleClick}>{renderContent(text, icon)}</button>
}

export default ButtonGP;