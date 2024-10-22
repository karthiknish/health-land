"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "https://profici.co.uk/about/", text: "ABOUT" },
    { href: "https://profici.co.uk/team/", text: "TEAM" },
    { href: "https://profici.co.uk/profici-podcast", text: "PODCAST" },
    { href: "https://profici.co.uk/contact/", text: "CONTACT" },
  ];

  return (
    <nav className="relative w-full z-20 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="hidden lg:flex items-center space-x-8 lg:space-x-44">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <Link href="https://profici.co.uk/" className="mx-auto lg:mx-0">
          <Image
            src="https://profici.co.uk/wp-content/themes/proficinew/assets/images/Proficiblack.svg"
            alt="Profici Logo"
            width={150}
            height={50}
            priority
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-8 lg:space-x-44">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
    </nav>
  );
};

export default Nav;
