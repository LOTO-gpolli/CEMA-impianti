import styles from "./ButtonCall.module.css";
// /*Fontawesome*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the FontAwesomeIcon component
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import Link from "next/link";

function ButtonCall(props) {
  const { children } = props;

  return (
    <a href="tel:+393491921131" className={`${styles["button"]}`} type="button">
      {" "}
      <FontAwesomeIcon icon={faPhone} size="lg" /> <span>{children}</span>
    </a>
  );
}

export default ButtonCall;
