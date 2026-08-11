"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
const BASE =
  "https://raw.githubusercontent.com/Kritansh-Tank/Portfolio/main/public";
const indiaFlag = `${BASE}/india.png`;
const germanyFlag = `${BASE}/germany.png`;
const KDEM = `${BASE}/KDEM.jpg`;
const vc888 = `${BASE}/888vc.jpg`;
const CampX = `${BASE}/CampX.jpg`;
const Bosch = `${BASE}/Bosch.jpg`;
const Micelio = `${BASE}/Micelio.jpg`;
const MBRDI = `${BASE}/MBRDI.jpg`;

const days = [
  {
    day: "Day 1",
    title: "Market Entry & Investment Insights",
    emoji: "💡",
    points: [
      "Kicked off at Karnataka Digital Economy Mission (KDEM) to understand Karnataka's thriving tech policy and \"Beyond Bengaluru\" strategy.",
      "Gained critical perspective on India's investment landscape from 888vc, resulting in immediate investor follow-ups for our delegation!",
    ],
  },
  {
    day: "Day 2",
    title: "Bengaluru Tech Summit 2025",
    emoji: "🤝",
    points: [
      "Dived into the flagship summit, experiencing the collision of culture and technology, and connecting globally with other delegations.",
    ],
  },
  {
    day: "Day 3",
    title: "Corporate Innovation & Community",
    emoji: "🏗️",
    points: [
      "Explored Volvo Group's CampX open innovation platform, learning about paid Proof-of-Value projects in electrification and circularity.",
      "Pitched at the GetLinked Community Mixer, confirming the pattern: Berlin founders bring the tech, Bangalore brings the openness to build together.",
    ],
  },
  {
    day: "Day 4",
    title: "Ecosystem Depth",
    emoji: "🔋",
    points: [
      "Connected with Bosch on open innovation and the nuances of working with German industrial players in India.",
      "Toured Micelio Mobility's impressive EV testing and R&D facility, gaining clarity on India's clean mobility market entry.",
    ],
  },
  {
    day: "Day 5",
    title: "The Global R&D Engine",
    emoji: "🌐",
    points: [
      "Closed the week at Mercedes-Benz Research and Development India, highlighting India's central role in their global innovation and sustainability work.",
    ],
  },
];

const items = [
  {
    id: 1,
    img: KDEM,
  },
  {
    id: 2,
    img: vc888,
  },
  {
    id: 3,
    img: CampX,
  },
  {
    id: 4,
    img: Bosch,
  },
  {
    id: 5,
    img: Micelio,
  },
  {
    id: 6,
    img: MBRDI,
  },
];

const ExposurePage = () => {
  const headerRef = useRef();
  const isHeaderInView = useInView(headerRef, { margin: "-100px" });

  const timelineRef = useRef();
  const isTimelineInView = useInView(timelineRef, { margin: "-100px" });

  const carouselRef = useRef();
  const isCarouselInView = useInView(carouselRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll overflow-x-hidden">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-16 md:gap-24">
          {/* HEADER SECTION */}
          <div
            className="flex flex-col gap-6 justify-center"
            ref={headerRef}
          >
            <motion.div
              initial={{ x: "-300px" }}
              animate={isHeaderInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {/* FLAGS */}
              <div className="flex gap-3 items-center mb-2">
                <Image src={indiaFlag} alt="India Flag" width={48} height={32} className="w-10 h-7 sm:w-12 sm:h-8 object-cover rounded shadow" />
                <Image src={germanyFlag} alt="Germany Flag" width={48} height={32} className="w-10 h-7 sm:w-12 sm:h-8 object-cover rounded shadow" />
              </div>
              {/* TITLE */}
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                GLOBAL EXPOSURE & DELEGATIONS
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isHeaderInView ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {/* SUBTITLE */}
              <div className="w-fit bg-white p-3 font-semibold rounded-lg text-sm sm:text-base">
                ClimateX GoGlobal Delegation – Bengaluru (Germany–India)
              </div>
              <div className="mt-2 text-red-400 text-sm font-semibold p-3">
                Visitor | 2025
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg leading-relaxed"
            >
              I had the immense pleasure of joining the ClimateX GoGlobal
              delegation to Bengaluru, immersing myself in one of the
              world&apos;s most dynamic tech ecosystems. Five days packed with
              high-value meetings, deep dives into innovation, and the start
              of crucial cross-border partnerships.
            </motion.p>
          </div>

          {/* TIMELINE SECTION */}
          <div
            className="flex flex-col gap-8"
            ref={timelineRef}
          >
            <motion.h2
              initial={{ x: "-300px" }}
              animate={isTimelineInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-xl sm:text-2xl"
            >
              THE WEEK AT A GLANCE
            </motion.h2>

            {/* TIMELINE ITEMS */}
            <div className="">
              {days.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* IMAGE CAROUSEL SECTION */}
          <div ref={carouselRef}>
            <motion.h2
              initial={{ x: "-300px" }}
              animate={isCarouselInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-xl sm:text-2xl mb-8"
            >
              HIGHLIGHTS
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isCarouselInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <ImageCarousel images={items} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ item, index }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div className="flex justify-between h-auto min-h-[12rem]" ref={ref}>
      {/* LEFT */}
      <div className={`w-5/12 ${isLeft ? "" : "hidden sm:block"}`}>
        {isLeft && (
          <motion.div
            initial={{ x: "-100px", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-sm sm:text-base">
              <span className="text-lg sm:text-xl">{item.emoji}</span>{" "}
              {item.day}: {item.title}
            </div>
            <ul className="p-3 text-xs sm:text-sm list-disc list-inside space-y-2">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      {/* CENTER LINE */}
      <div className="w-1/6 sm:w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-white -left-2"></div>
        </div>
      </div>

      {/* RIGHT */}
      <div className={`w-5/12 ${!isLeft ? "hidden sm:block" : "hidden sm:block"}`}>
        {!isLeft && (
          <motion.div
            initial={{ x: "100px", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-tr-lg rounded-tl-none text-sm sm:text-base">
              <span className="text-lg sm:text-xl">{item.emoji}</span>{" "}
              {item.day}: {item.title}
            </div>
            <ul className="p-3 text-xs sm:text-sm list-disc list-inside space-y-2">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      {/* MOBILE: Full width below center line for right-side items */}
      {!isLeft && (
        <div className="sm:hidden w-5/12">
          <motion.div
            initial={{ x: "100px", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-tr-lg rounded-tl-none text-sm">
              <span className="text-lg">{item.emoji}</span>{" "}
              {item.day}: {item.title}
            </div>
            <ul className="p-3 text-xs list-disc list-inside space-y-2">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="flex flex-col items-center gap-4 pb-16">
      {/* IMAGE DISPLAY */}
      <div className="relative w-full max-w-[600px] h-56 sm:h-64 md:h-80 lg:h-[400px] overflow-hidden rounded-xl bg-white shadow-lg">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[current].img}
              alt={`Slide ${current + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center text-lg transition-colors"
        >
          ‹
        </button>
        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center text-lg transition-colors"
        >
          ›
        </button>
      </div>

      {/* DOT INDICATORS */}
      <div className="flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${index === current ? "bg-black" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExposurePage;
