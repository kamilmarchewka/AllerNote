//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

import Image from "next/image";
import Nav from "@/components/nav/Nav";
import React, { useState } from "react";
import SymptomsIntensity_note from "@/components/note/symptoms-note";
import CalendarNote from "@/components/calendar/calendar-config.js";


export default function Home() {
  const [currentDateStr, setCurrentDateStr] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <div className="flex-container mt-10 min-h-screen p-8">
        <div className="responsive-content pt-20">
          <CalendarNote updateCurrentDate={(d) => setCurrentDateStr(d)} />
        </div>
        <div className="responsive-content pt-20">
          <SymptomsIntensity_note currentDateStr={currentDateStr} />
        </div>
      </div>
    </>
  );
}
