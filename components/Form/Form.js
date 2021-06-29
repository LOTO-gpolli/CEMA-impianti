import { useState } from "react";
import styles from "../Form/Form.module.css";
import Pulse from "react-reveal/Pulse";

const Form = () => {
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [objActive, setObjActive] = useState(false);
  const [msgActive, setMsgActive] = useState(false);
  return (
    <div id="contatti" className={`${styles["form__container"]}`}>
      <h2>CONTATTACI</h2>
      <span></span>
      <form
        className={`${styles["form"]}`}
        name="contact"
        method="POST"
        action="/"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="subject" value="Messaggio da Netlify form" />
        <p>
          <label className={`${styles["form__label"]}`} htmlFor="yourname">
            Nome*:{" "}
          </label>{" "}
          <Pulse spy={nameActive} duration={500} delay={100}>
            <input
              className={`${styles["form__input"]}`}
              type="text"
              name="name"
              id="yourname"
              placeholder="Inserisci il tuo nome e cognome."
              required
              onClick={() => (nameActive ? setNameActive(false) : setNameActive(true))}
            />
          </Pulse>
        </p>
        <p>
          <label className={`${styles["form__label"]}`} htmlFor="youremail">
            Email*:{" "}
          </label>{" "}
          <Pulse spy={emailActive} duration={500}>
            <input
              className={`${styles["form__input"]}`}
              type="email"
              name="email"
              id="youremail"
              placeholder="Inserisci la tua email."
              required
              onClick={() => (emailActive ? setEmailActive(false) : setEmailActive(true))}
            />
          </Pulse>
        </p>
        <p>
          <label className={`${styles["form__label"]}`} htmlFor="yourobject">
            Oggetto*:{" "}
          </label>{" "}
          <Pulse spy={objActive} duration={500}>
            <input
              className={`${styles["form__input"]}`}
              type="text"
              name="subject"
              id="yoursubject"
              placeholder="Inserisci il motivo della richiesta."
              required
              onClick={() => (objActive ? setObjActive(false) : setObjActive(true))}
            />
          </Pulse>
        </p>
        <p>
          <label className={`${styles["form__label"]}`} htmlFor="yourmessage">
            Messaggio*:{" "}
          </label>{" "}
          <Pulse spy={msgActive} duration={500}>
            <textarea
              className={`${styles["form__textarea"]}`}
              name="message"
              id="yourmessage"
              placeholder="Scrivi qui il tuo messaggio."
              required
              onClick={() => (msgActive ? setMsgActive(false) : setMsgActive(true))}
            ></textarea>
          </Pulse>
        </p>
        <p>
          <div>
            <input type="checkbox" id="privacy" name="privacy" required />
            <label htmlFor="privacy">
              <span className={styles["privacy-acceptance"]}>
                Accetto la vostra Privacy Policy
              </span>
            </label>
          </div>
          <button className={`${styles["form__submit-button"]}`} type="submit">
            Invia
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
