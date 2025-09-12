import React from "react";
import { BinaryRain } from "@/components/ui/BinaryRain";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";

export default function About() {
  return (
    <div className="relative w-screen min-h-screen bg-black overflow-visible">
      <BinaryRain />

      <div className="relative z-20 flex flex-col items-center justify-start gap-6 px-4 md:px-10 pt-28 pb-10">
        {/* GradientText avec marge depuis le header */}
        <GradientText
          text="Nonnzy transformium"
          className="text-5xl md:text-6xl text-center"
        />

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <GlassCard
            title="Le prix a payer "
            text=" L’excellence, consiste a voir l’âme et le corps en vecteur vers le motif de l engagement , Il ne sert à rien de désirer si l on  n’est pas prêt à en payer le prix"
          />

          <GlassCard
            title="Protocole"
            text="La victoire réside dans le processus "
          />
          <GlassCard
            title="Mindset"
            text="La transition du chaos a la structure ! commencera par la reconnaissance du potentiel enfouie au trefond de soi , mais surtout des opportunités a saisir a portée des facultées propre a soi meme   "
          />
        </div>
      </div>
    </div>
  );
}
