import styles from "./Footer.module.css";
/* FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className={`${styles["footer"]}`}>
        <div className={`${styles["footer__company-info"]}`}>
          <p className={styles["footer__company-name"]}>CEMA Impianti</p>
          <p className={styles["footer__company-owners"]}>
            di Cera Gabriele, Marin Emilio e Figini Mario
          </p>
          <p className={styles["footer__company-address"]}>
            SEDE LEGALE: Via Monte Generoso n.94 - 22070 Fenegrò (CO)
          </p>
          <p className={styles["footer__company-address"]}>
            SEDE OPERATIVA: Via dell'Artigianato n.98 - 22070 Fenegrò (CO)
          </p>
          <p className={styles["footer__company-fiscal-code"]}>P.IVA 03089740132</p>
        </div>

        <div className={`${styles["footer__company-social"]}`}>
          <p>
            Contattaci sui social{" "}
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              className={`${styles["footer__social-icon"]}`}
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="lg"
              className={`${styles["footer__social-icon"]}`}
            />
          </p>
        </div>
        <div className={`${styles["footer__privacy-cookie"]}`}>
          <a>Privacy Policy</a>
          <a> | Cookie Policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
