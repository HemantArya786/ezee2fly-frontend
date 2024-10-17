import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dp",
    text: "This product has completely transformed my workflow. I can't imagine going back to my old methods!",
  },
  {
    id: 2,
    name: "Bob Smith",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
    text: "The customer support team is fantastic. They went above and beyond to solve my issues.",
  },
  {
    id: 3,
    name: "Carol Williams",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dp",
    text: "I've recommended this to all my colleagues. It's a game-changer for our industry.",
  },
];

const TestimonialSlider = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Slider {...sliderSettings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 lg:p-12 overflow-hidden">
              <div className="flex flex-col items-center text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-md mb-4"
                />
                <p className="text-gray-800 text-sm sm:text-base lg:text-lg md:text-xl mb-6 italic">
                  "{item.text}"
                </p>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
  >
    <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
  >
    <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
  </button>
);

export default TestimonialSlider;
