import React from "react";

export const CalendarFooter = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];
  months[-1] = "Grudzień";

  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={onPrevMonth}
        className="p-2 mr-4 mt-4 text-base text-center text-eden-700"
        aria-label="Previous month"
      >
        &lt; {months[(currentMonth - 1) % 12]}
      </button>
      <button
        onClick={onNextMonth}
        className="p-2 mr-4 mt-4 text-base text-center text-eden-700"
        aria-label="Next month"
      >
        {months[(currentMonth + 1) % 12]} &gt;
      </button>
    </div>
  );
};
