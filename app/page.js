//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
"use client";

import React, { useState, useEffect } from "react";
import WelcomeBadge from "@/components/welcome/WelcomeBadge";

export default function Home() {
  return (
    <section className="flex flex-col gap-28 pt-32 pb-10 items-center">
      <section className="flex flex-col md:flex-row">
      <div className="relative text-center font-bold text-[40vw] text-white outlines font-outline-2 m-10 lg:m-60 md:m-40 sm:m-20">
          Note
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 text-center font-bold text-eden-700 text-[20vw]">
          Aller
        </div>
      </div>
      </section>
        <WelcomeBadge />
    </section>
  );
}