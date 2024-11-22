import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import LinkUnderline from "@/components/buttons/LinkUnderline";
import InputBox from "@/components/login/InputBox";
import Link from "next/link";
import React from "react";

export default function Auth() {
  return (
    <>
      <section className=" flex items-center pt-32 pb-14 lg:pt-0 lg:pb-0 lg:min-h-[calc(100vh-40px)]">
        {/* Background svg */}

        {/* Login in form */}
        <section className="flex-grow mx-auto px-4 py-8 bg-eden-500 text-white rounded-3xl max-w-[27rem] shadow-md sm:p-11 md:ml-auto md:mr-0">
          <header className="mb-14 text-center">
            <h2 className="font-semibold text-4xl">Zaloguj się</h2>
          </header>

          <form className="flex flex-col gap-8 mb-16">
            <InputBox />
            <div className="flex flex-col gap-2">
              <InputBox />
              <LinkUnderline href="/" text="Nie pamiętam hasła" />
            </div>
          </form>

          <div className="flex flex-col gap-2 items-center">
            <ButtonPrimary text="Zaloguj się" />
            <p className="text-center">
              <span className="text-white/85">Nie masz konta?</span>{" "}
              <LinkUnderline href="/" text="Zarejestruj się" />
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
