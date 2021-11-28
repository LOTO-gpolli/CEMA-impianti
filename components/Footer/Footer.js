import styles from './Footer.module.css';
/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className={`${styles['footer']}`}>
        <div className={`${styles['footer__row']}`}>
          <div className={`${styles['footer__other-info']}`}>
            <p>CEMA Impianti di Cera Gabriele, Marin Emilio e Figini Mario. Sede legale: Via Monte Generoso n.94 - 22070 Fenegrò (CO) | Sede operativa: Via dell'Artigianato n.98 - 22070 Fenegrò (CO). P.IVA 03089740132</p>            {/* <p>P.IVA 03089740132</p> */}
          </div>
          <div className={`${styles['footer__socials']}`}>
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className={`${styles['footer__social-icon']}`}
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className={`${styles['footer__social-icon']}`}
            />
          </div>
        </div>
        <div className={`${styles['footer__separator']}`}></div>
        <div className={`${styles['footer__row']}`}>
          <div className={`${styles['footer__copyright']}`}>
            <p className={`${styles['copyright__text']}`}>
              Copyright &copy;
              <span className={`${styles['copyright__year']}`}> {new Date().getFullYear()}</span>
              <span className={`${styles['copyright__author']}`}> Made by LOTO Design</span>
            </p>
          </div>
          <div className={`${styles['footer__policies']}`}>
            <a className={`${styles['footer__policy']}`}>Privacy Policy</a>
            <span>|</span>
            <a className={`${styles['footer__policy']}`}>Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
