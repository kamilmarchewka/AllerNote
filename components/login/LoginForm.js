"use client";
import React, { useEffect, useState } from "react";

import InputBox from "./InputBox";

import { login, signup } from "@/app/login/actions";
import LoadingScreen from "@/components/LoadingScreen";
import { useTransition } from "react";

export default function LoginForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <LoadingScreen isLoading={isPending} />

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
            formAction={(formAction) =>
              startTransition(() => signup(formAction))
            }
            className="text-white opacity-85 underline hover:opacity-100 transition-opacity"
          >
            Sign up
          </button>
          <button
            formAction={(formAction) =>
              startTransition(() => login(formAction))
            }
            className={`block px-[2.1rem] py-[.7rem]  rounded-[1.13rem] transform hover:scale-105 transition-transform text-eden-500 bg-white`}
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
}
