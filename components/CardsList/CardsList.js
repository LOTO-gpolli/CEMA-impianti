import { Zoom } from "react-reveal";
import Card from "../Card/Card";
import styles from "../CardsList/CardsList.module.css";
import {
  faBell,
  faIndustry,
  faLaptopHouse,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

const CardsList = () => {
  return (
    <div id="servizi" className={`${styles["cards-list__container"]}`}>
      <h2 className={`${styles["cards-list__title"]}`}>I NOSTRI SERVIZI</h2>
      <div className={`${styles["cards__container"]}`}>
        <Card
          settings={{
            icon: faIndustry,
            title: "Impianti civili e industriali",
            text:
              "Dalla semplice manutenzione alla realizzazione di impianti completamente nuovi tradizionali o domotici."
          }}
        />
        <Card
          settings={{
            icon: faBell,
            title: "Installazione allarmi e videosorveglianza",
            text: ` Impianti d’allarme certificabili IMQ. Impianti di videosorveglianza con registrazione e riproduzione live in remoto su telefono.`
          }}
        />
        <Card
          settings={{
            icon: faVideo,
            title: "Videocitofonia",
            text:
              " Installazione da nuovo – sostituzione – manutenzione impianti audio/video o solo audio."
          }}
        />
        <Card
          settings={{
            icon: faLaptopHouse,
            title: "Automazione",
            text: `Servizi per automazione di cancelli / serrande / tapparelle / porte.`
          }}
        />
      </div>
    </div>
  );
};

export default CardsList;
