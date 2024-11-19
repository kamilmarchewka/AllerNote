"use client";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import LoginButton from "./LoginButton";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <nav className="body-spacing flex justify-between items-center fixed top-0 left-0 w-full">
      <Link href="/">Logo</Link>

      <Hamburger
        onClickHandler={() => setNavIsOpen((prev) => !prev)}
        isClicked={navIsOpen}
      />

      {/* main navigation */}
      <ul className="flex flex-col items-start absolute p-2 bg-white top-[calc(100%+1rem)] right-4 shadow-md rounded-md">
        <li className="block">
          <Link href="/" className="block w-full p-2 text-left">
            Dashboard
          </Link>
        </li>
        <li className="block">
          <Link href="/kalendarz" className="block w-full p-2 text-left">
            Kalendarz
          </Link>
        </li>
        <li className="flex flex-col-reverse">
          {/* button with user name */}
          <div className="flex justify-center border-t pt-4 mt-2">
            <LoginButton isLoggedIn={true} username="Maksumilian Łuczak" />
          </div>
          {/* submenu */}
          <ul className="">
            <li className="block border-t pt-2 mt-2">
              <Link href="/ustawienia" className="block w-full p-2 text-left">
                Ustawienia
              </Link>
            </li>
            <li className="block">
              <button className="block w-full p-2 text-left">Wyloguj</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
