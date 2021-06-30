import styles from "./ButtonLink.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function ButtonLink(props) {
  const { variant = "main", children, icon, href } = props;
  return (
    <button className={`${styles["button"]} ${styles[variant]}`}>
      <a href={href}>
        {children}
        <FontAwesomeIcon icon={icon} size="lg" className={`${styles["icon"]}`} />
      </a>
    </button>
  );
}

export default ButtonLink;
