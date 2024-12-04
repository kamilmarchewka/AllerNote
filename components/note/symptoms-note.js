"use client";
import React, { useState } from "react";
import { formatDate } from "@/utils/date";

export default function SymptomsIntensity_note({selectedDateStr}) {
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

  const renderButtons = (stateSetter, currentValue, symptom) => {

    const [hoveredValue, setHoveredValue] = useState(null);

    const handleClick = (value) => {
        stateSetter(currentValue === value ? null : value);
    };

    const handleMouseEnter = (value) => {
        setHoveredValue(value); 
    };

    const handleMouseLeave = () => {
        setHoveredValue(null); 
    };

    return (
        <div className="flex justify-between gap-12">
        <div className="flex text-left text-base">{symptom}:</div>
        <div className="flex gap-1 mb-2 ">
            {[1, 2, 3, 4, 5].map((value) => (
            <button
                key={value}
                type="button"
                onClick={() => handleClick(value)}
                onMouseEnter={() => handleMouseEnter(value)} 
                onMouseLeave={handleMouseLeave} 
                className={`rounded-full px-2.5 py-2.5 ${
                    currentValue >= value || hoveredValue >= value
                    ? "bg-gradient-to-r from-emerald-600 via-emerald-700 to-eden-700 hover:bg-gradient-to-br "
                    : "bg-white shadow-inner"
                }`}
            >
            </button>
            ))}
        </div>
        </div>
    );
  };

  return (
    <form onSubmit={submitHandler}>
       <h1 className="text-3xl font-bold">
        {selectedDateStr || formattedCurrentDate}
      </h1>
      <h2 className="mt-6 text-xl mb-2 italic">MOJE OBIAWY:</h2>
      {renderButtons(setSamopoczocie, samopoczucie, "ogólne samopoczucie")}
      {renderButtons(setBolGlowy, bolGlowy, "ból głowy")}
      {renderButtons(setKatar, katar, "katar")}
      {renderButtons(setNos, nos, "swędzenie oczu")}
      {renderButtons(setOko, oko, "swędzenie nosa")}
      {renderButtons(setKaszel, kaszel, "kaszel")}
      <h2 className="mt-1 mb-1 text-xl italic">NOTATKA:</h2>
        <textarea id="userNote" rows="5" className="flex mt-0.5 p-1.5 w-full h-40 text-sm border bg-white rounded-lg resize-none shadow-lg" 
                  placeholder="Dzisiaj czuję się...">
        </textarea>
    </form>
  );
}
