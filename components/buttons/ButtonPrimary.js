import React from "react";

export default function ButtonPrimary({ text }) {
  return (
    <button className="block px-[2.1rem] py-[.7rem] text-eden-500 bg-white rounded-[1.13rem] transform hover:scale-105 transition-transform">
      {text}
    </button>
  );
}
