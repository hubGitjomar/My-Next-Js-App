import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <Link
        className="font-bold border rounded-b-lg transition duration-300 ease-in-out hover:bg-amber-400 p-2"
        href="./pages"
      >
        Users
      </Link>
    </main>
  );
}
