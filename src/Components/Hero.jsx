// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-[85vh] flex items-center pt-24 pb-12 bg-[#0c1118] relative overflow-hidden text-[#cfd8dc]"
    >
      {/* Ambient Glow */}
      <div className="absolute -right-24 top-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-20 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-500/20 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi, I’m Shamit{" "}
            <span className="text-cyan-400">Nibras</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-400 mb-5">
            Systems Engineer
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-7 max-w-xl mx-auto md:mx-0">
            Experienced in ISP infrastructure, enterprise networking,
            automation, and technical support. Focused on uptime,
            scalability, and operational security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0a253f] rounded-md font-medium hover:bg-[#0b2a50] hover:shadow-[0_0_12px_#00ffff] transition"
            >
              <FiDownload />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-cyan-400/50 rounded-md font-medium hover:bg-[#0b1a2a] hover:border-cyan-400 hover:shadow-[0_0_10px_#00ffff] transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">

            {/* Depth Shadow Plate */}
            <div className="absolute -right-4 top-4 w-full h-full rounded-full bg-[#111827] opacity-70" />

            {/* Profile Image */}
            {assets.profileImg && (
              <motion.img
                src={assets.profileImg}
                alt="Shamit Nibras"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-full object-cover border border-cyan-400/30 shadow-[0_10px_25px_rgba(0,255,255,0.35)]"
              />
            )}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Hero;