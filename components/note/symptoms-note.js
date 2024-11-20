"use client";
import React, { useState } from "react";
import addNoteToTheUser from "@/lib/firebase/addNoteToTheUser";

export default function SymptomsIntensity_note() {
  const [samopoczucie, setSamopoczocie] = useState(null);
  const [bolGlowy, setBolGlowy] = useState(null);
  const [katar, setKatar] = useState(null);
  const [nos, setNos] = useState(null);
  const [oko, setOko] = useState(null);
  const [kaszel, setKaszel] = useState(null);
  
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
        <div className="flex justify-between">
        <div className="flex ml-5 text-left text-xs">{symptom}:</div>
        <div className="flex ml-20 gap-1 my-0.5 ">
            {[1, 2, 3, 4, 5].map((value) => (
            <button
                key={value}
                type="button"
                onClick={() => handleClick(value)}
                onMouseEnter={() => handleMouseEnter(value)} 
                onMouseLeave={handleMouseLeave} 
                className={`rounded-full px-2 py-2 ${
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
      <h1 className="ml-5 mt-2">MOJE OBIAWY</h1>
      {renderButtons(setSamopoczocie, samopoczucie, "ogólne samopoczucie")}
      {renderButtons(setBolGlowy, bolGlowy, "ból głowy")}
      {renderButtons(setKatar, katar, "katar")}
      {renderButtons(setNos, nos, "swędzenie oczu")}
      {renderButtons(setOko, oko, "swędzenie nosa")}
      {renderButtons(setKaszel, kaszel, "kaszel")}
      <h2 className="ml-5 mt-2">NOTATKA</h2>
        <textarea id="userNote" rows="5" className="flex ml-5 mt-2 p-1.5 w-full text-xs bg-white rounded-lg border resize-none shadow-inner" 
                  placeholder="Dzisiaj czuję się...">
        </textarea>
      <button className="flex my-2 bg-eden-700 active:bg-emerald-900 text-white cursor-pointer rounded-lg p-1 text-sm float-right"
        type="submit"
      >
        Zapisz
      </button>
    </form>
  );
}
