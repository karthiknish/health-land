import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="relative w-full z-20 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-32">
          <Link
            href="https://profici.co.uk/about/"
            className="text-gray-700 text-lg  hover:text-gray-900"
          >
            ABOUT
          </Link>
          <Link
            href="https://profici.co.uk/team/"
            className="text-gray-700 text-lg  hover:text-gray-900"
          >
            TEAM
          </Link>
        </div>
        <Link href="https://profici.co.uk/">
          <Image
            src="https://profici.co.uk/wp-content/themes/proficinew/assets/images/Proficiblack.svg"
            alt="Profici Logo"
            width={150}
            height={50}
            priority
          />
        </Link>
        <div className="flex items-center space-x-32">
          <Link
            href="https://profici.co.uk/profici-podcast"
            className="text-gray-700 text-lg hover:text-gray-900"
          >
            PODCAST
          </Link>
          <Link
            href="https://profici.co.uk/contact/"
            className="text-gray-700 text-lg hover:text-gray-900"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
    </nav>
  );
};

export default Nav;
