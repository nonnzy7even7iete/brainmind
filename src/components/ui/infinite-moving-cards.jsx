"use client";

import React from "react";
import { cn } from "@components/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
  const animationDir = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      <div
        className={cn(
          "flex flex-nowrap gap-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDirection: animationDir,
          animationDuration: duration,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] sm:w-[270px] md:w-[300px] 
                       h-[180px] rounded-2xl 
                       bg-white/5 backdrop-blur-[20px] 
                       border border-white/20 shadow-lg
                       px-4 py-3"
          >
            <p className="text-sm text-white mb-2">{item.quote}</p>
            {item.name && <span className="text-xs text-white/70 block">{item.name}</span>}
            {item.logic && <span className="text-xs text-white/50 block mt-1">{item.logic}</span>}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-scroll {
          display: flex;
          animation: scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, normal);
        }
      `}</style>
    </div>
  );
};
export default InfiniteMovingCards;