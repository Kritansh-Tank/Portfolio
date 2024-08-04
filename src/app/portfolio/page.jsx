"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import img1 from "../../../public/1.png";
import img2 from "../../../public/2.png";
import img3 from "../../../public/3.png";
import img4 from "../../../public/4.png";
import img5 from "../../../public/5.png";
import img6 from "../../../public/6.jpg";
import img7 from "../../../public/7.png";
import img8 from "../../../public/cover.png";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Alkemy",
    desc: "Tech Stack used: React.js, Vite.js, Tailwind CSS, Netlify",
    img: img1,
    link: "https://t.ly/QJeHX",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Celebrating Life",
    desc: "Tech Stack used: HTML, CSS, Express.js, Node.js, Firebase, Netlify",
    img: img2,
    link: "https://t.ly/C1fgr",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Arogya",
    desc: "Tech Stack used: PHP, Laravel, JavaScript",
    img: img3,
    link: "https://t.ly/wuHDP",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Recommendation System",
    desc: "Tech Stack used: Python, Jupyter Notebook, Machine Learning (KNN Algorithm), Streamlit",
    img: img4,
    link: "https://t.ly/StXoZ",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Office System",
    desc: "Tech Stack used: Python, Django",
    img: img5,
    link: "https://t.ly/JC5NO",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Weather App",
    desc: "Tech Stack used: Java, XML (Android)",
    img: img6,
    link: "https://t.ly/H-bK0",
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "Uniconnect",
    desc: "Software used: Figma (Wireframing, Components)",
    img: img7,
    link: "https://t.ly/wuHDP",
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "",
    desc: "",
    img: img8,
    link: "",
  },
];

const PortfolioPage = () => {
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
          My Featured Works
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
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="Image" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Source</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact">
            <div className="w-14 h-14 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
              Ping Me
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
