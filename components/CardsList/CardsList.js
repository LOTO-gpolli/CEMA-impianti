import Card from '../Card/Card';
import styles from '../CardsList/CardsList.module.css';
import { faBell, faIndustry, faLaptopHouse, faVideo } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../SectionHeading/SectionHeading';
import Box from '../Box/Box';

const CardsList = () => {
  const cards = [
    {
      icon: faIndustry,
      title: 'Impianti civili e industriali',
      text: 'Dalla semplice manutenzione alla realizzazione di impianti completamente nuovi tradizionali o domotici.',
    },
    {
      icon: faBell,
      title: 'Installazione Allarmi',
      text: `Impianti d'allarme certificabili IMQ. Impianti di videosorveglianza con registrazione e riproduzione live in remoto su telefono.`,
    },
    {
      icon: faVideo,
      title: 'Videocitofonia',
      text: 'Installazione da nuovo – sostituzione – manutenzione impianti audio/video o solo audio.',
    },
    {
      icon: faLaptopHouse,
      title: 'Automazione',
      text: `Servizi per automazione di cancelli / serrande / tapparelle / porte.`,
    },
  ];

  return (
      <div className={`${styles['cards-list']}`}>
        {/* <Zoom> */}
        {cards && cards.map(card => (<Card settings={card} />))}
        {/* </Zoom> */}
      </div>
  );
};

export default CardsList;
