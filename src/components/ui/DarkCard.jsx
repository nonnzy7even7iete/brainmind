import React from 'react';
import { motion } from 'framer-motion';

export default function DarkCard({
  image,
  alt = 'image',
  title = '',
  description = '',
  imgShadow = '0 10px 30px rgba(0,0,0,0.6)',
  className = '',
}) {
  const size = 317;

  return (
    <motion.article
      initial={{ opacity: 0.96 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`relative rounded-2xl overflow-hidden shadow-lg ${className}`}
      style={{
        width: size,
        height: size,
        color: 'white',
      }}
      aria-label= {title ? `${title} — carte` : 'carte dark'}
      role="region"
    >
      {/* Image de fond */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          filter: 'brightness(0.45) blur(2px)', // assombrit légèrement + flou général
        }}
        aria-hidden="true"
      />

      {/* Brume sur les côtés */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Contenu texte */}
      <div className="relative z-10 flex flex-col justify-end h-full p-4">
        {title && <h3 className="text-white text-lg font-bold mb-1">{title}</h3>}
        {description && <p className="text-white/70 text-sm leading-snug">{description}</p>}
      </div>

      {/* Optionnel : petit badge */}
      <div className="absolute bottom-3 right-3 z-10">
        <span className="inline-block px-2 py-0.5 text-[11px] bg-white/10 rounded-full text-white/60">Nonnzytransformiummantra</span>
      </div>
    </motion.article>
  );
}