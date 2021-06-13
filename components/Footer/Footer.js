import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles['footer']}`}>
      <div className={`${styles['footer__company-info']}`}>
        <p className={styles['footer__company-name']}>CEMA Impianti</p>
        <p className={styles['footer__company-owners']}>di Cera Gabriele, Marin Emilio e Figini Mario</p>
        <p className={styles['footer__company-address']}>SEDE LEGALE: Via Monte Generoso n.94 - 22070 Fenegrò (CO)</p>
        <p className={styles['footer__company-address']}>SEDE OPERATIVA: Via dell'Artigianato n.98 - 22070 Fenegrò (CO)</p>
        <p className={styles['footer__company-fiscal-code']}>P.IVA 03089740132</p>
      </div>
      <div className={`${styles['footer__copyright']} ${styles['copyright']}`}>
        <p className={`${styles['copyright__text']}`}>
          &copy;
          <span className={`${styles['copyright__year']}`}>{new Date().getFullYear()}</span>
          <span className={`${styles['copyright__author']}`}>by LOTO Design</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
