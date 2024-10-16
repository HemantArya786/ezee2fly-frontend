"use client";
import HoverButton from "@/components/HoverButton";
import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto mb-10">
      <div>
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-10 md:py-16 lg:py-20 text-primary">
          Contact Us
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-10 px-4 sm:px-8 lg:px-16 py-10">
        <section className="flex flex-col gap-y-3 lg:w-1/2 w-full p-4 sm:p-6 lg:p-10">
          <div>
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold py-4 lg:py-5 text-primary">
                CONTACT US FOR MORE INFO
              </p>
            </div>
            <p className="py-3 text-center text-sm sm:text-base lg:text-lg">
              Have questions or ready to plan your next adventure? Get in touch
              with us at Flip Trip Holidays! Our dedicated team is here to
              assist you every step of the way. Whether you need help crafting a
              custom itinerary, want to inquire about our services, or simply
              seek travel advice, we’re just a message or call away.
            </p>
          </div>
          <div className="py-2">
            <input
              className="h-10 sm:h-12 p-4 sm:p-6 text-lg sm:text-xl w-full border rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 py-2">
            <input
              className="h-10 sm:h-12 w-full sm:w-1/2 p-4 sm:p-6 text-lg sm:text-xl border rounded"
              placeholder="Email"
            />
            <input
              className="h-10 sm:h-12 w-full sm:w-1/2 p-4 sm:p-6 text-lg sm:text-xl border rounded"
              placeholder="Contact No"
            />
          </div>
          <div className="py-2">
            <textarea
              className="h-32 sm:h-36 w-full p-4 sm:p-6 text-lg sm:text-xl border rounded"
              placeholder="Your Message"
            />
          </div>
          <div className="flex justify-center">
            <HoverButton title={"Submit"} />
          </div>
        </section>

        <section className="lg:w-1/2 w-full flex flex-col justify-center items-center p-4 sm:p-6 lg:p-10">
          <div className="py-5">
            <p className="text-xl sm:text-2xl lg:text-4xl font-semibold text-primary text-center">
              Let's turn your travel dreams into reality together!
            </p>
          </div>
          <div className="w-full flex flex-col gap-y-5">
            <div className="py-2">
              <p className="text-lg sm:text-xl font-semibold text-primary">
                Our Location
              </p>
              <p className="text-sm sm:text-base">
                09A 2nd Floor Tower D Golden I Greater Noida West 201306
              </p>
            </div>
            <div className="py-2">
              <p className="text-lg sm:text-xl font-semibold text-primary">
                Email us at
              </p>
              <p className="text-sm sm:text-base">Ezee2fly@gmail.com</p>
            </div>
            <div className="py-2">
              <p className="text-lg sm:text-xl font-semibold text-primary">
                Contact us on
              </p>
              <p className="text-sm sm:text-base">9911950150</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
