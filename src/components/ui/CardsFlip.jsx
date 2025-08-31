import React from "react";

/**
 * CardsFlip.jsx
 * Composant React + Tailwind (Vite) — 3 cartes glassmorphiques inclinées vers la droite.
 * Effet : au hover/focus chaque carte translate vers le haut comme si on feuilletait.
 *
 * Usage :
 *  - Placer ce fichier dans `src/components/CardsFlip.jsx`
 *  - Importer dans App.jsx : `import CardsFlip from './components/CardsFlip'`
 *  - Assurez-vous d'avoir Tailwind CSS configuré dans votre projet Vite.
 *
 * Notes :
 *  - Les degrés d'inclinaison (tilt) sont contrôlés par la constante `tilts`.
 *  - Les animations utilisent transform 3D (perspective) pour un rendu "feuilletage".
 */

export default function CardsFlip() {
  // Degrés d'inclinaison (vers la droite). Trois cartes : la première est la plus inclinée.
  const tilts = [8, 4, 0]; // en degrés

  // Contenu minimal pour chaque carte — ici on imagine des versets / titres du Qur'ân.
  const cards = [
    {
      id: 1,
      title: "Sourate Al-Fatiha",
      excerpt: "Bismillâh ir-Raḥmân ir-Raḥîm — Louange à Allah...",
    },
    {
      id: 2,
      title: "Sourate Al-Ikhlâs",
      excerpt: "Qul Huwa Allahu Ahad...",
    },
    {
      id: 3,
      title: "Sourate Al-Falaq",
      excerpt: "Qul a'ûdhu bi-Rabbil-falaq...",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center py-12">
      {/* Perspective parent pour permettre le 3D */}
      <div
        className="relative w-[320px] h-[420px]"
        style={{ perspective: 1200 }}
        aria-label="Feuilletage de cartes"
      >
        {/* Container qui capte le hover/focus pour un effet cohérent */}
        <div className="relative w-full h-full">
          {cards.map((card, idx) => {
            // Calcul d'offset horizontal et z-index pour empilement
            const leftOffset = idx * 12; // décalage horizontal entre les cartes
            const z = 30 - idx; // plus petit idx = plus haut dans l'empilement
            const tilt = tilts[idx] || 0;

            return (
              <article
                key={card.id}
                className={`absolute top-0 left-0 w-full h-full transform-gpu transition-transform duration-500 ease-[cubic-bezier(.2,.9,.2,1)] focus:outline-none`} 
                style={{
                  // positionnement + transformation initiale (inclinaison + décalage)
                  transform: `translateX(${leftOffset}px) rotate(${tilt}deg)`,
                  zIndex: z,
                }}
              >
                {/* Le bouton / carte elle-même */}
                <button
                  aria-label={`Ouvrir ${card.title}`}
                  className={
                    /* glassmorphique + bord + arrondis + ombre */
                    `w-full h-full rounded-2xl p-6 text-left backdrop-blur-md bg-white/8 border border-white/10 shadow-lg
                     hover:-translate-y-6 hover:scale-[1.01] focus:-translate-y-6 active:translate-y-0
                     transition-transform duration-400 ease-[cubic-bezier(.2,.9,.2,1)]
                     will-change-transform transform-gpu
                     flex flex-col justify-between
                     `
                  }
                  // Pour keyboard accessibility : focus déclenche même effet que hover
                  onFocus={(e) => e.currentTarget.classList.add("-translate-y-6")}
                  onBlur={(e) => e.currentTarget.classList.remove("-translate-y-6")}
                >
                  <header>
                    <h3 className="text-lg font-semibold leading-tight text-white drop-shadow-sm">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/85 line-clamp-3">{card.excerpt}</p>
                  </header>

                  <footer className="mt-4 flex items-center justify-between text-xs text-white/70">
                    <span>Qur'ân</span>
                    <span className="px-3 py-1 rounded-full bg-white/6 backdrop-blur-sm">Feuilleter</span>
                  </footer>
                </button>
              </article>
            );
          })}

          {/* Overlay décoratif de lumière en coin (optionnel) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-screen">
            <div className="absolute -left-8 -top-10 w-40 h-40 rounded-full opacity-20 blur-3xl bg-gradient-to-tr from-white/30 to-transparent" />
            <div className="absolute -right-8 -bottom-10 w-36 h-36 rounded-full opacity-12 blur-2xl bg-gradient-to-bl from-white/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Styles Tailwind additionnels si vous voulez contrôler plus finement les rotations au hover via CSS */}
      <style>{`
        /* Si vous souhaitez que les cartes "réagissent" les unes aux autres à l'hover, vous pouvez ajouter
           une règle CSS personnalisée : par exemple quand on survole la plus haute, décaler légèrement les
           autres. Comme Tailwind ne gère pas facilement ces sélecteurs d'empilement, on peut le faire ici. */

        /* Ex : lorsque l'utilisateur survole le conteneur, toutes les cartes se soulèvent un peu */
        .cards-container:hover article > button { transform: translateY(-1.15rem); }

        /* Note : ce petit bloc est optionnel — le principal effet se trouve dans les classes Tailwind inline. */
      `}</style>
    </section>
  );
}
