"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";
import LoginButton from "./LoginButton";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);
  const submenuRef = useRef(null);

  function clickOutsideHandler(e) {
    // Close menu when clicking outside
    if (submenuRef.current && !submenuRef.current.contains(e.target)) {
      setSubmenuIsOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", (e) => clickOutsideHandler(e));

    return () => {
      document.removeEventListener("mousedown", (e) => clickOutsideHandler(e));
    };
  }, []);

  return (
    <nav className="body-spacing py-3 bg-white flex justify-between items-center fixed top-0 left-0 w-full shadow-sm">
      <Link href="/">Logo</Link>

      <Hamburger
        onClickHandler={() => setNavIsOpen((prev) => !prev)}
        isClicked={navIsOpen}
      />

      {/* main navigation */}
      <ul
        className={`flex flex-col items-start absolute p-2 bg-white top-[calc(100%+1rem)] right-4 shadow-md rounded-md transform ${
          navIsOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-[calc(100%+1.1rem)] opacity-0 md:translate-x-0 md:opacity-100"
        } transition-all md:flex-row md:gap-3 md:items-center md:static md:bg-transparent md:shadow-none md:rounded-none`}
      >
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
        <li className="flex flex-col-reverse md:relative">
          {/* button with user name */}
          <div className="flex justify-center border-t pt-4 mt-2 md:pt-0 md:mt-0 md:ml-4 md:peer">
            <LoginButton
              ref={submenuRef}
              onClick={() => setSubmenuIsOpen((prev) => !prev)}
              isLoggedIn={true}
              username="Maksumilian Łuczak"
            />
          </div>
          {/* submenu */}
          <ul
            className={`md:flex md:flex-col md:items-start md:absolute md:p-2 md:bg-white md:top-[calc(100%+2.5rem)] md:right-0 md:shadow-md md:rounded-md md:transform ${
              submenuIsOpen
                ? "md:translate-y-0 md:opacity-100"
                : "md:-translate-y-5 md:opacity-0"
            } transition-all`}
          >
            <li className="block border-t pt-2 mt-2 md:pt-0 md:mt-0 md:border-t-0">
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
