"use client";
import React from "react";

import Dandelion from "@/components/login/Dandelion";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { useRef } from "react";
import Header from "@/components/404/Header";

export default function Custom404() {
  const container = useRef(null);

  useGSAP(
    () => {
      // gsap code here...
      // gsap.to(".aaa", {
      //   xPercent: 500,
      //   yPercent: -300,
      //   scale: 0.3,
      //   rotate: 190,
      //   duration: 2,
      //   delay: 1,
      // });
    },
    { scope: container }
  ); // <-- easily add a scope for selector text (optional)

  return (
    <section
      ref={container}
      className="flex items-start justify-center pt-64 pb-10 lg:min-h-[calc(100vh-40px)]"
    >
      <Header />

      {/* Dandelions */}
      <div className="w-[17rem] invisible md:visible fixed -bottom-3 left-[23vw] transform -rotate-[15deg] origin-bottom animate-[dandelion-1_22s_ease-in-out_infinite]">
        <Dandelion />
      </div>
      <div className="w-[10rem] invisible md:visible fixed -bottom-14 left-[30vw] transform origin-bottom rotate-[30deg] animate-[dandelion-2_17s_ease-in-out_infinite]">
        <Dandelion />
      </div>
      <div className="aaa w-[14rem] invisible md:visible fixed -bottom-14 left-[45vw] transform origin-bottom -rotate-[7deg] animate-[dandelion-3_17s_ease-in-out_infinite]  -z-10">
        <Dandelion />
      </div>
      <div className="w-[11.5rem] invisible md:visible fixed -bottom-14 left-[49vw] transform origin-bottom rotate-[20deg] animate-[dandelion-4_15s_ease-in-out_infinite]">
        <Dandelion />
      </div>
      <div className="w-[15rem] invisible md:visible fixed -bottom-14 left-[60vw] transform origin-bottom rotate-[20deg] animate-[dandelion-5_29s_ease-in-out_infinite]">
        <Dandelion />
      </div>
    </section>
  );
}
