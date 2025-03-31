"use client";
import React from "react";

import Dandelion from "@/components/login/Dandelion";

import { useRef } from "react";
import Link from "next/link";
import Header from "@/components/404/Header";

export default function Custom404() {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-40px)]">
      <header className="relative z-[1] flex flex-col gap-10 items-center text-center">
        <h1 className="flex  text-eden-700 text-5xl leading-none font-bold ">
          Rejestracja powiodła się!
        </h1>
        <p className="block text-black max-w-lg">
          Sprawdź swoją skrzynkę pocztową! W wiadomości znajdziesz link
          aktywacyjny. Następnie{" "}
          <Link href="/login" className="text-eden-700 underline">
            zaloguj się.
          </Link>
        </p>
      </header>
    </section>
  );
}
