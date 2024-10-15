import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dp",
    text: "This product has completely transformed my workflow. I cant imagine going back to my old methods!",
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
    text: "Ive recommended this to all my colleagues. Its a game-changer for our industry.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative bg-white rounded-3xl shadow-lg p-8 md:p-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50 z-0"></div>
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full border-4 border-white shadow-md mb-4"
            />
            <p className="text-gray-800 text-lg md:text-xl mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <h3 className="text-xl font-semibold text-gray-900">
              {testimonials[currentIndex].name}
            </h3>
          </div>
        </div>
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          <FaChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
