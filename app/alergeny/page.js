import IntensityLabel from "@/components/alergeny/IntensityLabel";
import VoivodeshipSelect from "@/components/alergeny/VoivodeshipSelect";
import React from "react";

export default function Allergens() {
  return (
    <>
      <header className="text-4xl font-semibold mb-16 mt-32 lg:mt-44">
        <h1 className="flex items-center gap-4 flex-wrap">
          <span>Co teraz pyli w woj.</span>
          <span className="flex items-center gap-4">
            <VoivodeshipSelect />
            <span>?</span>
          </span>
        </h1>
      </header>
      <section></section>
    </>
  );
}
