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
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{symptom}:</span>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end", 
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => stateSetter(value)}
              style={{
                padding: "5px 5px",
                backgroundColor: currentValue === value ? "blue" : "gray",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    );
  };
  

  return (
    <form onSubmit={submitHandler}>
      <h1>Moje obiawy</h1>
      {renderButtons(setSamopoczocie, samopoczucie, "Ogólne samopoczucie")}
      {renderButtons(setBolGlowy, bolGlowy, "Ból głowy")}
      {renderButtons(setKatar, katar, "Katar")}
      {renderButtons(setNos, nos, "Swędzenie oczu")}
      {renderButtons(setOko, oko, "Swędzenie nosa")}
      {renderButtons(setKaszel, kaszel, "Kaszel")}
      <button
        type="submit"
        style={{
          marginTop: "5px",
          padding: "5px 5px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "2px",
          cursor: "pointer",
        }}
      >
        Dodaj notatkę
      </button>
    </form>
  );
}
