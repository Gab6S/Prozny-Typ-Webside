import React from "react";
import { Form, Button } from "react-bootstrap";

export const Contact = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Imię</Form.Label>
        <Form.Control type="text" placeholder="Imię" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Twoja wiadomość" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
