import React from "react";
import SmallBoxCards from "./smallBoxCards";

function BoxCard() {
  const cardDataDetail = [
    {
      title: "Best Team of Experts",
      description:
        "We have experienced personnel who tailor-make your dream holiday for you with the help of their knowledge and vast network. They give your the right guidance for a hassle-free experience.",
    },
    {
      title: "Best Team of Experts",
      description:
        "We have experienced personnel who tailor-make your dream holiday for you with the help of their knowledge and vast network. They give your the right guidance for a hassle-free experience.",
    },
    {
      title: "Best Team of Experts",
      description:
        "We have experienced personnel who tailor-make your dream holiday for you with the help of their knowledge and vast network. They give your the right guidance for a hassle-free experience.",
    },
    {
      title: "Best Team of Experts",
      description:
        "We have experienced personnel who tailor-make your dream holiday for you with the help of their knowledge and vast network. They give your the right guidance for a hassle-free experience.",
    },
    {
      title: "Best Team of Experts",
      description:
        "We have experienced personnel who tailor-make your dream holiday for you with the help of their knowledge and vast network. They give your the right guidance for a hassle-free experience.",
    },
    {
      title: "Best Team of Experts",
      description:
        "We have experienced personnel who tailor-make your dream holiday for you with the help of their knowledge and vast network. They give your the right guidance for a hassle-free experience.",
    },
  ];

  return (
    <div>
      <section>
        <div>
          <p className="flex justify-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-4 sm:p-5 font-bold text-center text-primary">
            Why Ezee 2 fly
          </p>
          <div className="p-5 sm:p-8 lg:p-10 text-center max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw]">
            <p className="mb-4 text-sm sm:text-base lg:text-lg">
              Having over 8 years of experience and after serving over 50000
              clients in India and globally, we are proud to be your trusted
              travel companion no matter what your destination may be. We are
              confident that we are one of the best tour agency in Delhi with an
              impressive number of over 1000 positive and trusted reviews on
              google and other online platforms. This is the true measure of our
              success: the trust and support of our patrons.
            </p>
          </div>
        </div>
        <SmallBoxCards cardDataDetail={cardDataDetail} />
        <div>
          <p className="py-20 text-center font-semibold text-xl px-64">
            Choose Ezee2fly for a travel experience that transcends boundaries
            and creates memories that last a lifetime. Let your journey begin
            with us, as we turn your travel dreams into reality!
          </p>
        </div>
      </section>
    </div>
  );
}

export default BoxCard;
