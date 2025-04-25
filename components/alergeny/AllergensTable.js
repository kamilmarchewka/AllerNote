import React from "react";

import IntensityLabel from "@/components/alergeny/IntensityLabel";

export default async function AllergensTable() {
  const translationMap = {
    "Grass / Poaceae": "Trawy / Wiechlinowate",
    Others: "Inne",
    Alder: "Olsza",
    Birch: "Brzoza",
    Cypress: "Cyprys",
    Elm: "Wiąz",
    Hazel: "Leszczyna",
    Oak: "Dąb",
    Pine: "Sosna",
    Plane: "Platan",
    "Poplar / Cottonwood": "Topola / Osika",
    Chenopod: "Komosowate",
    Mugwort: "Bylica",
    Nettle: "Pokrzywa",
    Ragweed: "Ambrozja",
  };
  const response = await fetch(
    "https://api.ambeedata.com/latest/pollen/by-place?place=Poland,Warsaw",
    {
      headers: {
        "x-api-key": process.env.X_API_KEY,
      },
    }
  ).then((r) => r.json());

  if (!response || !response.data || response.data.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-lg font-semibold">Brak danych</h2>
        <p className="text-gray-500">Spróbuj ponownie później.</p>
      </div>
    );
  }
  const allergens = response.data[0].Species;
  const flattenedAllergens = Object.entries(allergens).reduce(
    (acc, [key, val]) => ({
      ...acc,
      ...(typeof val === "object" ? val : { [key]: val }),
    }),
    {}
  );
  const array = Object.entries(flattenedAllergens).map(([name, intensity]) => ({
    name,
    intensity,
  }));

  const translatedData = array.map((item) => ({
    ...item,
    name: translationMap[item.name] || item.name,
  }));

  console.log(translatedData);

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
      {translatedData.map(({ name, intensity }) => (
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
