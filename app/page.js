//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

<<<<<<< HEAD
import Nav from "@/components/nav/Nav";
import SymptomsIntensity from "@/components/note/SymptomsIntensity";

export default async function Home() {
=======
import React, { useState } from "react";
import SymptomsIntensity_note from "@/components/note/symptoms-note";

import { Calendar } from "@/components/calendar/Calendar";

export default function Home() {
  const [currentDate, setCurrentDate] = useState("");
  const [selectedDateStr, setSelectedDateStr] = useState("");

>>>>>>> calendar
  return (
    <section className="flex flex-col items-center gap-28 mt-32 md:flex-row md:gap-8 lg:gap-20 md:justify-center md:items-start">
      <Calendar updateSelectedDate={setSelectedDateStr} />
      <SymptomsIntensity_note selectedDateStr={selectedDateStr} />
    </section>
  );
}
