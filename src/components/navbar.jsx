"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import github from "../../public/github.svg";
import gfg from "../../public/geeksforgeeks.svg";
import linkedin from "../../public/linkedin.svg";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/builds", title: "Builds" },
  { url: "/exposure", title: "Exposure" },
  { url: "/badges", title: "Badges" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" legacyBehavior>
          <a className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
            <span className="text-white mr-1">Kritansh</span>
            <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
              Tank
            </span>
          </a>
        </Link>
      </div>
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-full justify-center">
        {links.map((link) => (
          <NavLink className="text-base" link={link} key={link.title} setOpen={setOpen} />
        ))}
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="https://www.linkedin.com/in/kritansh-tank-a4632a216/" legacyBehavior>
          <a>
            <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
          </a>
        </Link>
        <Link href="https://www.geeksforgeeks.org/user/tankkritvdhq" legacyBehavior>
          <a>
            <Image src={gfg} alt="GeeksforGeeks" width={27} height={27} />
          </a>
        </Link>
        <Link href="https://github.com/Kritansh-Tank" legacyBehavior>
          <a>
            <Image src={github} alt="GitHub" width={26} height={26} />
          </a>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 relative z-50"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Top bar */}
          <motion.div
            className="w-10 h-1 rounded absolute left-0"
            animate={
              open
                ? { top: "50%", rotate: 45, backgroundColor: "#ffffff", y: "-50%" }
                : { top: "0%", rotate: 0, backgroundColor: "#000000", y: "0%" }
            }
            transition={{ duration: 0.3 }}
          />
          {/* Middle bar */}
          <motion.div
            className="w-10 h-1 rounded absolute left-0"
            style={{ top: "50%", y: "-50%" }}
            animate={
              open
                ? { opacity: 0, backgroundColor: "#ffffff" }
                : { opacity: 1, backgroundColor: "#000000" }
            }
            transition={{ duration: 0.2 }}
          />
          {/* Bottom bar */}
          <motion.div
            className="w-10 h-1 rounded absolute left-0"
            animate={
              open
                ? { bottom: "50%", rotate: -45, backgroundColor: "#ffffff", y: "50%" }
                : { bottom: "0%", rotate: 0, backgroundColor: "#000000", y: "0%" }
            }
            transition={{ duration: 0.3 }}
          />
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <div className="" key={link.title} onClick={() => setOpen(false)}>
                <Link href={link.url} legacyBehavior>
                  <a>{link.title}</a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
