"use client";
import React, { useEffect } from "react";

import InputBox from "./InputBox";
import ButtonPrimary from "../buttons/ButtonPrimary";
import LinkUnderline from "../buttons/LinkUnderline";

export default function Form({
  password,
  nickname,
  email,
  voivodship,
  btnText,
  registration = false,
}) {
  const [inputName, setInputName] = React.useState("Kamil");
  const [inputEmail, setInputEmail] = React.useState("kamil@gmail.com");
  const [inputPassword, setInputPassword] = React.useState("qwer1234");
  const [inputRepeatedPassword, setInputRepeatedPassword] =
    React.useState("qwer1234");

  useEffect(() => {
    console.table({
      inputName,
      inputEmail,
      inputPassword,
      inputRepeatedPassword,
    });
  }, [inputName, inputEmail, inputPassword, inputRepeatedPassword]);

  function submitHandler(e) {
    e.preventDefault();

    if (
      (registration && !inputName) ||
      !inputEmail ||
      !inputPassword ||
      !inputRepeatedPassword
    ) {
      console.log("Fill all fields");
      return;
    } else if ((!registration && !inputEmail) || !inputPassword) {
      console.log("Fill all fields");
      return;
    }

    if (
      registration &&
      !validatePasswords(inputPassword, inputRepeatedPassword)
    ) {
      console.log("Passwords don't match");
      return;
    }
    console.log("submit");
    // senda data to server
    console.log("Data sent to server");
    registration
      ? console.table({
          inputName,
          inputEmail,
          inputPassword,
          inputRepeatedPassword,
        })
      : console.table({
          inputEmail,
          inputPassword,
        });
  }
  function validatePasswords(p1, p2) {
    return p1 === p2;
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-8">
      {nickname && registration && (
        <InputBox
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type="text"
          id="nicname"
          label="nazwa użytkownika"
          placeholder="Gustaw"
        />
      )}
      {email && (
        <InputBox
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          type="email"
          id="email"
          label="email"
          placeholder="example@gmail.com"
        />
      )}
      {password && (
        <InputBox
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          type="password"
          id="password"
          label="haslo"
          placeholder="**********"
        />
      )}
      {password && registration && (
        <InputBox
          value={inputRepeatedPassword}
          onChange={(e) => setInputRepeatedPassword(e.target.value)}
          type="password"
          id="repeatedPassword"
          label="powtórz hasło"
          placeholder="**********"
        />
      )}

      <div className="flex mt-8 flex-col gap-2 items-center">
        <ButtonPrimary type="submit">{btnText}</ButtonPrimary>
        {!registration && (
          <p className="text-center">
            <span className="text-white/85">Nie masz konta?</span>{" "}
            <LinkUnderline href="/rejestracja" text="Zarejestruj się" />
          </p>
        )}
      </div>
    </form>
  );
}
