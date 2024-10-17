import React from "react";
import CountUp from "react-countup";
import { MdLocationPin } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa6";
import { BsPersonCheckFill } from "react-icons/bs";
import { ImCompass2 } from "react-icons/im";
import { FaCompass } from "react-icons/fa";

function CountSection() {
  return (
    <div className="bg-gray-200 py-10">
      {/* Header section */}
      <section className="flex flex-col justify-center items-center text-center">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-4 sm:p-5 font-bold text-primary">
            GO TRAVEL. DISCOVER. REMEMBER US!!
          </p>
        </div>
        <div className="p-5 sm:p-8 lg:p-10 max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw]">
          <p>
            Specializing in crafting experiences for island destinations, Flip
            Trip Holidays takes pride in curating magical journeys to the
            Maldives, Mauritius, Bali, Seychelles, Europe, the Middle East
            including Dubai, Singapore, and the vibrant cities of Hong Kong and
            Macao.
          </p>
        </div>
      </section>

      {/* Count-up section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 text-xl md:text-3xl py-5">
        <div className="w-full flex justify-center bg-white rounded-3xl p-5 gap-4 items-center md:w-1/4 text-center  ">
          <div>
            <p className="text-8xl ">
              <MdOutlinePeopleOutline />
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl">
              <CountUp end={5000} duration={5} />
              <span>+</span>
            </p>
            <p>Satisfied Clients</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-3xl p-5 flex justify-center items-center md:w-1/4 text-center ">
          <div>
            <p className="text-8xl  ">
              <MdLocationPin />
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl">
              <CountUp end={300} duration={5} />
            </p>
            <p>Tour Destinations</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 text-xl md:text-3xl py-5">
        <div className="w-full flex justify-center items-center rounded-3xl p-5 bg-white rou md:w-1/4 text-center ">
          <div>
            <p className="text-8xl  ">
              <BsPersonCheckFill />
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl">
              <CountUp end={50} duration={5} />
              <span>+</span>
            </p>
            <p>Active Members</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center bg-white rounded-3xl  p-5 gap-3 md:w-1/4 text-center ">
          <div>
            <p className="text-10xl md:text-5xl">
              <FaCompass />
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl">
              <CountUp end={67} duration={5} />
            </p>
            <p>Tour Destinations</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CountSection;
