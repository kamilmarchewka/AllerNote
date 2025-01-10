//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

import Services from "@/components/welcome/Services";
import WelcomeBadge from "@/components/welcome/WelcomeBadge";
import MainAllerNote from "@/components/welcome/MainAllerNote";
import { useEffect, useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/cities");
      const data = await response.json();
      setCities(data);
    }
    fetchData();
  }, []);

  console.log(cities);

  return (
    <section className="flex flex-col pt-32 pb-10 items-center">
      {cities.map((city) => (
        <div key={city.id}>{city.name}</div>
      ))}
      <MainAllerNote />
      <WelcomeBadge />
      <Services />
    </section>
  );
}
