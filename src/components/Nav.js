import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="relative w-full z-20 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <Link href="https://profici.co.uk/">
          <Image
            src="https://profici.co.uk/wp-content/themes/proficinew/assets/images/Proficiblack.svg"
            alt="Profici Logo"
            width={150}
            height={50}
            priority
          />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
    </nav>
  );
};

export default Nav;
