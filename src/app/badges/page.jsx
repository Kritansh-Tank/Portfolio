"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import CloudCamp4SMEs from "../../../public/CloudCamp4SMEs.jpg";
import Gemini_Certified_Educator from "../../../public/Gemini_Certified_Educator.jpeg";
import GitHub_Foundations from "../../../public/GitHub_Foundations.jpeg";
import Google_AI_Essentials from "../../../public/Google_AI_Essentials.jpeg";
import Accenture_Developer from "../../../public/Accenture_Developer.jpg";
import Accenture_Consultant from "../../../public/Accenture_Consultant.jpg";
import Google_Cybersecurity_Professional_Certificate from "../../../public/Google_Cybersecurity_Professional_Certificate.jpeg";
import Cybersecurity_Essentials from "../../../public/Cybersecurity_Essentials.jpeg";

const items = [
  {
    id: 1,
    desc: "EU CloudCamp4SMEs SMEs Employees Certification",
    org: "CloudCamp4SMEs",
    img: CloudCamp4SMEs,
  },
  {
    id: 2,
    desc: "Gemini Certified Educator",
    org: "Google for Education",
    img: Gemini_Certified_Educator,
  },
  {
    id: 3,
    desc: "GitHub Foundations",
    org: "GitHub",
    img: GitHub_Foundations,
  },
  {
    id: 4,
    desc: "Google AI Essentials V1",
    org: "Coursera",
    img: Google_AI_Essentials,
  },
  {
    id: 5,
    desc: "Accenture Developer Job Simulation",
    org: "Forage",
    img: Accenture_Developer,
  },
  {
    id: 6,
    desc: "Accenture Consultant Job Simulation",
    org: "Forage",
    img: Accenture_Consultant,
  },
  {
    id: 7,
    desc: "Google Cybersecurity Professional Certificate V2",
    org: "Coursera",
    img: Google_Cybersecurity_Professional_Certificate,
  },
  {
    id: 8,
    desc: "Cybersecurity Essentials",
    org: "Cisco Networking Academy",
    img: Cybersecurity_Essentials,
  },
];

const CertificationsPage = () => {
  // Duplicate items for seamless infinite loop
  const duplicatedItems = [...items, ...items];
  const marqueeRef = useRef();
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      // Measure half the total scrollWidth (= width of the original 8 items + gaps)
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center justify-center overflow-hidden">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4 mb-12 md:mb-16"
        >
          Industry Recognized Certifications
        </motion.h1>

        {/* MARQUEE CAROUSEL */}
        <div className="w-full overflow-hidden">
          <motion.div
            ref={marqueeRef}
            className="flex gap-6 sm:gap-8"
            animate={marqueeWidth ? { x: [0, -marqueeWidth] } : {}}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* CERT IMAGE */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64">
                    <Image
                      src={item.img}
                      alt={item.desc}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                  {/* CERT INFO */}
                  <div className="p-4">
                    <p className="text-sm sm:text-base font-semibold line-clamp-2">
                      {item.desc}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {item.org}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationsPage;
