import React from "react";
import Slider from "react-slick"; // Import the Slider component from react-slick

function Cards({ data }) {
  // Slider settings for mobile responsiveness
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time on mobile
    slidesToScroll: 1,
  };

  return (
    <section>
      {/* Carousel only for mobile */}
      <div className="md:hidden p-5">
        <Slider {...settings}>
          {data.map((items) => (
            <div className="border p-5 bg-white">
              <img src={items.image} alt="Service 1" />
              <p className="text-center text-black font-semibold">
                {items.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid display for desktop and tablets */}
      <ul className="hidden md:flex gap-2 p-20">
        {data.map((items) => (
          <li className="border w-1/6 p-5 bg-white">
            <img src={items.image} alt="Service 1" />
            <p className="text-center text-black font-semibold">
              {items.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cards;
