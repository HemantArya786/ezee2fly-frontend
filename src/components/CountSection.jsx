import React from "react";
import CountUp from "react-countup";

function CountSection() {
  return (
    <div className=" bg-gray-200 py-10  ">
      <section className="flex flex-col justify-center items-center ">
        <div>
          <p className="flex justify-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-4 sm:p-5 font-bold text-center text-primary">
            GO TRAVEL. DISCOVER. REMEMBER US!!
          </p>
        </div>
        <div className="p-5 sm:p-8 lg:p-10 text-center max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw]">
          <p className="">
            Specializing in crafting experiences for island destinations, Flip
            Trip Holidays takes pride in curating magical journeys to the
            Maldives, Mauritius, Bali, Seychelles, Europe, the Middle East
            including Dubai, Singapore, and the vibrant cities of Hong Kong and
            Macao.
          </p>
        </div>
      </section>
      <section className="flex justify-center  h-36 items-center text-3xl gap-10">
        <div className="w-1/4 text-center  ">
          <p>
            <CountUp end={5000} duration={5} />
            <span>+</span>
          </p>
          <p>Satisfied Clients</p>
        </div>
        <div className="w-1/4 text-center">
          <p>
            <CountUp end={300} duration={5} />
          </p>
          <p>Tour Destinations</p>
        </div>
      </section>

      <section className="flex justify-center  h-36 items-center  text-3xl gap-10">
        <div className="w-1/4 text-center">
          <div>
            <CountUp end={50} duration={5} /> <span>+</span>
          </div>
          <p>Active Members</p>
        </div>
        <div className="w-1/4 text-center">
          <div>
            <CountUp end={67} duration={5} />
          </div>
          <p>Tour Destnation</p>
        </div>
      </section>
    </div>
  );
}

export default CountSection;
