"use client";
import Link from "next/link";

export default function WelcomeBadge() {
  return (
    <section className = "mx-auto relative flex flex-col items-start gap-7 bg-eden-700 text-white rounded-2xl p-5 pt-12 md:pl-8 md:pr-72 md:py-7 max-w-[50rem]">
      <h1 className="text-center text-2xl font-bold">
        Dołącz do nas już dziś!
      </h1>
    </section>
  );
}
