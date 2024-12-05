//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

import React, { useState } from "react";
import SymptomsIntensity_note from "@/components/note/symptoms-note";

import { Calendar } from "@/components/calendar/Calendar";

export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section className="flex flex-col items-center gap-28  pt-32 pb-10 lg:min-h-[calc(100vh-40px)] md:flex-row md:gap-8 lg:gap-20 md:justify-center md:items-start">
      <Calendar
        setCurrentMonth={setCurrentMonth}
        setSelectedDate={setSelectedDate}
        currentMonth={currentMonth}
        selectedDate={selectedDate}
      />
      <SymptomsIntensity_note selectedDateStr={"aaa"} />
    </section>
  );
}
