"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex p-2 justify-between">
      <Link href="../user">
        <Image src="/favicon.ico" alt="dikc" width={32} height={32} />
      </Link>
      <ul className="flex gap-4">
        <Link
          className="hover:bg-[#483AA0] hover:scale-105 rounded transition duration-300 p-1"
          href="../projects"
        >
          Projects
        </Link>
        <Link
          className="hover:bg-[#483AA0] hover:scale-105 rounded transition duration-300 p-1"
          href="../skills"
        >
          Skills/Services
        </Link>
        <Link
          className="hover:bg-[#483AA0] hover:scale-105 rounded transition duration-300 p-1"
          href="../resume"
        >
          Resume
        </Link>
        <Link
          className="hover:bg-[#483AA0] hover:scale-105 rounded transition duration-300 p-1"
          href="../contact"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
