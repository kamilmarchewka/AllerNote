import React from "react";

export default function ButtonSecondary({ children }) {
  return (
    <button className="flex items-center justify-center gap-2 text-base font-light px-[.94rem] py-[.38rem] text-eden-500 bg-white rounded-[.75rem] hover:bg-eden-700 hover:text-white transition border border-eden-700">
      {children}
    </button>
  );
}
