"use client";

import React from "react";
import Heropages from "@/components/ui/homePage";
import  Spotlight  from "@/components/ui/Spotlight";

const Home = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col overflow-hidden">

      {/* Background glassmorphique */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-xl z-0 pointer-events-none"></div>

      {/* Spotlights */}
      <div className="absolute inset-0 z-[10]">
        <Spotlight fill="white" className="opacity-30" />
      </div>

      {/* Hero */}
      <div className="relative z-[7] pt-[27px]">
        <Heropages color="white" opacity={0.3} />
      </div>

    </div>
  );
};

export default Home;
