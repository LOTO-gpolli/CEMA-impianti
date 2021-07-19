import { useForm } from "react-hook-form";
/* Components */
import InputGroup from '../InputGroup/InputGroup';
/* Styles */
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const { handleSubmit: validateOnSubmit, register, watch, formState: { errors } } = useForm();
  
  function handleSubmit(data) {
    console.log('data: ', data);
  }

  // console.log(watch("nome"));
  // console.log(watch("cognome"));
  // console.log(watch("email"));
  // console.log(watch("oggetto"));
  // console.log(watch("messaggio"));
  console.log(errors);
  
  return (
    <form className={`${styles['contact-form']}`} onSubmit={validateOnSubmit(handleSubmit)}>
      <InputGroup label="Nome" required={true} type="input" placeholder="Inserisci il tuo nome" size="medium" validation={{...register("nome", { required: true, pattern: /^[A-Za-z]+$/i })}} error={errors["nome"]}/>
      <InputGroup label="Cognome" required={true} type="input" placeholder="Inserisci il tuo cognome" size="medium" validation={{...register("cognome", { required: true, pattern: /^[A-Za-z]+$/i })}} error={errors["cognome"]} />
      <InputGroup label="Email" required={true} type="input" placeholder="Inserisci il tuo indirizzo email" validation={{...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })}} error={errors["email"]} />
      <InputGroup label="Oggetto" required={true} type="select" placeholder="Seleziona l'oggetto della richiesta" optionsList={['opzione 1', 'opzione 2', 'opzione 3', 'opzione 4', 'opzione 5',]} validation={{...register("oggetto", { required: true })}} error={errors["oggetto"]} />
      <InputGroup label="Messaggio" required={true} type="textarea" placeholder="Scrivi qui il tuo messaggio..." validation={{...register("messaggio", { required: true })}} error={errors["messaggio"]} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;