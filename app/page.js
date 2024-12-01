//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

import Image from "next/image";
import Nav from "@/components/nav/Nav";
import React, { useState } from "react";
import SymptomsIntensity_note from "@/components/note/symptoms-note";
import CalendarNote from "@/components/calendar/calendar-config";


export default function Home() {
  return (
    <>
      <div className="flex mt-10 justify-center items-center min-h-screen gap-8 p-8 bg-gradient-to-tl from-turquoise-500/5 to-transparent">
        <div className="flex w-1/2 aspect-square px-20 py-14">
          <CalendarNote/>
        </div>
        <div className="flex w-1/2 aspect-square px-20 py-14">
          <SymptomsIntensity_note />
        </div>
      </div>
    </>
  );
}
