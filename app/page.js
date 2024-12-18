//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

import React, { useState, useEffect } from "react";
import SymptomsIntensity_note from "@/components/note/SymptomsNote";

import { Calendar } from "@/components/calendar/Calendar";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-28  pt-32 pb-10 lg:min-h-[calc(100vh-40px)] md:flex-row md:gap-8 lg:gap-20 md:justify-center md:items-start">
      <div className="relative text-center font-bold text-[40vw] text-white outlines font-outline-2 lg:m-60 md:m-40">
          Note
        <div className="absolute left-1/2 -translate-x-1/2 text-center font-bold text-eden-700 text-[20vw]">
          Aller
        </div>
      </div>
    </section>
  );
}
