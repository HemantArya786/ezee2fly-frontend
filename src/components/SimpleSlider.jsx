"use client";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 400,
  arrows: false,
  autoplay: true,

  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function IndexPage() {
  return (
    <div>
      <Slider className="  " {...settings}>
        <div>
          <img
            className=" h-96  w-full"
            src="https://www.travelandleisure.com/thmb/mZ-oEOeXoM8McSYob38uGU-QQQg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beachfront-villa-six-senses-zighy-bay-oman-LUXVACAY0817-79d7ec0b36cb4b849bb152142bc9109a.jpg"
          />
        </div>
        <div>
          <img
            className=" h-96  w-full"
            src="https://www.travelandleisure.com/thmb/RsI1U287UPWEeGcS44rrP8TE-Ho=/1024x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/north-island-seychelles-water-tropical-LUXVACAY0817-1fd26cb6da0b48df8bef592ea338076a.jpg"
          />{" "}
        </div>
        <div>
          <img
            className=" h-96  w-full"
            src="https://www.travelandleisure.com/thmb/mZ-oEOeXoM8McSYob38uGU-QQQg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beachfront-villa-six-senses-zighy-bay-oman-LUXVACAY0817-79d7ec0b36cb4b849bb152142bc9109a.jpg"
          />
        </div>
        <div>
          <img
            className=" h-96  w-full"
            src="https://www.travelandleisure.com/thmb/Hnnere7q19OttD_zAHsiU2haa34=/1464x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/post-house-post-ranch-inn-california-LUXVACAY0817_0-862bc39a4c284433852ec84dd08b0ecf.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}
