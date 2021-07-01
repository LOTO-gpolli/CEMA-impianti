import styles from "./ButtonLink.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function ButtonLink(props) {
  const { variant = "main", customClassText, children, icon, href } = props;
  return (
    <a href={href} className={`${styles["button"]} ${styles[variant]}`}>
      <span className={`${styles[customClassText]}`}>{children}</span>
      <FontAwesomeIcon icon={icon} size="lg" className={`${styles["icon"]}`} />
    </a>
  );
}

export default ButtonLink;
