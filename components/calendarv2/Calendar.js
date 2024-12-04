import React, { useState } from "react";
import { CalendarFooter } from "./CalendarFooter";
import { CalendarGrid } from "./CalendarGrid";
import { formatDate } from "../../utils/date";
import { CalendarHeader } from "./CalendarHeader";

export const Calendar = ({ updateCurrentDate, updateSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedCurrentDate = formatDate(new Date());

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
    <div className="mt-20">
      <CalendarHeader 
        currentDate={currentDate}
      />
      <div className="w-full max-w-md mx-auto border bg-white shadow-lg rounded-lg p-2">
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
    </div>
  );
};
