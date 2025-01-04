//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

import Services from "@/components/welcome/Services";
import WelcomeBadge from "@/components/welcome/WelcomeBadge";
import MainAllerNote from "@/components/welcome/MainAllerNote";

export default function Home() {
  return (
    <section className="flex flex-col gap-28 pt-32 pb-10 items-center">
        <MainAllerNote />
        <WelcomeBadge />
        <Services />
    </section>
  );
}