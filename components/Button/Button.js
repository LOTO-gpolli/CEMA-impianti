import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* Styles */
import styles from './Button.module.css';

const Button = ({
  text,
  link = false,
  settings = {
    handleClick: function () {},
    href: '',
    icon: {
      name: '',
      position: '',
    },
    type: 'button',
    parentClass: '',
  },
}) => {
  const { handleClick, href, icon, type, parentClass } = settings;

  const renderContent = (text, icon = {}) => {
    const { name: iconName, position: iconPosition = 'left' } = icon;

    if (iconName) {
      const faIcon = (
        <FontAwesomeIcon
          className={`${styles['button__icon']} ${styles[`button__icon--${iconPosition}`]}`}
          icon={iconName}
        />
      );
      const content = (
        <span className={`${styles['button__text']}`}>{text}</span>
      );

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
  };

  if (link) {
    return (
      <div className={parentClass}>
        <a className={`${styles['button']}`} href={href}>
          {renderContent(text, icon)}
        </a>
      </div>
    );
  }

  return (
    <div className={parentClass}>
      <button className={`${styles['button']}`} type={type} onClick={handleClick}>
        {renderContent(text, icon)}
      </button>
    </div>
  );
};

export default Button;
