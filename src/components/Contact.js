import React from "react";
import "../scss/_contact.scss";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Contact = () => {
  return (
    <Form className="form-container">
      <Form.Group controlId="formBasicText" className="input-row">
        <Form.Label className="label">Imię</Form.Label>
        <Form.Control type="text" placeholder="Imię" className="input" />
      </Form.Group>

      <Form.Group controlId="formBasicText" className="input-row">
        <Form.Label className="label">Nazwisko</Form.Label>
        <Form.Control type="text" placeholder="Nazwisko" className="input" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlInput1" className="input-row">
        <Form.Label className="label">E-mail</Form.Label>
        <Form.Control type="email" placeholder="E-mail" className="input" />
      </Form.Group>

      <Form.Group
        controlId="exampleForm.ControlTextarea1"
        className="input-row"
      >
        <Form.Label className="label">Wiadomość</Form.Label>
        <Form.Control as="textarea" rows={3} className="input" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox" className="input-row">
        <Form.Check
          type="checkbox"
          label="Zapisz się do newslettera"
          className="checkbox"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="button">
        Wyślij
      </Button>
    </Form>
  );
};
