import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, image, tech, github, live }) => {
  const hasGithub = github && github !== "#";
  const hasLive = live && live !== "#";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full"
    >
      {/* Image */}
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

        <p className="text-gray-400 text-sm mb-5 flex-grow">
          {description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-4">
          <a
            href={hasGithub ? github : undefined}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition
              ${
                hasGithub
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-800/40 text-gray-500 cursor-not-allowed"
              }`}
          >
            <FaGithub /> Code
          </a>

          <a
            href={hasLive ? live : undefined}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition
              ${
                hasLive
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-purple-600/40 text-gray-300 cursor-not-allowed"
              }`}
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;