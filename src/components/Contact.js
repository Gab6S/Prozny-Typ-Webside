import React from "react";
import "../scss/_contact.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { SMTPClient } from "emailjs-com";

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const schema = yup.object().shape({
  name: yup.string().min(4, "Imię jest za krótkie").required(),
  surname: yup.string().min(3, "Nazwisko jest za krótkie").required(),
  email: yup
    .string()
    .matches(emailRegExp, "Adres email powinien zawierać prawidłowy format")
    .required(),
  message: yup
    .string()
    .min(50, "Wiadomość powinna zawierać conajmniej 50 znaków")
    .required(),
});

export const Contact = ({ setForm }) => {
  const client = new SMTPClient({
    user: "user",
    password: "password",
    host: "smtp.proznytyp@gmail.com",
    ssl: true,
  });

  const sendAMessage = () => {
    client.send(
      {
        text: "i hope this works",
        from: "you <username@your-email.com>",
        to: "proznytyp@gmail.com",
        subject: "testing emailjs",
      },
      (err, message) => {
        console.log(err || message);
      }
    );
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { register, handleSubmit } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicText" className="input-row">
        <Form.Label className="label">Imię</Form.Label>
        <Form.Control
          type="text"
          placeholder="Imię"
          className="input"
          onChange={setForm}
          ref={register}
          value="AAA"
          name="name"
        />
      </Form.Group>

      <Form.Group controlId="formBasicText" className="input-row">
        <Form.Label className="label">Nazwisko</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nazwisko"
          className="input"
          onChange={setForm}
          ref={register}
          value="BBB"
          name="surname"
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlInput1" className="input-row">
        <Form.Label className="label">E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="E-mail"
          className="input"
          onChange={setForm}
          ref={register}
          value="CCC"
          name="email"
        />
      </Form.Group>

      <Form.Group
        controlId="exampleForm.ControlTextarea1"
        className="input-row"
      >
        <Form.Label className="label">Wiadomość</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          className="input"
          onChange={setForm}
          ref={register}
          value="DDD"
          name="message"
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox" className="input-row">
        <Form.Check
          type="checkbox"
          label="Zapisz się do newslettera"
          className="checkbox"
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="button"
        onClick={sendAMessage}
      >
        Wyślij
      </Button>
    </Form>
  );
};
