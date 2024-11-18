"use client";
import React, { useState } from "react";
import addNoteToTheUser from "@/lib/firebase/addNoteToTheUser";

export default function SymptomsIntensity() {
  const [bolGlowy, setBolGlowy] = useState(0);
  const [katar, setKatar] = useState(2);

  function submitHandler(e) {
    e.preventDefault();
    console.log("dupa");
    const data = {
      bol_glowy: bolGlowy,
      katar: katar,
    };
    addNoteToTheUser("0LGiad8GwBD5anFw0cSm", data);
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="bol-glowy">Ból głowy: {bolGlowy}</label>
        <input
          onInput={(e) => setBolGlowy((prev) => e.target.value)}
          value={bolGlowy}
          id="bol-glowy"
          name="bol-glowy"
          min="0"
          max="5"
          type="range"
        ></input>
      </div>
      <div>
        <label htmlFor="katar">Katar: {katar}</label>
        <input
          onInput={(e) => setKatar((prev) => e.target.value)}
          value={katar}
          id="katar"
          name="katar"
          min="0"
          max="5"
          type="range"
        ></input>
      </div>
      <button type="submit">Dodaj notatkę</button>
    </form>
  );
}
