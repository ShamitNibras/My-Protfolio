// src/components/About.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FaLaptopCode, FaNetworkWired, FaTools } from "react-icons/fa";

// Card Info
const aboutInfo = [
  {
    icon: FaNetworkWired,
    title: "Network Architecture",
    description:
      "Designing scalable, resilient, and high-performance infrastructures.",
  },
  {
    icon: FaLaptopCode,
    title: "System Engineering",
    description:
      "Deploying optimized enterprise environments with reliability focus.",
  },
  {
    icon: FaTools,
    title: "Infrastructure Support",
    description:
      "Ensuring operational continuity through proactive monitoring.",
  },
];

// Motion Variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Tech Mesh Background
const TechMesh = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let nodes = [];
    const NODE_COUNT = 35;

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.5)";
        ctx.fill();

        nodes.forEach((o) => {
          const dx = n.x - o.x;
          const dy = n.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,255,255,${0.12 * (140 - dist) / 140})`;
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        });

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-[#0c1118] overflow-hidden"
    >
      <TechMesh />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-400">
            About <span className="text-violet-400">Me</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Get to know my background, skills, and professional journey.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="p-[2px] rounded-3xl bg-gradient-to-br from-cyan-500/40 to-violet-500/40">
              <div className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-cyan-500/20">
                <img
                  src={assets.profileImg2}
                  alt="Profile"
                  className="object-cover w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Journey */}
            <motion.div
              variants={fadeIn}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-500/20"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                My Journey
              </h3>
             <p className="text-[#a0aec0] mb-2 leading-relaxed"> I’m an Assistant System Engineer with over two years of hands-on experience managing and troubleshooting complex technical environments. </p> <p className="text-[#a0aec0] leading-relaxed"> I specialize in network configuration, hardware support, and software management in fast-paced operational environments. </p>
            </motion.div>

            {/* Skill Cards */}
            <div className="space-y-3">
              {aboutInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-500/20 hover:bg-white/10 transition"
                >
                  <div className="text-cyan-400 text-xl mt-1">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-cyan-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;