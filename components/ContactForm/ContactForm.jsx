import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
/* Components */
import InputGroup from '../InputGroup/InputGroup';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
/* Styles */
import styles from './ContactForm.module.css';

const ContactForm = ({ setModalText, subjectOptions, privacy }) => {
  const subjects = useMemo(() => {
    return subjectOptions.map((option) => ({
      id: uuid(),
      option,
    }));
  }, [subjectOptions]);

  const {
    clearErrors,
    handleSubmit: validateOnSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  function encodeFormData(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  function handleSubmit(data, event) {
    event.preventDefault();

    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encodeFormData({ 'form-name': 'contact', ...data }),
    })
      .then((res) => {
        if (res.status === 200) {
          setModalText(`La tua richiesta è stata inviata con successo`);
          reset();
        } else {
          setModalText(`Si è verificato un errore. Ti preghiamo di riprovare più tardi`);
        }
      })
      .catch((error) => {
        setModalText(`Si è verificato un errore. Ti preghiamo di riprovare più tardi`);
        console.warn('The email has not been sent. Error: ', error);
      });

    // TODO: resettare qui tutti i select
  }

  return (
    <form
      className={`${styles['contact-form']}`}
      name="contact"
      method="POST"
      onSubmit={validateOnSubmit(handleSubmit)}
      data-netlify="true"
    >
      <div>
        <InputGroup
          error={errors['nome']}
          label="Nome"
          id="nome"
          placeholder="Inserisci il tuo nome"
          required={true}
          size="medium"
          type="input"
          validation={{
            ...register('nome', {
              required: { value: true, message: 'Il nome è obbligatorio' },
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/i,
                message: 'Il nome deve contenere solo lettere',
              },
            }),
          }}
        />
        <InputGroup
          error={errors['cognome']}
          label="Cognome"
          id="cognome"
          placeholder="Inserisci il tuo cognome"
          required={true}
          size="medium"
          type="input"
          validation={{
            ...register('cognome', {
              required: { value: true, message: 'Il cognome è obbligatorio' },
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/i,
                message: 'Il cognome deve contenere solo lettere',
              },
            }),
          }}
        />
      </div>
      <InputGroup
        error={errors['email']}
        label="Email"
        id="email"
        placeholder="Inserisci il tuo indirizzo email"
        required={true}
        type="input"
        validation={{
          ...register('email', {
            required: { value: true, message: `L'indirizzo email è obbligatorio` },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
              message: `Il formato dell'indirizzo email non è corretto`,
            },
          }),
        }}
      />
      <InputGroup
        clearErrors={clearErrors}
        error={errors['oggetto']}
        label="Oggetto"
        id="oggetto"
        optionsList={subjects}
        placeholder="Seleziona l'oggetto della richiesta"
        required={true}
        type="select"
        validation={{
          ...register('oggetto', {
            required: { value: true, message: `L'oggetto della richiesta è obbligatorio` },
          }),
        }}
        setValue={setValue}
      />
      <InputGroup
        error={errors['messaggio']}
        label="Messaggio"
        id="messaggio"
        placeholder="Scrivi qui il tuo messaggio..."
        required={true}
        type="textarea"
        validation={{
          ...register('messaggio', {
            required: { value: true, message: 'Il messaggio è obbligatorio' },
          }),
        }}
      />
      <CheckboxGroup>
        <Checkbox
          error={errors['privacy']}
          label={privacy}
          name="privacy"
          value={true}
          validation={{
            ...register('privacy', {
              required: {
                value: true,
                message: `Accettare l'Informativa sulla Privacy è necessario per proseguire`,
              },
            }),
          }}
        />
      </CheckboxGroup>
      <ButtonGroup position="right">
        <Button
          text="Invia"
          link={false}
          settings={{
            handleClick: function () {},
            href: '',
            icon: {
              name: '',
              position: 'right',
            },
            type: 'submit',
          }}
        />
      </ButtonGroup>
    </form>
  );
};

ContactForm.propTypes = {
  setModalText: PropTypes.func.isRequired,
  privacy: PropTypes.string.isRequired,
  subjectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContactForm;
