import { useState } from 'react';
import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import ContactForm from '../ContactForm/ContactForm';
import Modal from '../Modal/Modal';

import styles from './Contact.module.css';

const Contact = ({ title, subtitle, subjectOptions, privacy }) => {
  const [modalText, setModalText] = useState('');

  const closeModal = () => setModalText('');

  return (
    <section id="contacts" className={`${styles['contact']}`}>
      <Modal open={modalText !== ''} onClose={closeModal} text={modalText} />
      <SectionHeading title={title} subtitle={subtitle} />
      <ContactForm setModalText={setModalText} subjectOptions={subjectOptions} privacy={privacy} />
    </section>
  );
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  subjectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  privacy: PropTypes.string.isRequired,
};

export default Contact;
