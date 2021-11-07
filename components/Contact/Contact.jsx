import SectionHeading from '../SectionHeading/SectionHeading';
import ContactForm from '../ContactForm/ContactForm';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={`${styles['contact']}`}>
      <SectionHeading
        title="Contatti"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tempor lorem sed congue."  
      />
      <ContactForm />
    </section>
  );
}

export default Contact
