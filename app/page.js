//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
import Image from "next/image";

import Nav from "@/components/nav/Nav";
import { getCollection } from "@/lib/firebase/getCollection";
import SymptomsIntensity_note from "@/components/note/symptoms-note";

export default async function Home() {
  const data = await getCollection("users");

  return (
    <>
      <div className="flex justify-center items-center min-h-screen gap-8 p-8">
        
        <div className="flex w-1/2 aspect-square bg-gray-200 border border-gray-400"></div>

        <div className="flex w-1/2 aspect-square bg-gray-100 border border-gray-400 p-4">
          <SymptomsIntensity_note />
        </div>
      </div>
    </>
  );
}
