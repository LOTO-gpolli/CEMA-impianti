import { useState } from 'react';
/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
/* Helpers */
import { capitalizeFirstLetter } from 'helpers/utils'; 
/* Styles */
import styles from './Select.module.css';

const Select = ({ children, ...props }) => {
  const { parentClass, placeholder, optionsList = [], required, validation } = props;
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isPlaceholder, setIsPlaceholder ] = useState(true);
  const [ selectedItem, setSelectedItem ] = useState(capitalizeFirstLetter(placeholder));

  function toggleVisibility() {
    setIsVisible(prevState => !prevState);
  }

  function selectItem(option) {
    if (isPlaceholder) setIsPlaceholder(false);
    setSelectedItem(option);
    toggleVisibility();
  }

  console.log(validation);
  
  return (
    <div className={`${styles['select']}`}>
      {/* <input className={`${styles['select__input']}`} value={!isPlaceholder ? selectedItem : ''}/> */}
      <button className={`${styles['select__button']} ${ parentClass ? `${parentClass}` : '' }`} type="button" onClick={() => toggleVisibility()} {...validation}>
        <span className={`${styles['select__text']} ${ isPlaceholder ? `${styles['select__text--is-placeholder']}` : '' }`}>{selectedItem} { required && isPlaceholder ? '*' : '' }</span>
        <FontAwesomeIcon icon={ isVisible ? faChevronUp : faChevronDown } />
      </button>
      { optionsList.length ? 
        <div className={`${styles['select__menu']} ${ isVisible ? `${styles['select__menu--is-visible']}` : ''}`}>
          <ul className={`${styles['select__list']}`}>
            {optionsList.map(option => <li className={`${styles['select__list-item']}`} onClick={() => selectItem(capitalizeFirstLetter(option))}>{capitalizeFirstLetter(option)}</li>)}
          </ul>
        </div> :
        null
      }
    </div>
  );
}

export default Select;
