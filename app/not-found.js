"use client";
import React from "react";

import Dandelion from "@/components/login/Dandelion";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { useRef } from "react";

export default function Custom404() {
  const container = useRef(null);

  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".aaa", {
        xPercent: 500,
        yPercent: -300,
        scale: 0.3,
        rotate: 190,
        duration: 2,
        delay: 1,
      });
    },
    { scope: container }
  ); // <-- easily add a scope for selector text (optional)

  return (
    <section
      ref={container}
      className="flex items-start justify-center pt-64 pb-10 lg:min-h-[calc(100vh-40px)]"
    >
      <header className="text-[20rem] font-bold ">
        <h1 className="flex gap-1 text-[20rem] font-bold text-eden-700">
          <span className="animate-[404-jump_5s_ease-in-out_infinite_1s]">
            4
          </span>
          <span className="animate-[404-jump_5s_ease-in-out_infinite_1.1s]">
            0
          </span>
          <span className="animate-[404-jump_5s_ease-in-out_infinite_1.2s]">
            4
          </span>
        </h1>
      </header>

      {/* Dandelions */}
      <div className="w-[17rem] invisible md:visible fixed -bottom-3 left-[23vw] transform -rotate-[15deg] origin-bottom ">
        <Dandelion />
      </div>
      <div className="w-[10rem] invisible md:visible fixed -bottom-14 left-[30vw] transform origin-bottom rotate-[30deg] ">
        <Dandelion />
      </div>
      <div className="aaa w-[14rem] invisible md:visible fixed -bottom-14 left-[45vw] transform origin-bottom -rotate-[7deg] ">
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
