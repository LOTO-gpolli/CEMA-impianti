import { useForm } from "react-hook-form";
/* Components */
import InputGroup from '../InputGroup/InputGroup';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import Checkbox from '../Checkbox/Checkbox';
import ButtonGP from '../ButtonGP/ButtonGP';
/* Styles */
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const { clearErrors, handleSubmit: validateOnSubmit, register, reset, watch, formState: { errors }, setValue } = useForm();
  
  function encodeFormData(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }
  
  function handleSubmit(data, event) {
    event.preventDefault();

    fetch(
      '/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData({ "form-name": "contact", ...data }),
      })
      .then(() => {
        console.log('Email sent');
        reset();
      })
      .catch(error => {
        console.warn('The email has not been sent. Error: ', error);
      }
    );
    
    // TODO: resettare qui tutti i select
    console.log('data: ', data);
  }

  // console.log(watch("nome"));
  // console.log(watch("cognome"));
  // console.log(watch("email"));
  // console.log(watch("oggetto"));
  // console.log(watch("messaggio"));
  console.log('all errors: ', errors, errors.oggetto?.ref);
  
  return (
    <form className={`${styles['contact-form']}`} name="contact" method="POST" action="/" onSubmit={validateOnSubmit(handleSubmit)} data-netlify="true">
      <InputGroup
        error={errors["nome"]}
        label="Nome"
        id="nome"
        placeholder="Inserisci il tuo nome"
        required={true}
        size="medium"
        type="input"
        validation={{...register("nome", { required: true, pattern: /^[A-Za-z]+$/i })}}
      />
      <InputGroup
        error={errors["cognome"]}
        label="Cognome"
        id="cognome"
        placeholder="Inserisci il tuo cognome"
        required={true}
        size="medium"
        type="input"
        validation={{...register("cognome", { required: true, pattern: /^[A-Za-z]+$/i })}}
      />
      <InputGroup
        error={errors["email"]}
        label="Email"
        id="email"
        placeholder="Inserisci il tuo indirizzo email"
        required={true}
        type="input"
        validation={{...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })}}
      />
      <InputGroup
        clearErrors={clearErrors}
        error={errors["oggetto"]}
        label="Oggetto"
        id="oggetto"
        optionsList={['opzione 1', 'opzione 2', 'opzione 3', 'opzione 4', 'opzione 5',]}
        placeholder="Seleziona l'oggetto della richiesta"
        required={true}
        type="select"
        validation={{...register("oggetto", { required: true })}}
        setValue={setValue}
      />
      <InputGroup
        error={errors["messaggio"]}
        label="Messaggio"
        id="messaggio"
        placeholder="Scrivi qui il tuo messaggio..."
        required={true}
        type="textarea"
        validation={{...register("messaggio", { required: true })}}
      />
      <CheckboxGroup>
        <Checkbox
          error={errors["privacy"]}
          label="Dichiaro di aver letto e di accettare il testo della Informativa sulla Privacy"
          name="privacy"
          value={true}
          validation={{...register("privacy", { required: true })}}
        />
      </CheckboxGroup>
      <ButtonGroup position='right'>
        <ButtonGP
          text='Submit'
          link={false}
          settings={
            {
              handleClick: function() {},
              href: '',
              icon: {
                name: '',
                position: 'right',
              },
              type: 'submit',
            }
          }
        />
      </ButtonGroup>
      {/* <input type="submit" value="Submit" /> */}
    </form>
  );
}

export default ContactForm;