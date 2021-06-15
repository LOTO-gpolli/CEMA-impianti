import { Zoom } from "react-reveal";
import Card from "../Card/Card";
import styles from "../CardsList/CardsList.module.css";

const CardsList = () => {
  return (
    <div id="servizi" className={`${styles["cards-list__container"]}`}>
      <h2 className={`${styles["CardsList__title"]}`}>I NOSTRI SERVIZI</h2>
      <div className={`${styles["cards__container"]}`}>
        <Card
          settings={{
            src: "/images/power-plant.png",
            alt: "impianti civili e industriali",
            title: "Impianti civili e industriali",
            text: "Dalla semplice manutenzione alla realizzazione di impianti completamente nuovi tradizionali o domotici."
          }}
        />
        <Card
          settings={{
            src: "/images/alarm.png",
            alt: "Installazione allarmi e videosorveglianza",
            title: "Installazione allarmi e videosorveglianza",
            text: ` Impianti d’allarme certificabili IMQ (progettazione e installazione) Impianti di videosorveglianza con registrazione e riproduzione live in remoto su telefono.`
          }}
        />
        <Card
          settings={{
            src: "/images/video-door-phone.png",
            alt: "videosorveglianza",
            title: "Videocitofonia",
            text: " Installazione da nuovo – sostituzione – manutenzione impianti audio/video o solo audio."
          }}
        />
        <Card
          settings={{
            src: "/images/automation.png",
            alt: "automazione",
            title: "Automazione",
            text: `Servizi per automazione di cancelli / serrande / tapparelle / porte.`
          }}
        />
      </div>
    </div>
  );
};

export default CardsList;
