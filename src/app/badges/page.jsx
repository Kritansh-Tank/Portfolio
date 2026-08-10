"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Azure_AI_Apps_and_Agents_Developer_Associate from "../../../public/Azure_AI_Apps_and_Agents_Developer_Associate.png";
import Copado_Certified from "../../../public/Copado_Certified.png";
import McKinsey_Forward from "../../../public/McKinsey_Forward.png";
import Gemini_Certified_Educator from "../../../public/Gemini_Certified_Educator.png";
import CloudCamp4SMEs from "../../../public/CloudCamp4SMEs.jpg";
import GitHub_Foundations from "../../../public/GitHub_Foundations.png";
import Google_AI_Essentials from "../../../public/Google_AI_Essentials.png";
import Google_Cybersecurity_Professional_Certificate from "../../../public/Google_Cybersecurity_Professional_Certificate.png";
import Cisco_Cybersecurity_Essentials from "../../../public/Cisco_Cybersecurity_Essentials.png";
import Java_Training from "../../../public/Java_Training.jpeg";
import JavaScript_Training from "../../../public/JavaScript_Training.jpeg";
import Linux_Training from "../../../public/Linux_Training.jpeg";
import BASH_Training from "../../../public/BASH_Training.jpeg";
import LaTeX_Training from "../../../public/LaTeX_Training.jpeg";
import GSSoC_Badge from "../../../public/gssoc-badge-role_contributor.png";

const certItems = [
  {
    id: 1,
    desc: "Azure AI Apps and Agents Developer",
    org: "Microsoft",
    img: Azure_AI_Apps_and_Agents_Developer_Associate,
  },
  {
    id: 2,
    desc: "Copado Certified – Copado AI",
    org: "Copado",
    img: Copado_Certified,
  },
  {
    id: 3,
    desc: "McKinsey.org Forward Program",
    org: "McKinsey.org",
    img: McKinsey_Forward,
  },
  {
    id: 4,
    desc: "Gemini Certified Educator",
    org: "Google for Education",
    img: Gemini_Certified_Educator,
  },
  {
    id: 5,
    desc: "EU CloudCamp4SMEs SMEs Employees",
    org: "CloudCamp4SMEs",
    img: CloudCamp4SMEs,
  },
  {
    id: 6,
    desc: "GitHub Foundations",
    org: "GitHub",
    img: GitHub_Foundations,
  },
  {
    id: 7,
    desc: "AI Essentials",
    org: "Google x Coursera",
    img: Google_AI_Essentials,
  },
  {
    id: 8,
    desc: "Cybersecurity Professional Certificate",
    org: "Google x Coursera",
    img: Google_Cybersecurity_Professional_Certificate,
  },
  {
    id: 9,
    desc: "Cybersecurity Essentials",
    org: "Cisco Networking Academy",
    img: Cisco_Cybersecurity_Essentials,
  },
];

const trainingItems = [
  {
    id: 1,
    desc: "Java Training",
    org: "Spoken Tutorial Project, IIT Bombay",
    img: Java_Training,
  },
  {
    id: 2,
    desc: "JavaScript Training",
    org: "Spoken Tutorial Project, IIT Bombay",
    img: JavaScript_Training,
  },
  {
    id: 3,
    desc: "Linux Training",
    org: "Spoken Tutorial Project, IIT Bombay",
    img: Linux_Training,
  },
  {
    id: 4,
    desc: "BASH Training",
    org: "Spoken Tutorial Project, IIT Bombay",
    img: BASH_Training,
  },
  {
    id: 5,
    desc: "LaTeX Training",
    org: "Spoken Tutorial Project, IIT Bombay",
    img: LaTeX_Training,
  },
];

const openSourceItems = [
  {
    id: 1,
    program: "GirlScript Summer of Code 2026",
    role: "Contributor",
    org: "GS Labs by GirlScript Foundation",
    desc: "Selected as a contributor in GSSoC 2026, an open-source program that helps beginners get started with open source development and contribute to real-world projects.",
    badge: GSSoC_Badge,
    link: "https://github.com/Kritansh-Tank",
  },
];

const tabs = [
  { id: "certs", label: "Industry Certifications" },
  { id: "training", label: "Training Certificates" },
  { id: "opensource", label: "Open Source" },
];

const Marquee = ({ items }) => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const duplicated = [...items, ...items];

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={ref}
        className="flex gap-6 sm:gap-8"
        animate={width ? { x: [0, -width] } : {}}
        transition={{
          x: { duration: 30, repeat: Infinity, ease: "linear" },
        }}
      >
        {duplicated.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-40 sm:h-44 md:h-48">
                <Image
                  src={item.img}
                  alt={item.desc}
                  fill
                  className="object-contain p-3"
                />
              </div>
              <div className="p-3">
                <p className="text-xs sm:text-sm font-semibold line-clamp-2">
                  {item.desc}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.org}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const CertificationsPage = () => {
  const [activeTab, setActiveTab] = useState("certs");

  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* PAGE TITLE */}
      <div className="text-center pt-8 pb-4 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          My Credentials
        </motion.h1>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-2 px-4 pb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="activeTabBg"
                className="absolute inset-0 bg-black rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "certs" && (
            <motion.div
              key="certs"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Marquee items={certItems} />
            </motion.div>
          )}
          {activeTab === "training" && (
            <motion.div
              key="training"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Marquee items={trainingItems} />
            </motion.div>
          )}
          {activeTab === "opensource" && (
            <motion.div
              key="opensource"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center px-4"
            >
              {openSourceItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 max-w-2xl w-full"
                >
                  {/* BADGE IMAGE */}
                  <div className="relative flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44">
                    <Image
                      src={item.badge}
                      alt={item.program}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* DETAILS */}
                  <div className="flex flex-col gap-3 text-center sm:text-left">
                    <span className="inline-block self-center sm:self-start bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {item.role}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug">
                      {item.program}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      {item.org}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block self-center sm:self-start mt-1 px-5 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View GitHub →
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CertificationsPage;
