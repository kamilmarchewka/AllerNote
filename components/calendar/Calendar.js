import React, { useState } from "react";
import { CalendarFooter } from "./CalendarFooter";
import { CalendarGrid } from "./CalendarGrid";
import { formatDate } from "../../utils/date";
import { CalendarHeader } from "./CalendarHeader";

export const Calendar = ({ updateCurrentDate, updateSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    updateSelectedDate(formattedDate);
  };

  return (
    <section className="flex flex-col w-fit">
      <CalendarHeader currentDate={currentDate} />
      <div className="border bg-white shadow-md rounded-2xl p-2">
        <CalendarGrid
          currentDate={currentDate}
          selectedDate={selectedDate}
          onSelectDate={handleSelectDate}
        />
        <CalendarFooter
          currentMonth={currentDate.getMonth()}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
      </div>
    </section>
  );
};
