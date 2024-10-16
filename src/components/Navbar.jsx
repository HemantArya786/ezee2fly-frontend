"use client";
import Link from "next/link";
import logo from "../Images/logo.png";
import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white">
      <div className="flex container mx-auto py-2 justify-between items-center px-5 md:px-16">
        {/* Logo Section */}
        <section className="flex items-center">
          <Link href="/">
            <Image className="h-12 w-full md:h-16" src={logo} alt="Logo" />
          </Link>
        </section>

        {/* Search Bar */}
        <section className="hidden md:flex items-center justify-center">
          <input
            placeholder="Search"
            className="py-2 px-4 text-black w-full md:w-96 rounded-full text-md border bg"
          />
        </section>

        {/* Hamburger Icon for Mobile */}
        <section className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </section>

        {/* Links Section */}
        <section className="hidden md:flex items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/contactus">Contact Us</Link>
          <p>Packages</p>
        </section>
      </div>

      {/* Collapsible Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-primary text-white py-4">
          <Link href="/" className="py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/aboutus" className="py-2" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/contactus" className="py-2" onClick={toggleMenu}>
            Contact Us
          </Link>
          <p className="py-2">Packages</p>
          <div className="w-full flex justify-center mt-4">
            <input
              placeholder="Search"
              className="py-2 px-4 text-black w-full mx-4 rounded-full text-md border"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
