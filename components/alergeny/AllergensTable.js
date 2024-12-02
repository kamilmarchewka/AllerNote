import React from "react";
import IntensityLabel from "./IntensityLabel";

export default function AllergensTable() {
  const DUMMY_DATA = [
    { name: "Pyłki traw", intensity: 2 },
    { name: "Roztocza kurzu domowego", intensity: 0 },
    { name: "Pleśnie", intensity: 1 },
    { name: "Sierść kota", intensity: 2 },
    { name: "Sierść psa", intensity: 0 },
    { name: "Orzechy", intensity: 1 },
    { name: "Mleko", intensity: 2 },
    { name: "Jaja", intensity: 1 },
    { name: "Ryby", intensity: 0 },
    { name: "Soja", intensity: 2 },
    { name: "Pszenica", intensity: 1 },
    { name: "Lateks", intensity: 0 },
  ];

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-32">
      <header className="grid gap-3 py-5 px-4 grid-cols-2 lg:grid-cols-[1fr_.7fr] border-b border-gray-200 font-light uppercase">
        <span>Nazwa</span>
        <span>Nasilenie</span>
      </header>
      <header className="hidden py-5 px-4 lg:grid gap-3 grid-cols-2 lg:grid-cols-[1fr_.7fr] border-b border-gray-200 font-light uppercase">
        <span>Nazwa</span>
        <span>Nasilenie</span>
      </header>
      {DUMMY_DATA.map(({ name, intensity }) => (
        <li
          key={name}
          className="grid gap-3 py-5 px-4 grid-cols-2 lg:grid-cols-[1fr_.7fr] items-center border-b border-gray-200"
        >
          <span>{name}</span>
          <div>
            <IntensityLabel intensity={intensity} />
          </div>
        </li>
      ))}
    </ul>
  );
}
