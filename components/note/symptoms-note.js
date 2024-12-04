"use client";
import React, { useState } from "react";
import { formatDate } from "@/utils/date";
import renderButtons from "./renderButtons";

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
      {renderButtons(setSamopoczocie, samopoczucie, "ogólne samopoczucie")}
      {renderButtons(setBolGlowy, bolGlowy, "ból głowy")}
      {renderButtons(setKatar, katar, "katar")}
      {renderButtons(setNos, nos, "swędzenie oczu")}
      {renderButtons(setOko, oko, "swędzenie nosa")}
      {renderButtons(setKaszel, kaszel, "kaszel")}
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
