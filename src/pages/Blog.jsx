"use client";

import React from "react";
import GradientText from "@/components/ui/GradientText";
import GlassmorphicGrid from "@/components/ui/GlassmorphicGrid";

// Import des images
import nonnzytr from "../assets/nonnzy.png";
import awarness from "../assets/FLOWAWARNESS.png";
import NN from "../assets/NN.png";

// Import d’icônes depuis react-icons
import { FaReact, FaLightbulb, FaRocket } from "react-icons/fa";

const Blog = () => {
  // ✅ Objets pour alimenter le grid
  const items = [
    {
      src: nonnzytr,
      alt: "Le sens de l'audace",
      title: "NonnzytransformiumMentra",
      subtitle: "Ainsi soit il ",
      signature: "Nonnzytransformiummantra",
      icon: <FaRocket />,
    },
    {
      src: awarness,
      alt: "Nonnzy",
      title: "Logique metier",
      subtitle: "Chaque détail compte",
      signature: "Flow Awarness",
      icon: <FaLightbulb />,
    },
    {
      src: NN,
      alt: "La culture de l'innovation",
      title: "Innovation",
      subtitle: "Awarness",
      signature: "ReactNatveOnfreedomtofail ",
      icon: <FaReact />,
    },
  ];

  return (
    <div className="px-6 sm:px-12 flex flex-col items-center justify-start min-h-screen text-center bg-black text-white">
      {/* TITRE GRADIENT */}
      <h1 className="mb-8">
        <GradientText
          text="Bienvenue sur mon blog"
          gradient={["#888", "#222", "#444"]}
          duration={7}
          fontSize="3rem"
        />
      </h1>

      {/* TEXTE INTRODUCTIF */}
      <p className="text-lg sm:text-xl mb-12 max-w-3xl">
        Découvre mes cartes illustrant mes valeurs et mes projets. La grille est totalement
        responsive et chaque carte garde une largeur minimale de 270px.
      </p>

      {/* GRID GLASSMORPHIC */}
      <GlassmorphicGrid items={items} />

      {/* TEXTE / FUTUR COMPOSANT */}
      <section className="w-full p-16 flex flex-col items-center text-center">
        <div className="bg-gray-800/40 text-white rounded-xl p-6 text-center max-w-2xl w-full shadow-lg backdrop-blur-md">
          Ici pourra être ton prochain composant, centré et responsive.
        </div>
      </section>
    </div>
  );
};

export default Blog;
