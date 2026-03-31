"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CloudCamp4SMEs from "../../../public/CloudCamp4SMEs.jpg";
import Gemini_Certified_Educator from "../../../public/Gemini_Certified_Educator.jpeg";
import GitHub_Foundations from "../../../public/GitHub_Foundations.jpeg";
import Google_AI_Essentials from "../../../public/Google_AI_Essentials.jpeg";
import Accenture_Developer from "../../../public/Accenture_Developer.jpg";
import Accenture_Consultant from "../../../public/Accenture_Consultant.jpg";
import Google_Cybersecurity_Professional_Certificate from "../../../public/Google_Cybersecurity_Professional_Certificate.jpeg";
import Cybersecurity_Essentials from "../../../public/Cybersecurity_Essentials.jpeg";
import cover from "../../../public/cover.png";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    desc: "EU CloudCamp4SMEs SMEs Employees Certification",
    org: "CloudCamp4SMEs",
    img: CloudCamp4SMEs,
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    desc: "Gemini Certified Educator",
    org: "Google for Education",
    img: Gemini_Certified_Educator,
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    desc: "GitHub Foundations",
    org: "GitHub",
    img: GitHub_Foundations,
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    desc: "Google AI Essentials V1",
    org: "Coursera",
    img: Google_AI_Essentials,
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    desc: "Accenture Developer Job Simulation",
    org: "Forage",
    img: Accenture_Developer,
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    desc: "Accenture Consultant Job Simulation",
    org: "Forage",
    img: Accenture_Consultant,
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    desc: "Google Cybersecurity Professional Certificate V2",
    org: "Coursera",
    img: Google_Cybersecurity_Professional_Certificate,
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    desc: "Cybersecurity Essentials",
    org: "Cisco Networking Academy",
    img: Cybersecurity_Essentials,
  },
  {
    id: 9,
    color: "from-red-300 to-blue-300",
    desc: "",
    img: cover,
  },
];

const CertificationsPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Industry Recognized Certifications
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="Image" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] font-bold">
                    {item.org}
                  </p>
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
