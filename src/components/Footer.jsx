import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../Images/logo.png";

function Footer() {
  return (
    <footer className="flex-col px-5 pt-5 flex bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:h-64 gap-8 md:gap-0">
          <section className="md:w-1/3 flex justify-center md:items-center">
            <div className="max-w-[200px] md:max-w-[300px]">
              <Image className="w-full h-" src={logo} alt="Logo" />
            </div>
          </section>

          <section className="md:w-1/3  flex md:items-center justify-center md:justify-start">
            <div className=" pt-5">
              <p className="mb-4 font-bold text-center md:text-left">
                CONTACT INFORMATION
              </p>
              <ul className="flex flex-col gap-2 text-center  md:text-left">
                <p>Ezee2fly tours and travels</p>
                <p>+91 - 8744950150</p>
                <p>120 - 5095032</p>
                <p>Ezee2fly@gmail.com</p>
                <p>
                  209A 2Nd Floor Tower D Golden I<br /> Greater Noida West
                  201306
                </p>
              </ul>
            </div>
          </section>

          <section className="md:w-1/3 md:items-center flex justify-center md:justify-start">
            <div className=" ">
              <p className="mb-4 font-bold text-center md:text-left">
                QUICK LINKS
              </p>
              <ul className="flex flex-col gap-2 text-center md:text-left ">
                <Link href="/">Home</Link>
                <Link href="/aboutus">About us</Link>
                <Link href="/contactus">Contact us</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/admin">Admin</Link>
              </ul>
            </div>
          </section>
        </div>

        <hr className="my-5" />

        <div className="flex justify-center py-5">
          <p className="text-center">
            Copyright © 2024. All rights reserved. Developed by M-17 Production.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
