import React from "react";
import GradientText from "@/components/ui/GradientText";
import GlassmorphicGrid from "@/components/ui/GlassmorphicGrid";
import nonnzytr from "../assets/nonnzy.png";
import awarness from "../assets/FLOWAWARNESS.png";
import NN from "../assets/NN.png";


const Blog = () => {
  // Exemple d’images pour le grid
const images = [
  { src: nonnzytr, alt: "Le sens de l audace " },
  { src: awarness, alt: "Le culte de la qualite " },
  { src: NN, alt: "La culture de l innovation" },
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
        Ici tu peux écrire ton contenu. Ce texte est normal, mais le titre au-dessus a un joli
        gradient animé ! Tous les éléments sont centrés et responsive.
      </p>

      {/* GRID GLASSMORPHIC */}
      <GlassmorphicGrid items={images} />

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
