import React from "react";

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
  return (
    <form className="flex flex-col gap-8">
      {nickname && registration && (
        <InputBox
          type="text"
          id="nicname"
          label="nazwa użytkownika"
          placeholder="Gustaw"
        />
      )}
      {email && (
        <InputBox
          type="email"
          id="email"
          label="email"
          placeholder="example@gmail.com"
        />
      )}
      {password && (
        <InputBox
          type="password"
          id="password"
          label="haslo"
          placeholder="**********"
        />
      )}
      {password && registration && (
        <InputBox
          type="password"
          id="repeatedPassword"
          label="powtórz hasło"
          placeholder="**********"
        />
      )}

      <div className="flex mt-14 flex-col gap-2 items-center">
        <ButtonPrimary text={btnText} />
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
