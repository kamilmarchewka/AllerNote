import React from "react";

export default function DayBtn({onClick,day,isSelected=false}) {
  return (
    <button
        value={day}
        onClick={(e,day)=>onClick(e)} 
        className={`rounded-lg w-12 h-12 hover:bg-eden-700 hover:text-white transition ${isSelected?"bg-eden-700 text-white":"text-eden-700"}`}>
        {day}
    </button>
);
}
