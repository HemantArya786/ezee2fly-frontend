"use client";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex  mt-2  py-2 px-2  justify-between  sticky top-0 z-50 bg-black">
      <section className="	 ">
        <img
          className="h-16  w-full "
          src="https://thumbs.dreamstime.com/b/ready-summer-vacation-travel-background-d-rendering-114574299.jpg"
        />
      </section>
      <section className="flex items-center justify-center gap-20  flex-1">
        <div>
          <input
            placeholder="Search"
            className="py-2 px-2 text-black w-96 rounded-md	"
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
