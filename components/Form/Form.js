import styles from "../Form/Form.module.css";

const Form = () => {
  return (
    <div className={`${styles["form__container"]}`}>
      <h2>CONTATTACI</h2>
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
          <br />
          <input
            className={`${styles["form__input"]}`}
            type="text"
            name="name"
            id="yourname"
            placeholder="Inserisci il tuo nome e cognome."
            required
          />
        </p>
        <p>
          <label className={`${styles["form__label"]}`} htmlFor="youremail">
            Email*:{" "}
          </label>{" "}
          <br />
          <input
            className={`${styles["form__input"]}`}
            type="email"
            name="email"
            id="youremail"
            placeholder="Inserisci la tua email."
            required
          />
        </p>
        <p>
          <label className={`${styles["form__label"]}`} htmlFor="yourobject">
            Oggetto*:{" "}
          </label>{" "}
          <br />
          <input
            className={`${styles["form__input"]}`}
            type="text"
            name="subject"
            id="yoursubject"
            placeholder="Inserisci il motivo della richiesta."
            required
          />
        </p>
        <p>
          <label className={`${styles["form__label"]}`} htmlFor="yourmessage">
            Messaggio*:{" "}
          </label>{" "}
          <br />
          <textarea
            className={`${styles["form__textarea"]}`}
            name="message"
            id="yourmessage"
            placeholder="Scrivi qui il tuo messaggio."
            required
          ></textarea>
        </p>
        <p>
          <div>
            <input type="checkbox" id="privacy" name="privacy" required />
            <label htmlFor="privacy"> Accetto la vostra Privacy Policy</label>
          </div>
          <br />
          <button className={`${styles["form__submit-button"]}`} type="submit">
            Invia
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
