import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-white">
            Home
          </Link>
        </div>
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="/create-tweet" className="text-gray-300 hover:text-white">
            Create Post
          </Link>
          <div className="ml-4 flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
