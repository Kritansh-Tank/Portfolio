"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const coderGif =
  "https://raw.githubusercontent.com/Kritansh-Tank/Portfolio/main/public/coder.gif";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-x-hidden">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 relative">
          <Image src={coderGif} alt="Coder" fill className="object-contain" unoptimized />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-2/3 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center pb-8 z-10 mt-10">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex flex-wrap gap-3 sm:gap-4">
            <Link href="/builds">
              <button className="p-4 rounded-lg bg-black text-white">
                View My Work
              </button>
            </Link>
            <a href="/Portfolio/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="p-4 rounded-lg ring-1 ring-black bg-transparent text-black">
                Resume
              </button>
            </a>
            <a href="/Portfolio/transcript.pdf" target="_blank" rel="noopener noreferrer">
              <button className="p-4 rounded-lg bg-white text-black">
                Bachelor&apos;s Transcript
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
