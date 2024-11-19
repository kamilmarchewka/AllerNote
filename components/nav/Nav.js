"use client";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "./Hamburger";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <nav>
      <Link href="/">Logo</Link>

      <Hamburger
        onClickHandler={() => setNavIsOpen((prev) => !prev)}
        isClicked={navIsOpen}
      />

      {/* main navigation */}
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/kalendarz">Kalendarz</Link>
        </li>
        <li>
          {/* button with user name */}
          <button>Maksymilian Łuczak</button>
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
