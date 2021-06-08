import { useState } from "react";

import Image from "next/image";
/* Components */
import { Button } from "../Button/Button";
/* Styles */
import styles from "./Header.module.css";
/* FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faBriefcase,
  faEnvelopeOpenText,
  faImages,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";

import Hamburger from "hamburger-react";

// /* Styles */
// import styles from "./Header.module.css";
// import { printHello } from "../../helpers/utils";
// import Link from "next/link";
// /*Fontawesome*/
// import {
//   faPhone,
//   faBars,
//   faTimes,
//   faHome,
//   faBriefcase,
//   faUserFriends,
//   faEnvelopeOpenText
// } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

// import { useState } from "react";
// import { Bounce } from "react-reveal";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  //   printHello();

  //   const [menuOpen, setMenuOpen] = useState(false);
  //   const [menuIcon, setMenuIcon] = useState(faBars);

  //   function showMenu() {
  //     if (!menuOpen) {
  //       setMenuOpen(true);
  //       setMenuIcon(faTimes);
  //     } else {
  //       setMenuOpen(false);
  //       setMenuIcon(faBars);
  //     }
  //   }

  //   return (
  //     <>
  //       <div className={`${styles["info"]}`}>
  //         <h4 className={`${styles["info__tel"]}`}>
  //           <FontAwesomeIcon icon={faPhone} /> tel: 000 111 222 33
  //         </h4>
  //       </div>
  //       <header className={`${styles["header"]}`}>
  //         <div>
  //           <Link href="/">
  //             <h2>
  //               <a className={`${styles["header__logo"]}`}>CE.MA Impianti</a>
  //             </h2>
  //           </Link>
  //         </div>

  //         <ul className={`${styles["nav"]}`}>
  //           <li className={`${styles["nav__item"]}`}>
  //             <Link href="#">
  //               <a>Home</a>
  //             </Link>
  //           </li>
  //           <li className={`${styles["nav__item"]}`}>
  //             <Link href="#servizi">
  //               <a>Servizi</a>
  //             </Link>
  //           </li>
  //           <li className={`${styles["nav__item"]}`}>
  //             <Link href="#">
  //               <a>Chi Siamo</a>
  //             </Link>
  //           </li>
  //           <li className={`${styles["nav__item"]}`}>
  //             <Link href="#">
  //               <a>Contatti</a>
  //             </Link>
  //           </li>
  //         </ul>
  //         {/* call me button */}
  //         <Bounce>
  //           <div className={`${styles["btn-call"]}`}>
  //             <Link href="tel:0111122333">
  //               <div>
  //                 <FontAwesomeIcon icon={faPhone} size="lg" />
  //                 <a></a>
  //               </div>
  //             </Link>
  //           </div>
  //         </Bounce>

  //         <div onClick={showMenu} className={`${styles["toggle-menu"]}`}>
  //           <FontAwesomeIcon icon={menuIcon} size="lg" />
  //         </div>
  //       </header>
  //       {/*dropdown Menu*/}
  //       <div
  //         className={`${styles["dropdown-menu"]} ${
  //           menuOpen
  //             ? `${styles["dropdown-menu--is-open"]}`
  //             : `${styles["dropdown-menu--is-close"]}`
  //         } `}
  //       >
  //         <li className={`${styles["nav__item--mobile"]}`}>
  //           <Link href="#">
  //             <div onClick={showMenu}>
  //               <FontAwesomeIcon icon={faHome} />
  //               <a> Home</a>
  //             </div>
  //           </Link>
  //         </li>
  //         <li className={`${styles["nav__item--mobile"]}`}>
  //           <Link href="#servizi">
  //             <div onClick={showMenu}>
  //               <FontAwesomeIcon icon={faBriefcase} />
  //               <a> Servizi</a>
  //             </div>
  //           </Link>
  //         </li>
  //         <li className={`${styles["nav__item--mobile"]}`}>
  //           <Link href="#">
  //             <div>
  //               <FontAwesomeIcon icon={faUserFriends} />
  //               <a> Chi siamo</a>
  //             </div>
  //           </Link>
  //         </li>
  //         <li className={`${styles["nav__item--mobile"]}`}>
  //           <Link href="#">
  //             <div>
  //               <FontAwesomeIcon icon={faEnvelopeOpenText} />
  //               <a> Contatti</a>
  //             </div>
  //           </Link>
  //         </li>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <>
      <header className={`${styles["header"]}`}>
        <Image
          className={`${styles["header__logo"]}`}
          src="/images/logo-cema.png"
          width={50}
          height={50}
        />
        <nav className={`${styles["header__navigation"]}`}>
          <ul className={`${styles["header__navigation-list"]}`}>
            <li className={`${styles["header__navigation-item"]}`}>servizi</li>
            <li className={`${styles["header__navigation-item"]}`}>chi siamo</li>
            <li className={`${styles["header__navigation-item"]}`}>gallery</li>
            <li className={`${styles["header__navigation-item"]}`}>contatti</li>
          </ul>
        </nav>
        <Button
          settings={{
            text: "399 1112233",
            type: "button",
            customClass: `${styles["header__button"]}`,
            customClassText: `${styles["header__button-text"]}`
          }}
        />
        <div className={`${styles["header__toggle-menu"]}`}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="cadetblue" />
          {/* <FontAwesomeIcon icon={faBars} size="lg" /> */}
        </div>
      </header>
      <ul
        className={`${styles["mobile-menu"]} ${
          isOpen
            ? `${styles["mobile-menu--is-open"]}`
            : `${styles["mobile-menu--is-close"]}`
        } `}
      >
        <li className={`${styles["mobile__navigation-item"]}`}>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <a> Servizi</a>
          </div>
        </li>

        <li className={`${styles["mobile__navigation-item"]}`}>
          <div>
            <FontAwesomeIcon icon={faUserFriends} />
            <a> Chi Siamo</a>
          </div>
        </li>

        <li className={`${styles["mobile__navigation-item"]}`}>
          <div>
            <FontAwesomeIcon icon={faImages} />
            <a> Gallery</a>
          </div>
        </li>

        <li className={`${styles["mobile__navigation-item"]}`}>
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <a> Contatti</a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Header;
