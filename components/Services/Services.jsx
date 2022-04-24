import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import CardsList from '../CardsList/CardsList';
import Banner from '../Banner/Banner';
// Styles
import styles from './Services.module.css';

const Services = ({ title, subtitle, services, imqCertification }) => {
  return (
    <section id="services" className={`${styles['services']}`}>
      <SectionHeading
        title={title}
        subtitle={subtitle ?? ''}
      />
      <CardsList content={services} />
      <Banner title={imqCertification.title} description={imqCertification.description} />
    </section>
  );
}

Services.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.shape({ url: PropTypes.string }).isRequired,
  })).isRequired,
  imqCertification: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}

export default Services;