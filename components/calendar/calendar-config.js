"use client";
import React, { useState } from "react";

export default function CalendarNote() {
  function calcTable(year, month) {

    let arr = new Array(6);

    let startDayInWeek = new Date(year, month, 1).getDay();
    let monthLong = new Date(year, month + 1, 0).getDate();

    let counter = 1;
    let startCount = false;

    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(7); 
      for (let j = 0; j < arr[i].length; j++) {
        if (i === 0 && j === startDayInWeek) {
          startCount = true;
        }

        if (startCount) {
          arr[i][j] = counter;
          counter++;
          if (counter > monthLong+1) {
            arr[i][j] = "";
          }
        } else {
          arr[i][j] = "";
        }
      }
    }
    return arr;
  }

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth()); 
  const calendar = calcTable(year, month);

  const months = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
  ];

  const goToPreviousMonth = () => {
    if (month === 0) {
      setMonth(11); 
      setYear(year - 1); 
    } else {
      setMonth(month - 1); 
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0); 
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const [hoveredValue, setHoveredValue] = useState(null);

  const handleMouseEnter = (day) => {
    setHoveredValue(day); 
  };

  const handleMouseLeave = () => {
    setHoveredValue(null); 
  };

  return (
    <div>
    <div className="flex justify-between">
      <button
        onClick={goToPreviousMonth}
        className="border rounded p-2 mb-4 text-center"
      >
        &lt;
      </button>
      <span className="text-xl">{months[month]} {year}</span>
      <button
        onClick={goToNextMonth}
        className="border rounded p-2 mb-4 text-center"
      >
        &gt;
      </button>
      </div>

      <table className="border-separate border-spacing-2 text-center">
        <thead>
          <tr>
            {["Nd ", "Pon", "Wt ", "Śr ", "Czw", "Pt ", "Sob"].map((day) => (
              <th key={day} className="border p-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex} className="border p-2">
                {day ? (
                  <button 
                    onMouseEnter={() => handleMouseEnter(day)} 
                    onMouseLeave={handleMouseLeave} 
                    className={`rounded-full ${day > 9 ? "px-2 py-1.5" : "px-3 py-1.5"} ${
                      hoveredValue === day
                      ? "bg-gradient-to-r from-emerald-600 via-emerald-700 to-eden-700 hover:bg-gradient-to-br "
                      : "bg-transparent"
                  }`}>
                    {day}
                  </button>
                ) : null}
              </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
