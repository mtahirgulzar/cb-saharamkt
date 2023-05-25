import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { imageResolver } from "@/utils/helpers";
import { useRouter } from "next/router";
const myData = [
  {
    img: "images/HomeHero.jpg",
    headline: "HAND SLAUGHTERED",
    pragraph:
      "Organizing real estate investment opportunities for private investors for over 30 years.",
  },
  {
    img: "images/HomeHero.jpg",
    headline: "SHOP ALL YOU NEED",
    pragraph:
      "Organizing real estate investment opportunities for private investors for over 30 years.",
  },
  {
    img: "images/HomeHero.jpg",
    headline: "Quality performance is the way to success",
    pragraph:
      "Organizing real estate investment opportunities for private investors for over 30 years.",
  },
];

export default function HomeHero({ data }) {
  const router = useRouter();
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className="cursor-grab" id="homeHero">
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="text-center "
                style={{
                  background: `url(${
                    imageResolver(item?.img)?.path
                  }) no-repeat center center/cover`,
                  height: "640px",
                }}
              >
                <div className="bg-gradient bg-[#241818b0] bg-opacity-50 py-[240px] md:py-[270px] lg:py-[300px]">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="max-w-[950px] mx-auto px-4 "
                  >
                    <h2 className="text-[18px] md:text-[20px] text-[#ffffff] font-normal uppercase underline mb-[20px] md:mb-[25px] lg:mb-[30px] ">
                      {item.title}
                    </h2>
                    <p className="mb-[30px] text-[20px] sm:text-[25px] md:text-[28px] lg:text-[30px] leading-[33px] md:leading-[42px]  font-[600] text-[#ffb400] ">
                      {item.description}
                    </p>
                    <button
                      onClick={() => router.push("#onlineOrder")}
                      className="sm:text-[17px] md:text-[18px] leading-[18px] font-[400] text-[#ffb400] hover:text-white py-3 px-6 border-[2px] transition border-[#ffb400] rounded hover:bg-[#ffb400] "
                    >
                      {item?.cta?.name}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
