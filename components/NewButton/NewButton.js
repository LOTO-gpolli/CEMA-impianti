import styles from "./NewButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function NewButton(props) {
  const { variant = "primary", type = "", children, icon, handleClick } = props;
  return (
    <>
      <button
        className={`${styles["button"]} ${styles[variant]}`}
        type={type}
        onClick={handleClick}
      >
        {children}
        <FontAwesomeIcon icon={icon} size="lg" className={`${styles["icon"]}`} />
      </button>
    </>
  );
}

export default NewButton;