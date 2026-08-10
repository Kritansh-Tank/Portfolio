"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import DataBoard from "../../../public/DataBoard.png";
import Vigil from "../../../public/Vigil.png";
import TransitOps from "../../../public/TransitOps.png";
import GreenTrace from "../../../public/GreenTrace.png";

const items = [
  {
    id: 1,
    title: "DataBoard",
    desc: "Full-stack data analytics platform that lets users upload CSV datasets, perform statistical analysis, explore interactive visualizations, and manage data through a secure cloud-deployed application.",
    img: DataBoard,
    link: "https://d2bnceyxxb14a6.cloudfront.net/",
  },
  {
    id: 2,
    title: "VIGIL",
    desc: "Real-time industrial safety intelligence platform that combines live IoT sensor data, work permits, shift context, and historical incidents to detect compound risks and generate AI-powered emergency response plans.",
    img: Vigil,
    link: "https://vigil-smoky.vercel.app/",
  },
  {
    id: 3,
    title: "TransitOps",
    desc: "Smart fleet management platform that streamlines vehicle and driver operations, AI-assisted trip dispatch, maintenance tracking, fuel analytics, reporting, and role-based access control.",
    img: TransitOps,
    link: "https://transitops-dusky.vercel.app/",
  },
  {
    id: 4,
    title: "GreenTrace",
    desc: "AI-powered carbon footprint reduction platform that analyzes personal emissions and uses a ReAct-based AI agent with specialized tools to generate personalized, actionable sustainability plans.",
    img: GreenTrace,
    link: "https://green-trace-topaz.vercel.app/",
  },
];

const PortfolioPage = () => {
  const titleRef = useRef();
  const isTitleInView = useInView(titleRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll overflow-x-hidden">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-16 md:gap-24">
          {/* PAGE TITLE */}
          <div ref={titleRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isTitleInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-4xl sm:text-5xl md:text-6xl"
            >
              MY FEATURED WORKS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isTitleInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-4 text-sm sm:text-base text-gray-600"
            >
              A collection of projects I&apos;ve built — from full-stack web apps to AI-powered systems.
            </motion.p>
          </div>

          {/* PROJECT CARDS */}
          <div className="flex flex-col gap-20 md:gap-28">
            {items.map((item, index) => (
              <ProjectCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="w-full py-24 flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">Do you have a project?</h2>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-48 h-48 md:w-[400px] md:h-[400px]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  tankkritansh088@gmail.com
                </textPath>
              </text>
            </motion.svg>
            <div className="w-14 h-14 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-sm md:text-base">
              Ping Me<br />at
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ item, index }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } gap-6 md:gap-10 items-center`}
    >
      {/* IMAGE */}
      <motion.div
        initial={{ x: isLeft ? "-150px" : "150px", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-1/2"
      >
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg bg-white">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-contain p-2"
          />
        </div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ x: isLeft ? "150px" : "-150px", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className={`w-full md:w-1/2 flex flex-col gap-4 ${isLeft ? "md:items-start" : "md:items-end md:text-right"
          }`}
      >
        <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
          {item.desc}
        </p>
        <Link href={item.link} target="_blank" rel="noopener noreferrer">
          <button className="mt-2 px-6 py-3 bg-black text-white rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">
            Live →
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
