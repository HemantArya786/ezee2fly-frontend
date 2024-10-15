import React from "react";

function ContactUs() {
  return (
    <div>
      <div>
        <img
          className=" h-96 w-full"
          src="https://media.istockphoto.com/id/1452771551/vector/contact-us-button-with-cursor-pointer-click-vector-web-button.jpg?s=612x612&w=0&k=20&c=IGWQ-VhsNAnZyKnuWhggHhpozUiuFRq5jd-rJ7-KqIc="
        />
      </div>
      <div className="flex">
        <section className="flex flex-col gap-y-3 w-1/2 p-10">
          <div>
            <div>
              <p className=" text-4xl font-bold py-5">
                CONTACT US FOR MORE INFO
              </p>
            </div>
            <p className="py-3">
              Have questions or ready to plan your next adventure? Get in touch
              with us at Flip Trip Holidays! Our dedicated team is here to
              assist you every step of the way. Whether you need help crafting a
              custom itinerary, want to inquire about our services, or simply
              seek travel advice, we’re just a message or call away.
            </p>
          </div>
          <div className="">
            <input className="h-12 px-5 w-full" placeholder="Your Name" />
          </div>
          <div className="flex gap-2  ">
            <input className="h-12 w-1/2 px-5" placeholder="Email" />
            <input className="h-12 w-1/2 px-5 " placeholder="Contact No" />
          </div>
          <div>
            <input className="h-12 w-full px-5" placeholder="Your Message" />
          </div>
          <div>
            <button className="border h-12 w-full ">SUBMIT MESSAGE</button>
          </div>
        </section>
        <section className="w-1/2  p-20 ">
          <div className="py-5">
            <p className=" text-4xl ">
              Let's turn your travel dreams into reality together!
            </p>
          </div>
          <div>
            <div className="py-2">
              <p className="text-xl font-semibold ">Our Location</p>
              <p> 09A 2nd Floor Tower D Golden I Greater Noida West 201306</p>
            </div>
            <div className="py-2">
              <p className="text-xl font-semibold">Email us at</p>
              <p>Ezee2fly@gmail.com</p>
            </div>
            <div className="py-2">
              <p className="text-xl font-semibold">Contact us on</p>
              <p>9911950150</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
