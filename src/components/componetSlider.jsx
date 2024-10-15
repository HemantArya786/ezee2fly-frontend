import React from "react";
import Slider from "react-slick";

function BestSellingPackages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="px-4">
      <div>
        <p className="text-3xl md:text-5xl font-bold text-center pt-10">
          BEST SELLING PACKAGES
        </p>
        <p className="text-center pt-5">
          Choose The Destination Just Right For Your Vacation!
        </p>
      </div>
      <div className="pt-10">
        <Slider {...settings}>
          <div className="p-4">
            <img
              src="https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg"
              alt="Package 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4">
            <img
              src="https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg"
              alt="Package 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4">
            <img
              src="https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg"
              alt="Package 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4">
            <img
              src="https://fliptripholidays.in/wp-content/uploads/2024/05/16-1.jpg"
              alt="Package 4"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default BestSellingPackages;
