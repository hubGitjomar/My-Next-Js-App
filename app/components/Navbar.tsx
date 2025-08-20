"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex p-2 justify-between ">
      <Link href="../user">
        <Image src="/favicon.ico" alt="dikc" width={32} height={32}/>
      </Link>
      <ul className="flex gap-4">
        <Link
          className="hover:bg-[#483AA0] hover:scale-105 transition duration-300 p-1"
          href="../user/projects"
        >
          Projects
        </Link>
        <Link
          className="hover:bg-[#483AA0] hover:scale-105 transition duration-300 p-1"
          href="../user/skills"
        >
          Skills/Services
        </Link>
        <Link
          className="hover:bg-[#483AA0] hover:scale-105 transition duration-300 p-1"
          href="../user/resume"
        >
          Resume
        </Link>
        <Link
          className="hover:bg-[#483AA0] hover:scale-105 transition duration-300 p-1"
          href="../user/contact"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
