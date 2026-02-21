import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";

const skills = [
  {
    icon: FaNetworkWired,
    title: "Network Architecture",
    description:
      "Designing scalable, resilient, and high-performance infrastructures.",
    tags: ["Routing", "Switching", "MikroTik", "Firewall"],
  },
  {
    icon: FaLaptopCode,
    title: "Frontend Development",
    description:
      "Building responsive and modern UI using latest web technologies.",
    tags: ["React", "Tailwind", "JavaScript", "Framer Motion"],
  },
  {
    icon: FaTools,
    title: "System Administration",
    description:
      "Server setup, monitoring, troubleshooting and optimization.",
    tags: ["Linux", "Windows Server", "Backup", "Security"],
  },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-purple-500 mr-4" />
                <h3 className="text-xl font-semibold text-white">
                  {skill.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-4">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
