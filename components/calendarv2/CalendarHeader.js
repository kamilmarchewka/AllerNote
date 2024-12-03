import React from "react";

export const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={onPrevMonth}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Previous month"
      >
        left
      </button>
      <h2 className="text-xl font-semibold">
        {currentDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <button
        onClick={onNextMonth}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Next month"
      >
        right
      </button>
    </div>
  );
};
