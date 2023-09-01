import dynamic from "next/dynamic";
import React from "react";
const Hero = dynamic(() => import("@/components/main/Hero"));

const Render = () => {
  return (
    <div>
      <div className="fixed w-full">
        <Hero />
      </div>

      <div></div>
    </div>
  );
};

export default Render;
