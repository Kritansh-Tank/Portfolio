"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import github from "../../public/github.svg";
import gfg from "../../public/geeksforgeeks.svg";
import linkedin from "../../public/linkedin.svg";
import instagram from "../../public/instagram.svg";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} setOpen={setOpen} />
        ))}
      </div>
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
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/Kritansh-Tank" legacyBehavior>
          <a>
            <Image src={github} alt="GitHub" width={26} height={26} />
          </a>
        </Link>
        <Link href="https://www.geeksforgeeks.org/user/tankkritvdhq" legacyBehavior>
          <a>
            <Image src={gfg} alt="GeeksforGeeks" width={27} height={27} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/kritansh-tank-a4632a216/" legacyBehavior>
          <a>
            <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/_kritansh_._/" legacyBehavior>
          <a>
            <Image src={instagram} alt="Instagram" width={24} height={24} />
          </a>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            className={`w-10 h-1 bg-black rounded ${open ? "transform rotate-45" : ""}`}
          ></motion.div>
          <motion.div
            className={`w-10 h-1 bg-black rounded ${open ? "opacity-0" : "opacity-100"}`}
          ></motion.div>
          <motion.div
            className={`w-10 h-1 bg-black rounded ${open ? "transform -rotate-45" : ""}`}
          ></motion.div>
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
