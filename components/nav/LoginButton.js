import React from "react";
import UserIcon from "./UserIcon";
import Link from "next/link";
//aaa
export default function LoginButton({ isLoggedIn, onClick, ref }) {
  return (
    <Link
      href="/login"
      ref={ref}
      onClick={onClick}
      className={`${
        isLoggedIn
          ? "relative w-11 h-11 rounded-full pointer-events-none"
          : "flex items-center px-6 py-3 rounded-[.8rem] pointer-events-auto"
      }  bg-gradient-to-br from-turquoise-500 to-eden-700 text-white  font-semibold md:transform md:hover:scale-105 md:transition-transform`}
    >
      {isLoggedIn ? (
        <span className="absolute left-1/2 top-1/2 block w-6 transform -translate-x-1/2 -translate-y-1/2">
          <UserIcon />
        </span>
      ) : (
        <span>Zaloguj się</span>
      )}
    </Link>
  );
}
