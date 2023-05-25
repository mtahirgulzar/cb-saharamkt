import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageResolver } from "@/utils/helpers";

const data = [
  {
    image:
      "https://saharamkt.com/wp-content/uploads/2019/07/3_6040ca254def88971366c5ef63ba2b0e.jpg",
  },
  {
    image:
      "https://saharamkt.com/wp-content/uploads/2019/07/3_6040ca254def88971366c5ef63ba2b0e.jpg",
  },
  {
    image:
      "https://saharamkt.com/wp-content/uploads/2019/07/3_6040ca254def88971366c5ef63ba2b0e.jpg",
  },
  {
    image:
      "https://saharamkt.com/wp-content/uploads/2019/07/3_6040ca254def88971366c5ef63ba2b0e.jpg",
  },
  {
    image:
      "https://saharamkt.com/wp-content/uploads/2019/07/3_6040ca254def88971366c5ef63ba2b0e.jpg",
  },
  {
    image:
      "https://saharamkt.com/wp-content/uploads/2019/07/3_6040ca254def88971366c5ef63ba2b0e.jpg",
  },
];

const ImageSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-[20px] mb-[10px]  sm:mt-[40px] sm:mb-[30px] md:mt-[70px]">
      <div className="w-full py-[60px] bg-[#FFB400]">
        <div className="max-w-[1090px] mx-auto cursor-grabbing ">
          <Slider {...settings}>
            {data?.map((item, index) => {
              return (
                <div key={index} className="px-3 ">
                  <img
                    src={imageResolver(item?.img).path}
                    className=""
                    loading="lazy"
                    alt={item?.img?.data?.attributes?.alternativeText}
                  ></img>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
