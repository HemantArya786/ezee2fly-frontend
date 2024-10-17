"use client";
import Link from "next/link";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute top-1/2 right-0 text-white text-5xl p-5 pt-0 opacity-50 hover:opacity-90"
      }
      onClick={onClick}
    >
      <FaChevronCircleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"absolute z-99 top-1/2 left-0 text-white text-5xl p-5 pt-0  "}
      onClick={onClick}
    >
      <FaChevronCircleLeft />
    </div>
  );
}

var settings = {
  dots: true,
  infinite: false,
  speed: 400,
  // arrows: true,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function IndexPage() {
  return (
    <div>
      <Slider className="  " {...settings}>
        <div className="">
          <img
            className=" max-h-[60vh]  w-full"
            src="https://www.travelandleisure.com/thmb/mZ-oEOeXoM8McSYob38uGU-QQQg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beachfront-villa-six-senses-zighy-bay-oman-LUXVACAY0817-79d7ec0b36cb4b849bb152142bc9109a.jpg"
          />
        </div>
        <div>
          <img
            className=" max-h-[60vh]  w-full"
            src="https://www.travelandleisure.com/thmb/RsI1U287UPWEeGcS44rrP8TE-Ho=/1024x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/north-island-seychelles-water-tropical-LUXVACAY0817-1fd26cb6da0b48df8bef592ea338076a.jpg"
          />{" "}
        </div>
        <div>
          <img
            className=" max-h-[60vh]  w-full"
            src="https://www.travelandleisure.com/thmb/mZ-oEOeXoM8McSYob38uGU-QQQg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beachfront-villa-six-senses-zighy-bay-oman-LUXVACAY0817-79d7ec0b36cb4b849bb152142bc9109a.jpg"
          />
        </div>
        <div>
          <img
            className=" max-h-[60vh]  w-full"
            src="https://www.travelandleisure.com/thmb/Hnnere7q19OttD_zAHsiU2haa34=/1464x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/post-house-post-ranch-inn-california-LUXVACAY0817_0-862bc39a4c284433852ec84dd08b0ecf.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}
