"use client";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import LoginButton from "./LoginButton";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center">
      <Link href="/">Logo</Link>

      <LoginButton isLoggedIn={true} username="Maksymilian Łuczak" />

      <Hamburger
        onClickHandler={() => setNavIsOpen((prev) => !prev)}
        isClicked={navIsOpen}
      />

      {/* main navigation */}
      <ul className="fixed hidden">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/kalendarz">Kalendarz</Link>
        </li>
        <li>
          {/* button with user name */}
          <LoginButton isLoggedIn={false} />
          {/* submenu */}
          <ul>
            <li>
              <button>Wyloguj</button>
            </li>
            <li>
              <Link href="/ustawienia">Ustawienia</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
