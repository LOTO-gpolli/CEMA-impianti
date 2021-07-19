import ContactForm from '../components/ContactForm/ContactForm';

const Alternative = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <ContactForm />
  );
}

export default Alternative;