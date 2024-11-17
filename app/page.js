//  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
import Image from "next/image";

import Nav from "@/components/nav/Nav";
import { getCollection } from "@/lib/firebase/getCollection";

export default async function Home() {
  const data = await getCollection("users");

  return (
    <h1 className="text-green-400 md:text-red-800 lg:text-purple-500">
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </h1>
  );
}
