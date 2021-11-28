import { useState } from 'react';
import Image from 'next/image'
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

import Image from 'next/image';

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
      target: 'team',
      text: 'Team',
    },
    // {
    //   target: 'works',
    //   text: 'I nostri lavori',
    // },
    {
      target: 'contacts',
      text: 'Contatti',
    },
  ];

  return (
    <>
      <header className={`${styles['header']}`}>
        <a href="#" className={`${styles['header__logo']}`}>
          <Image
            src="/images/logo_small.png"
            alt="logo"
            width={75}
            height={75}
          />
        </a>
        <nav className={`${styles['header__navigation']}`}>
          <ul className={`${styles['header__navigation-list']}`}>
            { navigationItems && navigationItems.map(item => (
              <li className={`${styles['header__navigation-item']}`}>
                <a href={`#${item.target}`}>{item.text}</a>
              </li>
            )) }
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
            parentClass: styles['header__button'],
          }}
        />
        <div className={`${styles['header__toggle-menu']}`}>
          <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
      <ul
        className={`${styles['mobile-menu']} ${isOpen ? `${styles['mobile-menu--is-open']}` : ''} `}
      >
        <li className={`${styles['mobile__navigation-item']}`}>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <a href="#servizi" onClick={() => setIsOpen(false)}>
              {' '}
              Servizi
            </a>
          </div>
        </li>

        <li className={`${styles['mobile__navigation-item']}`}>
          <div>
            <FontAwesomeIcon icon={faUserFriends} />
            <a href="#about" onClick={() => setIsOpen(false)}>
              {' '}
              Chi Siamo
            </a>
          </div>
        </li>

        <li className={`${styles['mobile__navigation-item']}`}>
          <div>
            <FontAwesomeIcon icon={faImages} />
            <a href="#gallery" onClick={() => setIsOpen(false)}>
              {' '}
              Gallery
            </a>
          </div>
        </li>

        <li className={`${styles['mobile__navigation-item']}`}>
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <a href="#contatti" onClick={() => setIsOpen(false)}>
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
