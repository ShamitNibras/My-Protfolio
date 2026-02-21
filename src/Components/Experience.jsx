import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const experience = [
  {
    role: "Assistant System Engineer",
    company: "AmberIT Ltd",
    period: "Aug 2023 – Present",
    bannerPoints: [
      "MikroTik RouterOS & ISP Networking",
      "Monitoring & NMS",
      "Client Support",
    ],
    details: [
      "Configure & troubleshoot MikroTik routers (DHCP, Firewall, VPN, BGP).",
      "Monitor network performance using Zabbix & MRTG.",
      "Troubleshoot via ticketing & client communication.",
      "Maintain hardware (PCs, printers, projectors).",
      "Manage Office tools & user accounts.",
      "Provide helpdesk & remote support.",
    ],
  },
  {
    role: "Junior System Engineer",
    company: "Bold Studio",
    period: "Jan 2023 – Jul 2023",
    bannerPoints: ["Linux Servers", "Network Security", "Documentation"],
    details: [
      "Managed Linux server infrastructure.",
      "Provided hardware & software support.",
      "Assisted with firewall & IDS systems.",
      "Maintained SOP documentation.",
    ],
  },
  {
    role: "Data Management Analyst (Intern)",
    company: "Robi Axiata BD",
    period: "May 2022 – Sep 2022",
    bannerPoints: ["Python Automation", "Data Analysis", "BI Reporting"],
    details: [
      "Built automation scripts with Python & Selenium.",
      "Created data merging & reporting scripts.",
      "Analyzed data using Tableau.",
      "Conducted market analysis.",
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="py-14 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Professional <span className="text-indigo-400">Experience</span>
        </h2>

        <div className="space-y-4">
          {experience.map((exp, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className={`bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transition-all duration-300 ${
                  isOpen
                    ? "shadow-md shadow-indigo-400/30"
                    : "hover:shadow-sm hover:shadow-indigo-400/20"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-4"
                >
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      {exp.company} • {exp.period}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.bannerPoints.map((point, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] text-indigo-400 border border-indigo-400 rounded-full bg-white/10"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-indigo-400 text-lg mt-2 sm:mt-0"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-5 py-4 text-gray-200 text-xs border-t border-white/20 list-disc list-inside space-y-1"
                    >
                      {exp.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;