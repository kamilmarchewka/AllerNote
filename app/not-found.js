"use client";
import React from "react";

import Dandelion from "@/components/login/Dandelion";

import gsap from "gsap";
// import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(CustomEase);
import { useRef } from "react";
import Header from "@/components/404/Header";

export default function Custom404() {
  const container = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.to(".fly", {
  //       scale: 0.2,
  //       // autoAlpha: 0,
  //       rotate: 150,
  //       x: 600,
  //       y: -300,
  //       duration: 2.5,
  //       autoAlpha: 0,
  //       delay: 10,
  //       ease: CustomEase.create(
  //         "custom",
  //         "M0,0 C0.277,0.495 0.38,-0.306 0.467,-0.151 0.506,-0.115 0.538,0.079 0.599,0.157 0.634,0.203 0.692,-0.161 0.761,-0.146 0.825,0.67 0.799,0.88 0.965,1 1.023,1.042 0.973,1 1,1 "
  //       ),
  //     });
  //   },
  //   { scope: container }
  // ); //

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
      <div className=" w-[14rem] invisible md:visible fixed -bottom-28 left-[45vw] transform origin-bottom -rotate-[7deg] animate-[dandelion-3_17s_ease-in-out_infinite]  -z-10">
        <div className="fly">
          <Dandelion />
        </div>
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
