import styles from "../Services/Services.module.css";
import Image from "next/image";
import Zoom from "react-reveal/Zoom";

const Services = () => {
  return (
    <div className={styles.container}>
      <h2 id="servizi" className={`${styles["title"]}`}>
        I NOSTRI SERVIZI
      </h2>

      <div className={`${styles["services"]}`}>
        <Zoom delay={500}>
          <div className={`${styles["services__card"]}`}>
            <Image
              src="/power-plant.png"
              alt="impianti civili e industriali"
              width={50}
              height={50}
            />
            <h2>Impianti civili e industriali</h2>
            <p>
              Dalla semplice manutenzione alla realizzazione di impianti completamente
              nuovi tradizionali o domotici.
            </p>
          </div>
        </Zoom>

        <Zoom delay={500}>
          <div className={`${styles["services__card"]}`}>
            <Image
              src="/alarm.png"
              alt="Installazione allarmi e videosorveglianza"
              width={50}
              height={50}
            />
            <h2>Installazione allarmi e videosorveglianza</h2>
            <p>
              Impianti d’allarme certificabili IMQ (progettazione e installazione)
              Impianti di videosorveglianza con registrazione e riproduzione live in
              remoto su telefono.
            </p>
          </div>
        </Zoom>
        <Zoom delay={500}>
          <div className={`${styles["services__card"]}`}>
            <Image
              src="/video-door-phone.png"
              alt="videosorveglianza"
              width={50}
              height={50}
            />
            <h2>Videocitofonia</h2>
            <p>
              Installazione da nuovo – sostituzione – manutenzione impianti audio/video o
              solo audio.
            </p>
          </div>
        </Zoom>
        <Zoom delay={500}>
          <div className={`${styles["services__card"]}`}>
            <Image src="/automation.png" alt="automazione" width={50} height={50} />
            <h2>Automazione</h2>
            <p>Servizi per automazione di cancelli / serrande / tapparelle / porte.</p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Services;
