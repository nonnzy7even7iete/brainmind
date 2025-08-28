"use client";

import React from "react";
import GradientText from "@/components/ui/GradientText";
import GlassmorphicGrid from "@/components/ui/GlassmorphicGrid";

// Import des images
import nonnzytr from "../assets/nonnzy.png";
import awarness from "../assets/FLOWAWARNESS.png";
import NN from "../assets/NN.png";

// Import d’icônes
import { Brain } from "lucide-react";   // <-- correction ici
import { FaReact, FaLightbulb } from "react-icons/fa";

const Blog = () => {
  // ✅ Objets pour alimenter le grid
  const items = [
    {
      src: nonnzytr,
      alt: "Le sens de l'audace",
      title: "NonnzytransformiumMentra",
      subtitle: "Ainsi soit il",
      signature: "Nonnzytransformiummantra",
      icon: <Brain size={32} />,   // <-- correction ici
    },
    {
      src: awarness,
      alt: "Nonnzy",
      title: "Logique metier",
      subtitle: "Chaque détail compte",
      signature: "Flow Awarness",
      icon: <FaLightbulb size={32} />,
    },
    {
      src: NN,
      alt: "La culture de l'innovation",
      title: "Innovation",
      subtitle: "Awarness",
      signature: "ReactNatveOnfreedomtofail",
      icon: <FaReact size={32} />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 sm:px-12 flex flex-col items-center text-center pt-24">
      {/* TITRE GRADIENT */}
      <header className="mb-12">
        <h1>
          <GradientText
            text="Bienvenue sur mon blog"
            gradient={["#888", "#222", "#444"]}
            duration={7}
            fontSize="3rem"
          />
        </h1>
        <p className="text-lg sm:text-xl mt-6 max-w-3xl mx-auto">
          Découvre mes cartes illustrant mes valeurs et mes projets. La grille est totalement
          responsive et chaque carte garde une largeur minimale de 270px.
        </p>
      </header>

      {/* GRID GLASSMORPHIC */}
      <section className="w-full mb-16">
        <GlassmorphicGrid items={items} />
      </section>

      {/* TEXTE / FUTUR COMPOSANT */}
      <section className="w-full px-6 sm:px-12 pb-24 flex flex-col items-center text-center">
        <div className="bg-gray-800/40 text-white rounded-xl p-8 sm:p-10 max-w-2xl w-full shadow-lg backdrop-blur-md">
          Ici pourra être ton prochain composant, centré et responsive.
        </div>
      </section>
    </div>
  );
};

export default Blog;
