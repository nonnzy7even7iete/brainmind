// Module GeometricLines exportable
function Home({ 
  color = "gray",
  opacity = 0.6,
  animate = false 
}) {
  const colorClasses = {
    gray: "bg-gray-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
    purple: "bg-purple-400",
    white: "bg-white"
  };

  const colorClass = colorClasses[color];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Deux lignes verticales à gauche - hauteur complète */}
      <div 
        className={`absolute left-8 top-0 bottom-0 w-px ${colorClass} ${animate ? 'animate-pulse' : ''}`}
        style={{ opacity }}
      ></div>
      <div 
        className={`absolute left-16 top-0 bottom-0 w-px ${colorClass} ${animate ? 'animate-pulse' : ''}`}
        style={{ opacity: opacity - 0.1 }}
      ></div>
      
      {/* Deux lignes verticales à droite - hauteur complète */}
      <div 
        className={`absolute right-8 top-0 bottom-0 w-px ${colorClass} ${animate ? 'animate-pulse' : ''}`}
        style={{ opacity }}
      ></div>
      <div 
        className={`absolute right-16 top-0 bottom-0 w-px ${colorClass} ${animate ? 'animate-pulse' : ''}`}
        style={{ opacity: opacity - 0.1 }}
      ></div>
      
      {/* Deux lignes horizontales séparées de minimum 27px */}
      <div 
        className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-7 w-60 h-px ${colorClass} ${animate ? 'animate-pulse' : ''}`}
        style={{ opacity }}
      ></div>
      <div 
        className={`absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-7 w-52 h-px ${colorClass} ${animate ? 'animate-pulse' : ''}`}
        style={{ opacity: opacity - 0.1 }}
      ></div>
    </div>
  );
}

// Export du module
export default Home;