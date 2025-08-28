"use client";

import React from "react";
import HomePage from "@/components/ui/homePage";
import Spotlight from "@/components/ui/Spotlight";

const Home = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col overflow-hidden">

      {/* Background glassmorphique */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-xl z-0 pointer-events-none"></div>

      {/* Spotlights décoratif */}
      <div className="absolute inset-0 z-[60] pointer-events-none">
        <Spotlight fill="white" className="opacity-30" />
      </div>

      {/* Hero */}
      <div className="relative z-[50] pt-[27px]">
        <HomePage color="white" opacity={0.3} />
      </div>

    </div>
  );
};

export default Home;
