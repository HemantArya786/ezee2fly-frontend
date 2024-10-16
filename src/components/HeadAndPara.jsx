import React from "react";

function HeadAndPara({ heading, paragraph }) {
  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-4 sm:p-5 font-bold text-center text-primary">
          <h1>{heading}</h1>
        </div>
        <div className="p-5 sm:p-8 lg:p-10 text-center max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw]">
          {paragraph.map((item, index) => (
            <p key={index} className="mb-4 text-sm sm:text-base lg:text-lg">
              {item}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HeadAndPara;
