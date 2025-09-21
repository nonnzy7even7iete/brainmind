import React from "react";
import { FaJs, FaNodeJs, FaBrain, FaDesktop } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiPrisma, SiPostgresql, SiTailwindcss } from "react-icons/si";

const stackItems = [
  { icon: <FaJs className="text-yellow-400 text-xl" />, label: "JavaScript", href: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
  { icon: <SiNextdotjs className="text-white text-xl" />, label: "Next.js", href: "https://nextjs.org/docs" },
  { icon: <FaNodeJs className="text-green-500 text-xl" />, label: "Node.js", href: "https://nodejs.org/en/docs/" },
  { icon: <SiMongodb className="text-green-400 text-xl" />, label: "MongoDB", href: "https://www.mongodb.com/docs/" },
  { icon: <SiPrisma className="text-blue-400 text-xl" />, label: "Prisma", href: "https://www.prisma.io/docs" },
  { icon: <SiPostgresql className="text-blue-600 text-xl" />, label: "PostgreSQL", href: "https://www.postgresql.org/docs/" },
  { icon: <SiTailwindcss className="text-teal-400 text-xl" />, label: "Tailwind CSS", href: "https://tailwindcss.com/docs" },
  { icon: <FaBrain className="text-gray-400 text-xl" />, label: "Logique Métier", href: "#" },
  { icon: <FaDesktop className="text-blue-400 text-xl" />, label: "Logique Serveur", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d] text-white py-10 px-6 flex flex-col items-center gap-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="glass-box px-6 py-4 text-center md:text-left">
          <p className="text-sm opacity-70">&copy; Nonnzy Transformium 2025</p>
          <p className="text-sm opacity-70">Abidjan, Côte d'Ivoire</p>
          <p className="text-sm opacity-70">  Anyaman, Diane Shaka Junior - Développeur Fullstack JavaScript
          </p>
        </div>

        <div className="glass-box px-6 py-4 flex flex-wrap gap-4 justify-center md:justify-end">
          {stackItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 glass-box-hover transition"
            >
              {item.icon}
              <span className="text-sm opacity-80">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="text-xs opacity-50 text-center">
        Designed with © Nonnzy Transformium 2025 by Diane Shaka Junior
      </div>

      <style jsx>{`
        .glass-box {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(14px);
          border-radius: 16px;
        }

        .glass-box-hover:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
