import React from "react";

export const CalendarHeader = ({ currentDate }) => {
  const formatMonthYear = (date) => {
    const formattedDate = date.toLocaleDateString("pl-PL", {
      month: "long",
      year: "numeric",
    });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="mb-4 text-3xl font-bold">
        {formatMonthYear(currentDate)}
      </h2>
    </div>
  );
};
