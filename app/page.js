"use client";

import Render from "@/components/main/Render";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// const Header = dynamic(() => import("@/components/Header"));
// const Headerscroll = dynamic(() => import("@/components/Headerscroll"));

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeaderscroll, setShowHeaderscroll] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    console.log(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
  }, []);

  const show = false;
  return (
    <>
      <div className=" w-full">
        {/* {scrollPosition > 550 ? <Headerscroll /> : <Hero />} */}
        <Render />
      </div>
    </>
  );
}
