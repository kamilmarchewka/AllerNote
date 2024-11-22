import Link from "next/link";
import React from "react";
import LinkUnderline from "@/components/buttons/LinkUnderline";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import InputBox from "@/components/login/InputBox";
import GoBackIcon from "@/components/login/GoBackIcon";

export default function Auth() {
  return (
    <>
      <section className=" flex items-center pt-32 pb-14 lg:min-h-[calc(100vh-40px)]">
        {/* Background svg */}

        {/* Login in form */}
        <section className="flex-grow mx-auto px-4 py-8 bg-eden-500 text-white rounded-3xl max-w-[27rem] shadow-md sm:p-11 md:ml-auto md:mr-0">
          <header className="mb-14 text-center">
            <h2 className="font-semibold text-4xl">Zaloguj się</h2>
          </header>

          <form className="flex flex-col gap-8">
            <InputBox
              type="email"
              id="email"
              label="email"
              placeholder="example@gmail.com"
            />
            <div className="flex flex-col gap-2">
              <InputBox
                type="password"
                id="password"
                label="hasło"
                placeholder="**********"
              />
              <LinkUnderline href="/" text="Nie pamiętam hasła" />
            </div>
            <div className="flex mt-14 flex-col gap-2 items-center">
              <ButtonPrimary text="Zaloguj się" />
              <p className="text-center">
                <span className="text-white/85">Nie masz konta?</span>{" "}
                <LinkUnderline href="/" text="Zarejestruj się" />
              </p>
            </div>
          </form>
        </section>

        {/* Registration form */}
        <section className="relative flex-grow mx-auto px-4 py-8 bg-eden-500 text-white rounded-3xl max-w-[27rem] shadow-md sm:p-11 md:ml-auto md:mr-0">
          <button className="block w-10 p-2 absolute left-3 top-3 transform hover:-translate-x-1 hover:-rotate-12 transition-transform">
            <GoBackIcon />
          </button>
          <header className="mb-14 text-center">
            <h2 className="font-semibold text-4xl">Rejestracja</h2>
          </header>

          <form className="flex flex-col gap-8">
            <InputBox
              type="email"
              id="email"
              label="email"
              placeholder="example@gmail.com"
            />
            <InputBox
              type="text"
              id="nicname"
              label="nazwa użytkownika"
              placeholder="Gustaw"
            />
            <InputBox
              type="password"
              id="password"
              label="haslo"
              placeholder="**********"
            />
            <InputBox
              type="password"
              id="repeatedPassword"
              label="powtórz hasło"
              placeholder="**********"
            />
            <div className="flex mt-14 flex-col gap-2 items-center">
              <ButtonPrimary text="Utwórz konto" />
            </div>
          </form>
        </section>
      </section>
    </>
  );
}
