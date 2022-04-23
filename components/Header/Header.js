import { useState } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
/* Components */
import Button from '../Button/Button';
import Burger from '../Burger/Burger';
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      target: 'services',
      text: 'Servizi',
    },
    {
      target: 'about',
      text: 'Chi siamo',
    },
    {
      target: 'projects',
      text: 'Progetti',
    },
    {
      target: 'contacts',
      text: 'Contatti',
    },
  ];

  return (
    <>
      <header className={`${styles['header']}`}>
        <div className={`${styles['header__container']}`}>
          <a href="#" className={`${styles['header__logo']}`}>
            <Image src="/images/logo.png" alt="logo" width={128} height={64} eager="true" />
          </a>
          <nav className={`${styles['header__navigation']}`}>
            <ul className={`${styles['header__navigation-list']}`}>
              {navigationItems &&
                navigationItems.map((item) => (
                  <li className={`${styles['header__navigation-item']}`} key={uuid()}>
                    <a href={`#${item.target}`}>{item.text}</a>
                  </li>
                ))}
            </ul>
          </nav>
          <Button
            text="3391122333"
            link="true"
            settings={{
              href: 'tel:3391122333',
              icon: {
                name: faPhone,
              },
              customClass: `${styles['header__button']}`,
              customClassText: `${styles['header__button-text']}`,
            }}
          />
          <div className={`${styles['header__toggle-menu']}`}>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </header>
      <ul
        className={`${styles['mobile-menu']} ${isOpen ? `${styles['mobile-menu--is-open']}` : ''} `}
      >
        {navigationItems &&
          navigationItems.map((item) => (
            <li className={`${styles['mobile__navigation-item']}`} key={uuid()}>
              <a href={`#${item.target}`} onClick={() => setIsOpen(false)}>
                {item.text}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Header;
