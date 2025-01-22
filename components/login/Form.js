"use client";
import React, { useEffect } from "react";

import InputBox from "./InputBox";
import ButtonPrimary from "../buttons/ButtonPrimary";
import LinkUnderline from "../buttons/LinkUnderline";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { firestore } from "@/lib/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Form({
  password,
  nickname,
  email,
  voivodship,
  btnText,
  registration = false,
}) {
  const router = useRouter();
  const [inputName, setInputName] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [inputRepeatedPassword, setInputRepeatedPassword] = React.useState("");

  // console.error(registration);

  useEffect(() => {
    console.table({
      inputName,
      inputEmail,
      inputPassword,
      inputRepeatedPassword,
    });
  }, [inputName, inputEmail, inputPassword, inputRepeatedPassword]);

  async function submitHandler(e) {
    e.preventDefault();

    if (
      registration &&
      (!inputName || !inputEmail || !inputPassword || !inputRepeatedPassword)
    ) {
      console.log("Fill all fields");
      return;
    } else if (!registration && (!inputEmail || !inputPassword)) {
      console.log("Fill all fields");
      return;
    }

    if (registration && inputPassword != inputRepeatedPassword) {
      console.log("Passwords don't match");
      return;
    }
    console.log("submit");
    // senda data to server
    try {
      if (registration) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          inputEmail,
          inputPassword
        );
        const user = userCredential.user;

        // Save user data in Firestore
        await setDoc(doc(firestore, "users", user.uid), {
          email: user.email,
          name: inputName, // Add other fields as needed
          createdAt: new Date(),
        });

        alert("User registered and data stored in Firestore!");

        console.log("Registration successful!");
        router.push("/login");
      } else {
        await signInWithEmailAndPassword(auth, inputEmail, inputPassword);
        console.log("Login successful!");
        router.push("/kalendarz");
      }
    } catch (err) {
      console.log(err.message);
    }

    clearInputs();
  }
  function clearInputs() {
    setInputName("");
    setInputEmail("");
    setInputPassword("");
    setInputRepeatedPassword("");
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
