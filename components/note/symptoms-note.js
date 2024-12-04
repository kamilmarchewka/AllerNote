"use client";
import React, { useState } from "react";
import { formatDate } from "@/utils/date";
import renderButtons from "./CustomRadio";
import CustomRadio from "./CustomRadio";

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
      <h1 className="text-3xl font-bold mb-9">
        {selectedDateStr || formattedCurrentDate}
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
        className="block mt-0.5 p-1.5 w-full h-[10px] text-sm border bg-white rounded-lg resize-none shadow-lg"
        placeholder="Dzisiaj czuję się..."
      ></textarea>
    </form>
  );
}
