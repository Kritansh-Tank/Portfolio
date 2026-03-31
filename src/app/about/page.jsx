"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import mine from "../../../public/mine.jpeg";
import universityLogo from "../../../public/university_logo.png";
import collegeLogo from "../../../public/college_logo.jpg";
import schoolLogo from "../../../public/school_logo.png";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

  const extraRef = useRef();
  const isExtraRefInView = useInView(extraRef, { margin: "-100px" });

  const languageRef = useRef();
  const isLanguageRefInView = useInView(languageRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src={mine}
              alt="Me"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">KRITANSH TANK</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I&#39;m a passionate web developer with a knack for crafting
              engaging and user-friendly digital experiences. I thrive on
              transforming ideas into interactive websites and applications that
              not only look great but also function seamlessly.
              <br />
              <br />
              I&#39;m always eager to learn and stay up-to-date with the latest
              trends and technologies. I believe that continuous improvement is
              key to delivering high-quality work that exceeds expectations.
              Let&#39;s connect and discuss how I can help you achieve your
              goals!
            </p>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MERN
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NestJS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Prisma ORM
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CRUD
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                OpenSearch
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Snowflake
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                n8n
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Zapier
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Pinecone
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Weaviate
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                FAISS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ChromaDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQLite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Django
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                FastAPI
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TensorFlow
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                OpenCV
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                LangChain
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                crewAI
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Celery
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                RabbitMQ
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redis
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                OAuth
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PHP
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Laravel
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REST API
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Grafana
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Prometheus
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Azure
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GCP
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Microservices
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Kubernetes
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Cloudflare
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Zoho Office Suite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Development Intern
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    July - Dec (2025){" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    EcoReady
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-tr-lg rounded-tl-none">
                    AI/ML Intern
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Oct - Dec (2024){" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Infosys Springboard
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack Development Intern
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    July - Sept (2024){" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Grid R&amp;D
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-tr-lg rounded-tl-none">
                    AI &amp; Cloud Technology Intern
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    June - July (2024){" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Edunet Foundation
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Frontend Developer Intern{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Oct - Nov (2023){" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Tutlabs India
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-tr-lg rounded-tl-none">
                    Cybersecurity Researcher
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Sept - Oct (2023){" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Befojji OpSec NGO
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* EDUCATION CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={educationRef}
          >
            {/* EDUCATION TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATIONAL BACKGROUND
            </motion.h1>
            {/* EDUCATION LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EDUCATION LIST ITEM */}
              <div className="">
                {/* LEFT */}
                <div className="w-full">
                  {/* COLLEGE & UNIVERSITY LOGOS */}
                  <div className="flex gap-4 items-center mb-3">
                    <Image src={universityLogo} alt="University Logo" width={80} height={100} className="w-16 h-20 sm:w-20 sm:h-24 object-contain" />
                    <Image src={collegeLogo} alt="College Logo" width={120} height={60} className="w-24 h-12 sm:w-32 sm:h-14 object-contain" />
                  </div>
                  {/* DEGREE NAME */}
                  <div className="w-fit bg-white p-3 font-semibold rounded-lg text-sm sm:text-base">
                    Bachelor of Technology<br />Computer Science and Engineering
                  </div>
                  {/* COLLEGE NAME */}
                  <div className="p-3 text-xs sm:text-sm italic">
                    Bharati Vidyapeeth (Deemed to be University)<br />Department of Engineering and Technology, Off Campus, Navi Mumbai{" "}
                  </div>
                  {/* COLLEGE NAME & LOCATION */}
                  <div className="p-3 text-xs sm:text-sm italic">
                    Kharghar, Navi Mumbai, Maharashtra, India{" "}
                  </div>
                  {/* CGPA */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    9.58 CGPA or 90.8%
                  </div>
                  {/* YEARS OF STUDY */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 2025
                  </div>
                </div>
              </div>
              {/* EDUCATION LIST ITEM */}
              <div className="mt-8 sm:mt-12 md:mt-16">
                {/* RIGHT */}
                <div className="w-full">
                  {/* SCHOOL LOGO */}
                  <div className="mb-3">
                    <Image src={schoolLogo} alt="School Logo" width={80} height={100} className="w-16 h-20 sm:w-20 sm:h-24 object-contain" />
                  </div>
                  {/* SCHOOL MAJOR */}
                  <div className="w-fit bg-white p-3 font-semibold rounded-lg text-sm sm:text-base">
                    10th &amp; 12th (ICSE board)
                  </div>
                  {/* SCHOOL NAME */}
                  <div className="p-3 text-xs sm:text-sm italic">
                    De Nobili School F.R.I.{" "}
                  </div>
                  {/* SCHOOL LOCATION */}
                  <div className="p-3 text-xs sm:text-sm italic">
                    Digwadih, Dhanbad, Jharkhand, India{" "}
                  </div>
                  {/* PERCENTAGE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    86.4% &amp; 88.2%
                  </div>
                  {/* YEARS OF STUDY */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 &amp; 2021{" "}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* EXTRACURRICULAR CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={extraRef}>
            {/* EXTRACURRICULAR TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExtraRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXTRACURRICULAR ACTIVITIES
            </motion.h1>
            {/* EXTRACURRICULAR LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExtraRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXTRACURRICULAR LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* POST TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Technical Co - Secretary{" "}
                  </div>
                  {/* POST DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Student Council<br />(2023-24){" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXTRACURRICULAR LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* POST TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-tr-lg rounded-tl-none">
                    Event Head{" "}
                  </div>
                  {/* POST DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    GFG Student Chapter<br />(2023-24){" "}
                  </div>
                </div>
              </div>
              {/* EXTRACURRICULAR LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* POST TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Social Media Coordinator{" "}
                  </div>
                  {/* POST DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    IIC Club<br />(2023-24){" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>

          {/* LANGUAGES CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={languageRef}>
            {/* LANGUAGES TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isLanguageRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              LANGUAGES
            </motion.h1>
            {/* LANGUAGES LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isLanguageRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* LANGUAGES LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* POST TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    English
                  </div>
                  {/* POST DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Intermediate
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* LANGUAGES LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* POST TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-tr-lg rounded-tl-none">
                    Hindi
                  </div>
                  {/* POST DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Fluent
                  </div>
                </div>
              </div>
              {/* LANGUAGES LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* POST TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Gujarati
                  </div>
                  {/* POST DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Native
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 scrollbar-hide">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
