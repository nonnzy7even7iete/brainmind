import { Spotlight } from "@/components/ui/Spotlight";

export default function Blog() {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden -mx-6 -mt-20">
      {/* Grille de fond */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Composant Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Votre contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center pt-20">
        <h1 className="text-6xl lg:text-8xl font-bold mb-8 text-white">
          À propos
          <br />
          <span className="text-gray-400">de l'App</span>
        </h1>
        
        <p className="text-gray-400 text-lg lg:text-xl max-w-3xl">
          Votre description de l'application ici...
        </p>
      </div>
    </div>
  );
}