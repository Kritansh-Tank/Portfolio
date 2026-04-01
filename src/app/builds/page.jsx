"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import FoodOrder from "../../../public/FoodOrder.png";
import HireFlow from "../../../public/HireFlow.png";
import EcoTravel from "../../../public/EcoTravel.png";
import CrimeVision from "../../../public/CrimeVision.png";
import Product_Management_Store from "../../../public/Product_Management_Store.png";
import Disaster_Response_Coordination_Platform from "../../../public/Disaster_Response_Coordination_Platform.png";

const items = [
  {
    id: 1,
    title: "FoodOrder",
    desc: "A full-stack team food ordering app with Role-Based Access Control (RBAC) and country-based data isolation for secure, region-specific access.",
    img: FoodOrder,
    link: "https://github.com/Kritansh-Tank/Food-Ordering-Web-App",
  },
  {
    id: 2,
    title: "HireFlow",
    desc: "An autonomous web agent that monitors job boards, extracts listings, analyzes roles, and auto-fills application forms — powered by TinyFish Web Agent API.",
    img: HireFlow,
    link: "https://github.com/Kritansh-Tank/HireFlow",
  },
  {
    id: 3,
    title: "EcoTravel",
    desc: "It is an innovative web-based platform designed to help users plan sustainable travel experiences while minimizing their environmental impact.",
    img: EcoTravel,
    link: "https://github.com/Kritansh-Tank/EcoTravel",
  },
  {
    id: 4,
    title: "CrimeVision AI",
    desc: "AI-powered criminal detection system that analyzes CCTV and live feeds using GAN-based sketch conversion, face detection, and facial recognition for accurate suspect identification.",
    img: CrimeVision,
    link: "https://github.com/Kritansh-Tank/CrimeVision-AI",
  },
  {
    id: 5,
    title: "Product Management Store",
    desc: "A Laravel-based product management web application that allows users to add, edit, and delete products. Data is stored in a JSON file and all operations are performed via AJAX without page reloads.",
    img: Product_Management_Store,
    link: "https://github.com/Kritansh-Tank/Product-Management-Store",
  },
  {
    id: 6,
    title: "Disaster Response Coordination Platform",
    desc: "Backend-heavy MERN app for disaster response with real-time data, geospatial mapping, AI-based location extraction, image verification, and social media monitoring.",
    img: Disaster_Response_Coordination_Platform,
    link: "https://github.com/Kritansh-Tank/Disaster-Response-Coordination-Platform",
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
        {/* NOTE */}
        <div className="mt-8 p-4 sm:p-6 bg-white rounded-xl text-center">
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed italic">
            <span className="font-semibold not-italic">📌 Note:</span> Most of my projects are not hosted live.
            As someone who actively builds and experiments, I quickly hit the free-tier limits on platforms
            like Render, Vercel, and Netlify — and alternatives like Railway and Fly.io come with paid plans.
            All source code is available on GitHub for review. If you&apos;re a fellow developer or recruiter,
            I trust you understand! 🙂
          </p>
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
            See Source →
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
