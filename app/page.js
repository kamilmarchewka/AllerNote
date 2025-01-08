//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>

import Services from "@/components/welcome/Services";
import WelcomeBadge from "@/components/welcome/WelcomeBadge";
import MainAllerNote from "@/components/welcome/MainAllerNote";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return (
    <section className="flex flex-col gap-28 pt-32 pb-10 items-center">
      <h1>Jest chujnia</h1>
      <h2>Ale nie do końca {data.message}</h2>
      <MainAllerNote />
      <WelcomeBadge />
      <Services />
    </section>
  );
}
