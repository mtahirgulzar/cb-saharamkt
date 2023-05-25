import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageResolver } from "@/utils/helpers";

const index = ({data}) => {
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
    <>
        <div className="mt-[20px] mb-[10px]  sm:mt-[40px] sm:mb-[30px] md:mt-[70px]">
        <div className=" py-[30px] sm:py-[40px] md:py-[50px] lg:py-[60px] bg-[#FFC648]">
          <div className="max-w-[1090px] mx-auto cursor-grabbing ">
            <Slider {...settings}>
              {data?.galleryimg?.map((item, index) => {
                return (
                  <div key={index} className="md:max-w-[360px] h-[252px] px-4 mx-auto">
                    <img
                      src={imageResolver(item?.image).path}
                      className=" w-[100%] h-full mx-auto object-cover "
                      loading="lazy"
                      alt={item?.image?.data?.attributes?.alternativeText}
                    ></img>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>  
    </>
  )
}

export default index
