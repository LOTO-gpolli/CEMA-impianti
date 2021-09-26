import { useState } from 'react';
/* Components */
import { Button } from '../Button/Button';
/* Styles */
import styles from './Header.module.css';
/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import {
  faBriefcase,
  faEnvelopeOpenText,
  faImages,
  faPhone,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

import Hamburger from 'hamburger-react';
// import { FaPhone, FaPortrait } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className={`${styles['header']}`}>
        <a href="#">
          <h1 className={`${styles['header__title']}`}>CE.MA IMPIANTI</h1>
        </a>
        <nav className={`${styles['header__navigation']}`}>
          <ul className={`${styles['header__navigation-list']}`}>
            <li className={`${styles['header__navigation-item']}`}>
              <a href="#servizi">servizi</a>
            </li>
            <li className={`${styles['header__navigation-item']}`}>
              <a href="#about">chi siamo</a>
            </li>
            <li className={`${styles['header__navigation-item']}`}>
              <a href="#gallery">gallery</a>
            </li>
            <li className={`${styles['header__navigation-item']}`}>
              <a href="#contatti">contatti</a>
            </li>
          </ul>
        </nav>

        <Button
          settings={{
            text: '399 1112233',
            type: 'button',
            customClass: `${styles['header__button']}`,
            customClassText: `${styles['header__button-text']}`,
            icon: faPhone,
          }}
        />
        <div className={`${styles['header__toggle-menu']}`}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="red" />
        </div>
      </header>
      <ul
        className={`${styles['mobile-menu']} ${isOpen ? `${styles['mobile-menu--is-open']}` : ''} `}
      >
        <li className={`${styles['mobile__navigation-item']}`}>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <a href="#servizi" onClick={() => setOpen(false)}>
              {' '}
              Servizi
            </a>
          </div>
        </li>

        <li className={`${styles['mobile__navigation-item']}`}>
          <div>
            <FontAwesomeIcon icon={faUserFriends} />
            <a href="#about" onClick={() => setOpen(false)}>
              {' '}
              Chi Siamo
            </a>
          </div>
        </li>

        <li className={`${styles['mobile__navigation-item']}`}>
          <div>
            <FontAwesomeIcon icon={faImages} />
            <a href="#gallery" onClick={() => setOpen(false)}>
              {' '}
              Gallery
            </a>
          </div>
        </li>

        <li className={`${styles['mobile__navigation-item']}`}>
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <a href="#contatti" onClick={() => setOpen(false)}>
              {' '}
              Contatti
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Header;
