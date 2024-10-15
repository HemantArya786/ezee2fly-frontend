"use client";
import Link from "next/link";
import logo from "../Images/logo.png";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 bg-primary text-white">
      <div className="flex container mx-auto  py-2   justify-between px-16">
        <section className=" 	 ">
          <Link href="/">
            <Image className="h-16  w-full " src={logo} />
          </Link>
        </section>
        <section className="flex items-center justify-center">
          <input
            placeholder="Search"
            className="py-2 px-4 text-black w-96 rounded-full text-md border bg	"
          />
        </section>
        <section className="flex items-center justify-center gap-10  ">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/aboutus">About Us</Link>
          </div>
          <div>
            <Link href="/contactus">Contact Us</Link>
          </div>
          <div>
            <p>Packages</p>
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
