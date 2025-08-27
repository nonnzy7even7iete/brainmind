import React from "react";

const GradientText = ({ text, className = "text-4xl font-bold", children }) => {
  return (
    <span
      className={`relative bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, #374151 0%, #9ca3af 30%, #f3f4f6 50%, #9ca3af 70%, #374151 100%)',
        backgroundSize: '200% 100%',
        animation: 'shine 7s ease-in-out infinite'
      }}
    >
      <style jsx>{`
        @keyframes shine {
          0% { background-position: -100% 0; }
          50% { background-position: 100% 7%; }
          100% { background-position: -100% 0; }
        }
        
        .animate-shine {
          animation: shine 4s ease-in-out infinite;
        }
        
        .animate-shine:hover {
          animation: shine 7s ease-in-out infinite;
        }
      `}</style>
      {children || text}
    </span>
  );
}

export default GradientText;
