import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 🔹 React Icons
import { ImBlog } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuBrain } from "react-icons/lu";
import { FiMoon, FiSun } from "react-icons/fi";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false); 
  const [dark, setDark] = useState(false); 

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  const buttonStyle = `
    rounded-full p-2 transition-colors duration-500
    bg-gray-400/10 dark:bg-gray-800/40  /* 🔹 soft et transparent */
    border border-gray-300/30 dark:border-gray-600/40
    backdrop-blur-xl
    hover:bg-gray-400/20 dark:hover:bg-gray-700/50
  `;

  const linkStyle = `
    flex items-center gap-2 text-white dark:text-gray-200
    transition-all duration-300 transform hover:scale-105 hover:font-semibold
    hover:text-white-400
  `;

  const linkStyleMobile = `
    flex items-center gap-3 text-white dark:text-white
    transition-all duration-300 transform hover:scale-105 hover:font-semibold
    hover:text-white-400
  `;

  return (
    <>
      {/* NAVBAR PRINCIPALE */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[90vw] z-50
                   bg-gray-500/30 dark:bg-gray-900/30 backdrop-blur-2xl
                   border border-gray-400/40 dark:border-gray-700/40
                   rounded-full transition-colors duration-500 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-bold text-white dark:text-white transition-colors duration-500"
          >
            BrainMind{" "}
          </Link>

          {/* LIENS VERSION DESKTOP */}
          <div className="hidden md:flex flex-1 justify-between items-center ml-10">
            <Link to="/blog" className={linkStyle}>
              <ImBlog size={18} /> Blog
            </Link>
            <Link to="/about" className={linkStyle}>
              <AiOutlineInfoCircle size={18} /> À propos
            </Link>
            <Link to="/brindmind" className={linkStyle}>
              <LuBrain size={18} /> Brind Mind
            </Link>

            {/* BOUTON DARK/LIGHT MODE (desktop) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={buttonStyle + " ml-6"}
            >
              {dark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-white" />}
            </Button>
          </div>

          {/* TOGGLE MENU MOBILE */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(!open)}
              className={buttonStyle + " p-4 text-3xl"} // 🔹 bouton menu plus grand
            >
              <CgMenuRightAlt className="text-white" />
            </Button>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}
                    bg-gray-500/30 dark:bg-black/30 backdrop-blur-2xl`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-10 text-2xl font-semibold px-6 relative">
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className={linkStyleMobile}
          >
            <ImBlog size={28} /> Blog
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className={linkStyleMobile}
          >
            <AiOutlineInfoCircle size={28} /> À propos
          </Link>
          <Link
            to="/brindmind"
            onClick={() => setOpen(false)}
            className={linkStyleMobile}
          >
            <LuBrain size={28} /> Brind Mind
          </Link>

          {/* BOUTON DARK/LIGHT MODE (mobile) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={buttonStyle + " mt-10"}
          >
            {dark ? <FiSun className="text-yellow-400" size={24} /> : <FiMoon className="text-white" size={24} />}
          </Button>

          {/* BOUTON "FERMER" MOBILE */}
          <div className="absolute bottom-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className={buttonStyle + " p-4"}
            >
              <CgClose className="text-white" size={22} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
