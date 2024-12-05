import React from "react";

import Dandelion from "@/components/login/Dandelion";

export default function Custom404() {
  return (
    <section className="flex items-start justify-center pt-64 pb-10 lg:min-h-[calc(100vh-40px)]">
      <header className="text-[20rem] font-bold ">
        <h1 className="text-[20rem] font-bold text-eden-700">404</h1>
      </header>

      {/* Dandelions */}
      <div className="w-[17rem] invisible md:visible fixed -bottom-3 left-[23vw] transform -rotate-[15deg] origin-bottom ">
        <Dandelion />
      </div>
      <div className="w-[10rem] invisible md:visible fixed -bottom-14 left-[30vw] transform origin-bottom rotate-[30deg] ">
        <Dandelion />
      </div>
      <div className="w-[14rem] invisible md:visible fixed -bottom-14 left-[45vw] transform origin-bottom -rotate-[7deg] ">
        <Dandelion />
      </div>
      <div className="w-[11.5rem] invisible md:visible fixed -bottom-14 left-[49vw] transform origin-bottom rotate-[20deg]">
        <Dandelion />
      </div>
      <div className="w-[15rem] invisible md:visible fixed -bottom-14 left-[60vw] transform origin-bottom rotate-[20deg] ">
        <Dandelion />
      </div>
    </section>
  );
}
