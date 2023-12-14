import { UserButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-white">
            Home
          </Link>
        </div>
        <div className=" items-center space-x-4 md:flex">
          <Link href="/create-tweet" className="text-gray-300 hover:text-white">
            Create Tweet
          </Link>
          <div className="ml-4 flex items-center">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
