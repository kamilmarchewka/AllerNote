"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SymptomsNote from "@/components/note/SymptomsNote";
import { Calendar } from "@/components/calendar/Calendar";
import Badge from "@/components/badge/Badge";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

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
