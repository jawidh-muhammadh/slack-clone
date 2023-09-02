import dynamic from "next/dynamic";
import React from "react";
import Secondsection from "./Secondsection";
const Hero = dynamic(() => import("@/components/main/Hero"));

const Render = () => {
  return (
    <div className=" ">
      <div className="w-full">
        <Hero />
      </div>

      <div className=" h-[700px]">
        <Secondsection />
      </div>
    </div>
  );
};

export default Render;
