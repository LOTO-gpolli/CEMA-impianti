/* Styles */
import styles from "./Header.module.css";
import { printHello } from "../../helpers/utils";
import Link from "next/link";
/*Fontawesome*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faPhone,
  faBars,
  faTimes,
  faHome,
  faBriefcase,
  faUserFriends,
  faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import { useState } from "react";
import { Bounce } from "react-reveal";

const Header = () => {
  printHello();

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(faBars);

  function showMenu() {
    if (!menuOpen) {
      setMenuOpen(true);
      setMenuIcon(faTimes);
    } else {
      setMenuOpen(false);
      setMenuIcon(faBars);
    }
  }

  return (
    <>
      <div className={`${styles["info"]}`}>
        <h4 className={`${styles["info__tel"]}`}>
          <FontAwesomeIcon icon={faPhone} /> tel: 000 111 222 33
        </h4>
      </div>
      <header className={`${styles["header"]}`}>
        <div>
          <Link href="/">
            <h2>
              <a className={`${styles["header__logo"]}`}>CE.MA Impianti</a>
            </h2>
          </Link>
        </div>

        <ul className={`${styles["nav"]}`}>
          <li className={`${styles["nav__item"]}`}>
            <Link href="#">
              <a>Home</a>
            </Link>
          </li>
          <li className={`${styles["nav__item"]}`}>
            <Link href="#servizi">
              <a>Servizi</a>
            </Link>
          </li>
          <li className={`${styles["nav__item"]}`}>
            <Link href="#">
              <a>Chi Siamo</a>
            </Link>
          </li>
          <li className={`${styles["nav__item"]}`}>
            <Link href="#">
              <a>Contatti</a>
            </Link>
          </li>
        </ul>
        <Bounce>
          <div className={`${styles["btn-call"]}`}>
            <Link href="tel:0111122333">
              <div>
                <FontAwesomeIcon icon={faPhone} size="lg" />
                <a></a>
              </div>
            </Link>
          </div>
        </Bounce>

        <div onClick={showMenu} className={`${styles["toggle-menu"]}`}>
          <FontAwesomeIcon icon={menuIcon} size="lg" />
        </div>
      </header>
      <div
        className={`${styles["dropdown-menu"]} ${
          menuOpen
            ? `${styles["dropdown-menu--is-open"]}`
            : `${styles["dropdown-menu--is-close"]}`
        } `}
      >
        <li className={`${styles["nav__item--mobile"]}`}>
          <Link href="#">
            <div>
              <FontAwesomeIcon icon={faHome} />
              <a> Home</a>
            </div>
          </Link>
        </li>
        <li className={`${styles["nav__item--mobile"]}`}>
          <Link href="#servizi">
            <div>
              <FontAwesomeIcon icon={faBriefcase} />
              <a> Servizi</a>
            </div>
          </Link>
        </li>
        <li className={`${styles["nav__item--mobile"]}`}>
          <Link href="#">
            <div>
              <FontAwesomeIcon icon={faUserFriends} />
              <a> Chi siamo</a>
            </div>
          </Link>
        </li>
        <li className={`${styles["nav__item--mobile"]}`}>
          <Link href="#">
            <div>
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              <a> Contatti</a>
            </div>
          </Link>
        </li>
      </div>
    </>
  );
};

export default Header;
