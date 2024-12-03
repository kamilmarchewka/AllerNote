// components/Calendar.js
import { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const startDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

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

  return (
    <div>
      <div>
        <button onClick={handlePrevMonth}>◀</button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>▶</button>
      </div>
      <div>
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={index} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
