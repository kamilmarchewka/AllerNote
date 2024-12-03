"use client";
import React, { useEffect, useState } from "react";
import DayBtn from "./day-button";
import calcTable from "./calendar-table";

export default function CalendarNote({updateCurrentDate}) {

  const today = new Date();
  let d = today.getDate();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [selectedDay,setSelectedDay] = useState(d);

  const calendar = calcTable(year, month);

  const months = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
  ];
  months[-1] = "Grudzień";

  const daysOfWeek = ["Nd", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];

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
    return `${setMonth}`
  };

  const todaysDate = () => {
      const today = new Date();
      let dow = daysOfWeek[today.getDay()];
      let d = today.getDate();
      return `${dow}. ${d}`;
  }

  useEffect(()=>{
    updateCurrentDate(todaysDate());
  },[])

  function dayBtnClickHandler(e){
    const day = e.target.value;
    setSelectedDay(day);
    updateCurrentDate(`${daysOfWeek[(day-1)%7]}. ${day}`);
  }

  return (
    <div>
      <div className="flex justify-between">
        <span className="mb-4 text-3xl font-bold">{months[month]} {year}</span>
      </div>
      <div className="border bg-white shadow-lg rounded-lg ">
      <table className="border-separate border-spacing-2 text-center">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} className= "text-sm italic font-light p-2 text-eden-700">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex} className="">
                  {day ? (<DayBtn day={day} onClick={dayBtnClickHandler} isSelected={selectedDay==day} />) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between">
      <button
          onClick={goToPreviousMonth}
          className="p-2 ml-4 mb-4 text-base text-center text-eden-700"
        > 
          &lt; {' '}
          {months[((month-1)%12)]}
        </button>
        <button
          onClick={goToNextMonth}
          className="p-2 mr-4 mb-4 text-base text-center text-eden-700"
        >
          {months[((month+1)%12)]} {' '}
          &gt;
        </button>
        </div>
        </div>
    </div>
  );
}
