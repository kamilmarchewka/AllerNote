"use client";

import React from "react";
import VoivodeshipSelect2 from "@/components/alergeny/VoivodeshipSelect2";

export default function Home() {
  return (
    <section className="flex flex-col gap-5 pt-24 pb-10 lg:min-h-[calc(100vh-40px)]">
      <header className="grid gap-3 py-5 px-4 grid-cols-2 lg:grid-cols-[1fr_.7fr] border-b border-gray-200 text-4xl font-bold">
        Ustawienia
      </header>

      <div className="py-5 px-4">
        <label className="text-gray-800 text-2xl font-bold block mb-2">
          Nazwa użytkownika
        </label>
        <div className="relative flex items-center">
          <input
            name="username"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="galsonhm"
          />
          <div className="px-10"></div>
        </div>
      </div>

      <div className="py-5 px-4">
        <label className="text-gray-800 text-2xl font-bold block mb-2">
          Email
        </label>
        <div className="relative flex items-center">
          <input
            name="email"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="galson@gmail.com"
          />
          <div className="px-10"></div>
        </div>
      </div>

      <div className="py-5 px-4">
        <label className="text-gray-800 text-2xl font-bold block mb-2">
          Hasło
        </label>
        <div className="relative flex items-center">
          <input
            name="password"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="Wprowadź stare hasło"
          />
          <div className="px-10"></div>
        </div>
        <div className="relative flex items-center mt-4">
          <input
            name="new-password"
            type="text"
            className="w-full text-gray-800 text-base pl-2 pr-8 py-3 outline-none bg-transparent border-b-2 border-black focus:ring-0 focus:border-black"
            placeholder="Wprowadź nowe hasło"
          />
          <div className="px-10"></div>
        </div>
      </div>

      <div className="py-5 px-4">
        <label className="text-gray-800 text-2xl font-bold block mb-2">
          Województwo
        </label>
        <div className="flex items-center gap-2 md:gap-4">
          <VoivodeshipSelect2 />
        </div>
      </div>
    </section>
  );
}
