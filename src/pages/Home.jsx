"use client";

import React from "react";
import GeometricLines from "@/components/ui/homePage"; // 👈 tu appelles un composant

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">

      {/* Spotlights */}
      <div className="absolute inset-0">
        {/* ... lumières ... */}
      </div>

      {/* 👇 Ici tu appelles GeometricLines */}
      <GeometricLines color="white" opacity={0.3} />

      {/* Contenu */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* ... ton texte ... */}
      </div>

    </div>
  );
};

export default Home;
