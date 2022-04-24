import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import ContactForm from '../ContactForm/ContactForm';

import styles from './Contact.module.css';

const Contact = ({ title, subtitle, subjectOptions, privacy }) => {
  return (
    <section id="contacts" className={`${styles['contact']}`}>
      <SectionHeading
        title={title}
        subtitle={subtitle}
      />
      <ContactForm subjectOptions={subjectOptions} privacy={privacy} />
    </section>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  subjectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  privacy: PropTypes.string.isRequired,
}

export default Contact
