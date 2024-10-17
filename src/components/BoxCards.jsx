import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BoxCards({ cardDataDetail }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Only show one card at a time in carousel
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet and smaller
        settings: {
          slidesToShow: 2, // Show 2 cards on tablet
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 1, // Show 1 card on mobile landscape
        },
      },
      {
        breakpoint: 480, // mobile portrait
        settings: {
          slidesToShow: 1, // Show 1 card on mobile portrait
        },
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Desktop view - show 3 cards in one row without carousel */}
      <div className="hidden lg:flex lg:flex-wrap lg:gap-6 lg:justify-center">
        {cardDataDetail.map((item, index) => (
          <div key={index} className="w-1/3 p-4">
            {" "}
            {/* 1/3 width for 3 cards in a row */}
            <div className="bg-white shadow-lg p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <h1 className="font-bold text-lg md:text-xl text-center">
                {item.title}
              </h1>
              <p className="text-sm text-zinc-500 leading-6 text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet view - show carousel */}
      <div className="lg:hidden">
        <Slider {...settings}>
          {cardDataDetail.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <h1 className="font-bold text-lg md:text-xl text-center">
                  {item.title}
                </h1>
                <p className="text-sm text-zinc-500 leading-6 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BoxCards;
