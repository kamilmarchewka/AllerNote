import Services from "@/components/welcome/Services";
import WelcomeBadge from "@/components/welcome/WelcomeBadge";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 pt-32 pb-10 min-h-[calc(100vh-40px)]">
      <header className="relative text-center font-bold text-white -z-[1] select-none">
        <h1 className="text-[20vw] text-eden-700 leading-none">Aller</h1>
        <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 outlines font-outline-2 text-transparent text-[35vw] tracking-wider">
          Note
        </h1>
      </header>
      <div>
        <Link
          href="/rejestracja"
          className="block px-[2.1rem] py-[.7rem]  rounded-[1.13rem] bg-eden-700 text-white transform hover:scale-105 transition-transform "
        >
          Dołącz do nas już dziś!
        </Link>
      </div>
      {/* <WelcomeBadge />
      <Services /> */}
    </section>
  );
}
