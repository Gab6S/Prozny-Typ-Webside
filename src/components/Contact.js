import React, { useState, useEffect } from "react";
import "../scss/_contact.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import emailjs from "emailjs-com";
//import { init } from "emailjs-com";

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

export const Contact = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    const variables = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      message: data.message,
    };

    emailjs.send(
      "gmail",
      "template_nrmeo3w",
      variables,
      "user_MJAPbH1NopLFcJEg5KFfb"
    );
  };

  const onClick = () => {
    setButtonPopup(true);
  };

  return (
    <>
      {!buttonPopup && (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-row">
            <label className="label">
              Imię
              <input
                type="text"
                placeholder="Imię"
                className="input"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
            </label>
          </div>

          <div className="input-row">
            <label className="label">
              Nazwisko
              <input
                type="text"
                placeholder="Nazwisko"
                className="input"
                {...register("surname")}
              />
              <p>{errors.surname?.message}</p>
            </label>
          </div>

          <div className="input-row">
            <label className="label">
              E-mail
              <input
                type="email"
                placeholder="E-mail"
                className="input"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </label>
          </div>

          <div className="input-row">
            <label className="label">
              Wiadomość
              <input
                type="textarea"
                rows={3}
                className="input"
                {...register("message")}
              />
              <p>{errors.message?.message}</p>
            </label>
          </div>

          <div className="input-row">
            <label className="label">
              Zapisz się do newslettera
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
          <button className="button" onClick={onClick}>
            Wyślij
          </button>
        </form>
      )}
      {buttonPopup && <p className="popup">Twoja wiadomość została wysłana!</p>}
    </>
  );
};
