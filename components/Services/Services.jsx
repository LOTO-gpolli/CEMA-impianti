import SectionHeading from '../SectionHeading/SectionHeading'
import CardsList from '../CardsList/CardsList'

const Services = () => {
  return (
    <section className="services">
      <SectionHeading
        title="I nostri servizi"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tempor lorem sed congue."
      />
      <CardsList />
    </section>
  );
}

export default Services;