//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

import Image from "next/image";
import Nav from "@/components/nav/Nav";
import React, { useState } from "react";
import SymptomsIntensity_note from "@/components/note/symptoms-note";
import CalendarNote from "@/components/calendar/calendar-config.js";
import { Calendar } from "@/components/calendarv2/Calendar";

export default function Home() {
  const [currentDate, setCurrentDate] = useState("");
  const [selectedDateStr, setSelectedDateStr] = useState("");

  return (
    <section className="flex flex-col items-center gap-28 mt-32 md:flex-row md:gap-8 lg:gap-20 md:justify-center md:items-start">
      <Calendar updateSelectedDate={setSelectedDateStr} />
      <SymptomsIntensity_note selectedDateStr={selectedDateStr} />
    </section>
  );
}
