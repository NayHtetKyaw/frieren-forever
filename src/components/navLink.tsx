"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ${pathName === link.url && "bg-white text-black"}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
