"use client";
import BestSellingPackages from "@/components/componetSlider";
import Packages from "@/components/Packages";
import SimpleSlider from "@/components/SimpleSlider";
import TestimonialSlider from "@/components/testmonialSlider";
import ServicesSection from "@/components/Cards";

import React from "react";
import Cards from "@/components/Cards";

function page() {
  const cardData = [
    {
      title: "Travel Insurance",
      image: "https://fliptripholidays.in/wp-content/uploads/2024/03/pass.png",
    },
    {
      title: "Group Travel",
      image: "https://fliptripholidays.in/wp-content/uploads/2024/03/pass.png",
    },
    {
      title: "Customized Tours",
      image: "https://fliptripholidays.in/wp-content/uploads/2024/03/pass.png",
    },
    {
      title: "Holiday Packages",
      image: "https://fliptripholidays.in/wp-content/uploads/2024/03/pass.png",
    },
    {
      title: "Visa Assistance & International Flights",
      image: "https://fliptripholidays.in/wp-content/uploads/2024/03/pass.png",
    },
    {
      title: "Visa Assistance & International Flights",
      image: "https://fliptripholidays.in/wp-content/uploads/2024/03/pass.png",
    },
  ];

  const CardData2 = [
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg",
    },
  ];

  const cardData3 = [
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/ex-2.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/ex-2.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/ex-2.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/ex-2.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/ex-2.jpg",
    },
    {
      image: "https://fliptripholidays.in/wp-content/uploads/2024/05/ex-2.jpg",
    },
  ];

  return (
    <div className="container mx-auto">
      <SimpleSlider />
      <div className="pt-20">
        <p className="text-3xl md:text-5xl font-bold text-center text-primary">
          COMPREHENSIVE RANGE OF SERVICES
        </p>
        <p className="text-center p-5">
          At Ezee 2 fly we go beyond just creating itineraries. Our
          comprehensive range of services includes:
        </p>
      </div>

      <Cards data={cardData} />

      <section>
        <div>
          <p className="text-5xl font-bold text-center pt-10 text-primary">
            BEST SELLING PACKAGES
          </p>
          <p className="text-center pt-5">
            Choose The Destination Just Right For Your Vacation!
          </p>
        </div>
        <Cards data={CardData2} />
      </section>
      <section>
        <div>
          <p className="text-5xl font-bold text-center pt-10 text-primary">
            POPULAR PACKAGES
          </p>
          <p className="text-center pt-5">
            From breathtaking Abu Dhabi to dynamic Paris, diverse Switzerland,
            and captivating London, explore them all.
          </p>
        </div>
        <Cards data={cardData3} />
      </section>

      {/* <section>
        <div>
          <p className="text-5xl font-bold text-center">Why Ezee 2 fly</p>
          <p className="text-center py-10">
            Having over 8 years of experience and after serving over 50000
            clients in India and globally, we are proud to be your trusted
            travel companion no matter what your destination may be. We are
            confident that we are one of the best tour agency in Delhi with an
            impressive number of over 1000 positive and trusted reviews on
            google and other online platforms. This is the true measure of our
            success: the trust and support of our patrons.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3 px-20 justify-center ">
          <li className="w-1/6 border ">
            <p className="text-xl py-3 text-center  ">Best Team of Experts</p>
            <p className="text-sm text-center ">
              We have experienced personnel who tailor-make your dream holiday
              for you with the help of their knowledge and vast network. They
              give your the right guidance for a hassle-free experience.
            </p>
          </li>
          <li className="w-1/6 border ">
            <p className="text-xl py-3 text-center">Best Team of Experts</p>
            <p className="text-sm text-center ">
              We have experienced personnel who tailor-make your dream holiday
              for you with the help of their knowledge and vast network. They
              give your the right guidance for a hassle-free experience.
            </p>
          </li>
          <li className="w-1/6 border ">
            <p className="text-xl py-3 text-center">Best Team of Experts</p>
            <p className="text-sm text-center  ">
              We have experienced personnel who tailor-make your dream holiday
              for you with the help of their knowledge and vast network. They
              give your the right guidance for a hassle-free experience.
            </p>
          </li>
          <li className="w-1/3 border ">
            <p className="text-xl py-3 text-center  ">Best Team of Experts</p>
            <p className="text-sm text-center  ">
              We have experienced personnel who tailor-make your dream holiday
              for you with the help of their knowledge and vast network. They
              give your the right guidance for a hassle-free experience.
            </p>
          </li>
          <li className="w-1/3 border ">
            <p className="text-xl py-3 text-center  ">Best Team of Experts</p>
            <p className="text-sm text-center  ">
              We have experienced personnel who tailor-make your dream holiday
              for you with the help of their knowledge and vast network. They
              give your the right guidance for a hassle-free experience.
            </p>
          </li>
          <li className="w-1/3 border ">
            <p className="text-xl py-3 text-center  ">Best Team of Experts</p>
            <p className="text-sm text-center  ">
              We have experienced personnel who tailor-make your dream holiday
              for you with the help of their knowledge and vast network. They
              give your the right guidance for a hassle-free experience.
            </p>
          </li>
        </ul>
        <div>
          <p className="py-20 text-center font-semibold text-xl px-64">
            Choose Ezee2fly for a travel experience that transcends boundaries
            and creates memories that last a lifetime. Let your journey begin
            with us, as we turn your travel dreams into reality!
          </p>
        </div>
      </section> */}
      <section className="flex flex-col lg:flex-row gap-10 px-4 sm:px-8 md:px-12 lg:px-16 py-10">
        <div className="lg:w-1/2 w-full">
          <p className="text-xl sm:text-2xl lg:text-3xl p-4 sm:p-8 lg:p-10 text-primary">
            Choose The Destination Just Right For Your Vacation
          </p>
          <p className="pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg">
            We don't believe in selling packages that bring us the most profit.
            Our prime focus is providing the customer with what they want. With
            this highly customer-centric approach, we acknowledge that all
            traveler requirements are different and unique. You can be rest
            assured about getting a highly personalized experience from our
            travel experts as they are ready to guide you at every step of the
            way.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <TestimonialSlider />
        </div>
      </section>

      {/* <BestSellingPackages /> */}
    </div>
  );
}

export default page;
