//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

import React, { useEffect, useState } from "react";
import SymptomsNote from "@/components/note/SymptomsNote";

import { Calendar } from "@/components/calendar/Calendar";
import Badge from "@/components/badge/Badge";

export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    console.log("Current month:", currentMonth);
    console.log("Selected date:", selectedDate);

    getNote(selectedDate);
  }, [currentMonth, selectedDate]);

  async function getNote(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    const response = await fetch(`/api/notes/${formattedDate}`);
    const { notes } = await response.json();
    console.log("Note:", notes[0]);

    console.log("Formatted date:", formattedDate);
  }

  return (
    <section className="flex flex-col gap-20 pt-32 pb-10 lg:min-h-[calc(100vh-40px)]">
      <Badge></Badge>
      <div className="flex flex-col items-center gap-28   md:flex-row md:gap-8 lg:gap-20 md:justify-center md:items-start lg:grid lg:grid-cols-[auto_auto] lg:grid-rows-[1fr]">
        <Calendar
          setCurrentMonth={setCurrentMonth}
          setSelectedDate={setSelectedDate}
          currentMonth={currentMonth}
          selectedDate={selectedDate}
        />
        <SymptomsNote selectedDate={selectedDate} />
      </div>
    </section>
  );
}
