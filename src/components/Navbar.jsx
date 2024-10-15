"use client";
import Link from "next/link";
import logo from "../Images/logo.png";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex    py-2 px-2  justify-between  sticky top-0 z-50 bg-[#18134d] text-white">
      <section className="	 ">
        <Link href="/">
          <Image className="h-16  w-full " src={logo} />
        </Link>
      </section>
      <section className="flex items-center justify-center gap-20  flex-1">
        <div>
          <input
            placeholder="Search"
            className="py-2 px-2 text-black w-96 rounded-md border bg	"
          />
        </div>
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
      <section> </section>
    </nav>
  );
}

export default Navbar;
