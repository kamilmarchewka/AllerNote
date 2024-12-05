"use client";
import React, { useState } from "react";
import { formatDate } from "@/utils/date";
import renderButtons from "./CustomRadio";
import CustomRadio from "./CustomRadio";
import ButtonSecondary from "../buttons/ButtonSecondary";

export default function SymptomsIntensity_note({ selectedDateStr }) {
  const [samopoczucie, setSamopoczocie] = useState(null);
  const [bolGlowy, setBolGlowy] = useState(null);
  const [katar, setKatar] = useState(null);
  const [nos, setNos] = useState(null);
  const [oko, setOko] = useState(null);
  const [kaszel, setKaszel] = useState(null);

  const now = new Date();
  const formattedCurrentDate = formatDate(now);

  function submitHandler(e) {
    e.preventDefault();
    const data = {
      samopoczucie: samopoczucie,
      bol_glowy: bolGlowy,
      katar: katar,
      swedzenie_nosa: nos,
      swedzenie_oczu: oko,
      kaszel: kaszel,
    };
  }

  return (
    <form onSubmit={submitHandler} className="block h-[100%]">
      <h1 className="flex justify-between items-center text-3xl font-bold mb-9">
        {selectedDateStr || formattedCurrentDate}
        <ButtonSecondary>
          Co pyliło?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
        </ButtonSecondary>
      </h1>
      <h2 className="text-xl mb-2 italic">MOJE OBIAWY:</h2>
      <CustomRadio
        stateSetter={setSamopoczocie}
        currentValue={samopoczucie}
        symptom="ogólne samopoczucie"
      />
      <CustomRadio
        stateSetter={setBolGlowy}
        currentValue={bolGlowy}
        symptom="ból głowy"
      />
      <CustomRadio
        stateSetter={setKatar}
        currentValue={katar}
        symptom="katar"
      />
      <CustomRadio
        stateSetter={setNos}
        currentValue={nos}
        symptom="swędzenie oczu"
      />
      <CustomRadio
        stateSetter={setOko}
        currentValue={oko}
        symptom="swędzenie nosa"
      />
      <CustomRadio
        stateSetter={setKaszel}
        currentValue={kaszel}
        symptom="kaszel"
      />

      <h2 className="mt-5 mb-1 text-xl italic">NOTATKA:</h2>
      <textarea
        id="userNote"
        rows="5"
        className="block mt-0.5 p-1.5 w-full h-[5.4rem] text-sm border bg-white rounded-lg resize-none shadow-md"
        placeholder="Dzisiaj czuję się..."
      ></textarea>
    </form>
  );
}
