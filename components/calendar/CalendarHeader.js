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
    <header className="mb-9">
      <h2 className="text-3xl font-bold">{formatMonthYear(currentDate)}</h2>
    </header>
  );
};
