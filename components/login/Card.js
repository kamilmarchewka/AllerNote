import React from "react";

export default function Card({ title, children, registration = false }) {
  return (
    <section className="relative flex-grow mx-auto px-4 py-8 bg-eden-500 text-white rounded-3xl max-w-[27rem] shadow-md sm:p-11 md:ml-auto md:mr-0">
      <header className="mb-14 text-center">
        <h2 className="font-semibold text-4xl">{title}</h2>
        <p className="mt-6 text-lg text-white/85 max-w-[19em] mx-auto">
          {registration
            ? "Wprowadź swoje dane, aby się zarejestrować."
            : "Wprowadź swoje dane, aby się zalogować."}
        </p>
      </header>

      {children}
    </section>
  );
}
