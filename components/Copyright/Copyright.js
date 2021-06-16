import styles from "../Copyright/Copyright.module.css";

const Copyright = () => {
  return (
    <div className={`${styles["footer__copyright"]} ${styles["copyright"]}`}>
      <p className={`${styles["copyright__text"]}`}>
        &copy;
        <span className={`${styles["copyright__year"]}`}>{new Date().getFullYear()}</span>
        <span className={`${styles["copyright__author"]}`}>
          {" "}
          - Made with 💙 by LOTO Design
        </span>
      </p>
    </div>
  );
};

export default Copyright;
