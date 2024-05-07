"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/characters", title: "Characters" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const topHam = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
    },
  };
  const centerHam = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };
  const bottomHam = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: -45,
    },
  };

  const listBG = {
    closed: {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    open: {
      opacity: 1,
      backdropFilter: "blur(20px)",
    },
  };
  const navList = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const listBlockVariants = {
    closed: {
      scale: 0.5,
      opacity: 0,
      filter: "blur(10px)",
    },
    open: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div className=" w-screen p-5 z-40 backdrop-blur-3xl drop-shadow-2xl border-b-[1px] border-[#444444]">
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* LINK */}
        <div className="hidden md:flex gap-4 w-1/3 text-white">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        {/* LOGO */}
        {/* <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center"> */}
        {/*   <Link */}
        {/*     href="/" */}
        {/*     className="text-sm bg-none font-semibold flex items-center justify-center hover:scale-110 transition-all duration-200" */}
        {/*   > */}
        {/*     <span className="text-white mr-3">info</span> */}
        {/*     <span className="w-12 h-8 px-3 rounded bg-white text-black flex items-center justify-center"> */}
        {/*       .ofBas */}
        {/*     </span> */}
        {/*   </Link> */}
        {/* </div> */}
        {/* SOCIALS */}

        {/* RESPONSIVE MENU */}
        <div className="md:hidden">
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              variants={topHam}
              animate={open ? "open" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerHam}
              animate={open ? "open" : "closed"}
              className="w-10 h-1 bg-white rounded"
            ></motion.div>
            <motion.div
              variants={bottomHam}
              animate={open ? "open" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
          </button>
          {/* MENU LIST */}
          {open && (
            <div className="absolute z-40 top-0 left-0 w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
              <motion.div
                variants={listBG}
                initial="closed"
                animate="open"
                className="absolute z-40 top-0 left-0 w-full h-full bg-black/70 backdrop-blur-xl justify-center"
              ></motion.div>
              <motion.div
                className="absolute z-40 flex flex-col w-full h-full text-4xl items-center justify-center gap-16"
                variants={navList}
                initial="closed"
                animate="open"
              >
                {links.map((link) => (
                  <motion.div
                    className=""
                    variants={listBlockVariants}
                    key={link.title}
                  >
                    <Link
                      href={link.url}
                      className="mr-3 bg-[#3c3c3c]/60 ring-1 ring-[#444444] backdrop-blur-3xl text-white px-5 py-3 rounded-xl"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
