"use client";
import HoverButton from "@/components/HoverButton";
import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto mb-10">
      <div>
        <p className="text-9xl font-bold text-center py-20 text-primary">
          Contact Us
        </p>
      </div>
      <div className="flex gap-x-10">
        <section className="flex flex-col gap-y-3 w-1/2 p-10">
          <div>
            <div>
              <p className=" text-4xl text-center font-bold py-5 text-primary">
                CONTACT US FOR MORE INFO
              </p>
            </div>
            <p className="py-3 text-center">
              Have questions or ready to plan your next adventure? Get in touch
              with us at Flip Trip Holidays! Our dedicated team is here to
              assist you every step of the way. Whether you need help crafting a
              custom itinerary, want to inquire about our services, or simply
              seek travel advice, we’re just a message or call away.
            </p>
          </div>
          <div className="py-2">
            <input
              className="h-12 p-8 text-2xl w-full border rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="flex gap-2 py-2  ">
            <input
              className="h-12 w-1/2 p-8 text-2xl border rounded"
              placeholder="Email"
            />
            <input
              className="h-12 w-1/2 p-8 border text-2xl rounded "
              placeholder="Contact No"
            />
          </div>
          <div className="py-2">
            <textarea
              className="h-36 w-full p-8 text-2xl border rounded"
              placeholder="Your Message"
            />
          </div>
          <div className="flex justify-center">
            <HoverButton title={"Submit"} />
          </div>
        </section>
        <section className="w-1/2  flex flex-col justify-center items-center ">
          <div className="py-5">
            <p className=" text-4xl font-semibold text-primary ">
              Let's turn your travel dreams into reality together!
            </p>
          </div>
          <div className=" w-full flex  flex-col gap-y-5">
            <div className="py-2">
              <p className="text-xl font-semibold text-primary ">
                Our Location
              </p>
              <p> 09A 2nd Floor Tower D Golden I Greater Noida West 201306</p>
            </div>
            <div className="py-2">
              <p className="text-xl font-semibold text-primary">Email us at</p>
              <p>Ezee2fly@gmail.com</p>
            </div>
            <div className="py-2">
              <p className="text-xl font-semibold text-primary">
                Contact us on
              </p>
              <p>9911950150</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
