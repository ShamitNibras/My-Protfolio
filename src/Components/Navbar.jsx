import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Research", link: "#researchpaper" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur border-b border-slate-800">
      <div
        className="
          max-w-7xl mx-auto
          px-4 xs:px-5 sm:px-6
          py-2.5 xs:py-3 sm:py-4
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-none font-bold">
          <span
            className="
              text-white
              text-[0.95rem]
              xs:text-base
              sm:text-lg
              tracking-wide
            "
          >
            SHAMIT <span className="text-indigo-400">NIBRAS</span>
          </span>
          <span
            className="
              w-6 xs:w-7 sm:w-8
              h-[2px]
              bg-indigo-400
              mt-1
              rounded-full
            "
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="
                relative
                text-sm
                font-medium
                text-slate-300
                hover:text-indigo-400
                transition
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-indigo-400
                after:transition-all
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="
            md:hidden
            p-1.5 xs:p-2
            rounded-md
            text-slate-200
            hover:bg-slate-800
            focus:ring-2
            focus:ring-indigo-400
          "
        >
          <svg
            className="w-5 h-5 xs:w-6 xs:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="
                fixed top-0 left-0 h-full
                w-64 xs:w-72
                bg-[#0b1220]
                p-5 xs:p-6
                border-r border-slate-800
                text-white
              "
            >
              {/* Drawer Logo */}
              <div className="mb-8 font-bold text-base xs:text-lg">
                SHAMIT <span className="text-indigo-400">NIBRAS</span>
                <div className="w-8 h-[2px] bg-indigo-400 mt-2 rounded-full" />
              </div>

              {/* Links */}
              <ul className="space-y-2">
                {links.map((item, i) => (
                  <li key={item.name}>
                    <a
                      ref={i === 0 ? firstLinkRef : null}
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="
                        block
                        px-3
                        py-2
                        text-[0.95rem]
                        xs:text-base
                        font-medium
                        rounded-md
                        text-slate-300
                        hover:text-indigo-400
                        hover:bg-indigo-400/10
                        transition
                        focus:ring-2
                        focus:ring-indigo-400
                      "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}