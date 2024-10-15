import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=" flex-col  px-10 py-10 flex bg-gray-400">
      <div className="flex  h-64 ">
        <section className="flex w-1/3 justify-center items-center">
          <img
            className=" h-20  "
            src="https://thumbs.dreamstime.com/b/ready-summer-vacation-travel-background-d-rendering-114574299.jpg"
          />
        </section>
        <section className="w-1/3  items-center  flex justify-start">
          <div className="">
            <p className="mb-4 font-bold">CONTACT INFORMATION </p>
            <ul className="flex flex-col gap-2">
              <p>9911950150</p>
              <p>Ezee2fly@gmail.com</p>
              <p>
                09A 2nd Floor Tower D Golden I <br /> Greater Noida West 201306
              </p>
            </ul>
          </div>
        </section>
        <section className="w-1/3 flex items-center justify-start gap-y-6">
          <div>
            <p className="mb-4 font-bold">QUICK LINKS</p>

            <ul className="flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/aboutus">About us</Link>
              <Link href="/contactus">Contact us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/admin">Admin</Link>
            </ul>
          </div>
        </section>
      </div>
      <div className="flex justify-center py-5  ">
        <p>
          Copyright © 2024. All rights reserved. Developed by M-17 Production.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
