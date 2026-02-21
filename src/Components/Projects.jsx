import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Basic Portfolio Website",
    description:
      "Developed a portfolio prototype leveraging core HTML and CSS to validate layout structures and experiment with foundational front-end concepts.",
    image: "https://miro.medium.com/v2/0*SEdGTbPR8hfkTWR2.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ShamitNibras/Portfolio",
    live: "https://shamitnibras.github.io/Portfolio/",
  },
  {
    title: "My Portfolio Website",
    description:
      "Fully responsive animated portfolio built using React, Tailwind CSS and Framer Motion.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/ShamitNibras/My-Protfolio",
    live: "#",
  },
  {
    title: "AIUB Student Cafe",
    description:
      "A Student Café Management System developed in C# to manage menu items, orders, billing, and sales records.",
    image: "https://assets-cdn.sums.su/SH/Global_Images/CoffeeRevolution.jpg",
    tech: ["C#", "TSQL"],
    github:
      "https://github.com/ShamitNibras/Canteen-Managment-System/tree/main/AIUB_Student_Cafe",
    live: "#",
  },
  {
    title: "Nursing Management System",
    description:
      "Role-based Nursing Management System using PHP, JavaScript, and CSS for secure patient data handling.",
    image:
      "https://thumbs.dreamstime.com/b/beautiful-nurse-doctor-feels-happy-talking-supporting-elderly-male-nursing-home-beautiful-nurse-doctor-feels-happy-317654110.jpg",
    tech: ["PHP", "JavaScript", "CSS"],
    github: "https://github.com/ShamitNibras/Nursing-Managment-System",
    live: "https://shamitnibras.github.io/Nursing-Managment-System/",
  },
  {
    title: "Covid-19",
    description:
      "Graphical simulation modeling pandemic dynamics using charts and interactive visualizations.",
    image:
      "https://media.defense.gov/2020/Mar/09/2003062075/1200/1200/0/200309-D-HN545-003.JPG",
    tech: ["C++"],
    github:
      "https://github.com/ShamitNibras/Computer-Graphics/tree/main/Covid-19",
    live: "#",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="projects"
      className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          <span className="text-purple-500">My</span> Projects
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A showcase of selected projects highlighting technical skills,
          architecture design, and development expertise.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View More */}
        {!showAll && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-8 py-3 bg-purple-600 rounded-xl font-semibold text-white hover:bg-purple-700 transition shadow-lg"
            >
              View More Projects <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
