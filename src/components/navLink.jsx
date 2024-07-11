"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link, setOpen }) => {
  const pathName = usePathname();

  return (
    <Link href={link.url} legacyBehavior>
      <a
        className={`rounded p-1 ${pathName === link.url ? "bg-black text-white" : ""}`}
        onClick={() => setOpen(false)} // Close menu on link click
      >
        {link.title}
      </a>
    </Link>
  );
};

export default NavLink;
