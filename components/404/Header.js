import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

export default function Header() {
  return (
    <header className="relative z-[1] flex flex-col items-center ">
      <h1 className="flex  text-eden-700 text-[20rem] leading-none font-bold ">
        <span className="block animate-[404-jump_9s_ease-in-out_infinite_1s]">
          4
        </span>
        <span className="block animate-[404-jump_9s_ease-in-out_infinite_1.1s]">
          0
        </span>
        <span className="block animate-[404-jump_9s_ease-in-out_infinite_1.2s]">
          4
        </span>
      </h1>
      <div>
        <ButtonPrimary>Powrót na stronę główną</ButtonPrimary>
      </div>
    </header>
  );
}
