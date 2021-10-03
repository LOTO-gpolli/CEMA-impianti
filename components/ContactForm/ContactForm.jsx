import { useForm } from "react-hook-form";
/* Components */
import InputGroup from '../InputGroup/InputGroup';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
/* Styles */
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const { clearErrors, handleSubmit: validateOnSubmit, register, reset, formState: { errors }, setValue } = useForm();
  
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
        validation={{...register("nome", { required: { value: true, message: 'Il nome è obbligatorio' }, pattern: { value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/i, message: 'Il nome deve contenere solo lettere' } })}}
      />
      <InputGroup
        error={errors["cognome"]}
        label="Cognome"
        id="cognome"
        placeholder="Inserisci il tuo cognome"
        required={true}
        size="medium"
        type="input"
        validation={{...register("cognome", { required: { value: true, message: 'Il cognome è obbligatorio' }, pattern: { value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/i, message: 'Il cognome deve contenere solo lettere' } })}}
      />
      <InputGroup
        error={errors["email"]}
        label="Email"
        id="email"
        placeholder="Inserisci il tuo indirizzo email"
        required={true}
        type="input"
        validation={{...register("email", { required: { value: true, message: `L'indirizzo email è obbligatorio` }, pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i, message: `Il formato dell'indirizzo email non è corretto` }}) }}
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
        validation={{...register("oggetto", { required: { value: true, message: `L'oggetto della richiesta è obbligatorio` } })}}
        setValue={setValue}
      />
      <InputGroup
        error={errors["messaggio"]}
        label="Messaggio"
        id="messaggio"
        placeholder="Scrivi qui il tuo messaggio..."
        required={true}
        type="textarea"
        validation={{...register("messaggio", { required: { value: true, message: 'Il messaggio è obbligatorio' } })}}
      />
      <CheckboxGroup>
        <Checkbox
          error={errors["privacy"]}
          label="Dichiaro di aver letto e di accettare il testo della Informativa sulla Privacy *"
          name="privacy"
          value={true}
          validation={{...register("privacy", { required: { value: true, message: `Accettare l'Informativa sulla Privacy è necessario per proseguire` } })}}
        />
      </CheckboxGroup>
      <ButtonGroup position='right'>
        <Button
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
    </form>
  );
}

export default ContactForm;