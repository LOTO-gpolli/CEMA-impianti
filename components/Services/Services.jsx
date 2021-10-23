import SectionHeading from '../SectionHeading/SectionHeading';
import CardsList from '../CardsList/CardsList';
import Banner from '../Banner/Banner';
// Styles
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={`${styles['services']}`}>
      <SectionHeading
        title="I nostri servizi"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tempor lorem sed congue."
      />
      <CardsList />
      <Banner />
    </section>
  );
}

export default Services;