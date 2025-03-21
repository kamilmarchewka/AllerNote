"use client";
import React, { useEffect } from "react";

import InputBox from "./InputBox";
import { useRouter } from "next/navigation";

import { login, signup } from "@/app/login/actions";

export default function Form({ password, email }) {
  const router = useRouter();
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  // console.error(registration);

  useEffect(() => {
    console.table({
      inputEmail,
      inputPassword,
    });
  }, [inputEmail, inputPassword]);

  async function submitHandler(e) {
    e.preventDefault();

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

      <div className="flex mt-8 flex-col gap-2 items-center">
        <button
          formAction={login}
          className={`block px-[2.1rem] py-[.7rem]  rounded-[1.13rem] transform hover:scale-105 transition-transform text-eden-500 bg-white`}
        >
          Log in
        </button>
        <button
          formAction={signup}
          className="text-white opacity-85 underline hover:opacity-100 transition-opacity"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
