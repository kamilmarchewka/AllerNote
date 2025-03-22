"use client";
import React, { useEffect } from "react";

import InputBox from "./InputBox";

import { login, signup } from "@/app/login/actions";

export default function LoginForm() {
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  return (
    <form className="flex flex-col gap-8">
      <InputBox
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        type="email"
        id="email"
        label="email"
        placeholder="example@gmail.com"
      />
      <InputBox
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        type="password"
        id="password"
        label="haslo"
        placeholder="**********"
      />

      <div className="flex mt-8 gap-6 items-center justify-center">
        <button
          formAction={signup}
          className="text-white opacity-85 underline hover:opacity-100 transition-opacity"
        >
          Sign up
        </button>
        <button
          formAction={login}
          className={`block px-[2.1rem] py-[.7rem]  rounded-[1.13rem] transform hover:scale-105 transition-transform text-eden-500 bg-white`}
        >
          Log in
        </button>
      </div>
    </form>
  );
}
