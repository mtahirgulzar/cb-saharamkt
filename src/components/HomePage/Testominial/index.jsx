import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "../../Common/Icon/ArrowLeft";
import ArrowRight from "../../Common/Icon/ArrowRight";
import { imageResolver } from "@/utils/helpers";

const mydata = [
  {
    description:
      "I went for a routine dental check up at Laguna Park Dentistry with Dr. My. I usually don't bother writing reviews online, but I was really impressed by LP Dentistry. The staff was really friendly and I appreciated that the appointment was super fast. I was in and out of there. Dr. My is a good communicator and informative. Will come back for a future whitening or check up.ws online, but I was really impressed by LP Dentistry. The staff was really friendly and I appreciated that the appointment was super fast. I was in and out of there. Dr. My is a good communicator and informative. Will come back ",
    img: "https://saharamkt.com/wp-content/uploads/2020/01/John_1be893a040ff60d3f9cf260118674f96.jpg",
    name: "Matt B, CA",
  },
  {
    description:
      "I went for a routine dental check up at Laguna Park Dentistry with Dr. My. I usually don't bother writing reviews online, but I was really impressed by LP Dentistry. The staff was really friendly and I appreciated that the appointment was super fast. I was in and out of there. Dr. My is a good communicator and informative. Will come back for a future whitening or check up.",
    img: "https://saharamkt.com/wp-content/uploads/2020/01/John_1be893a040ff60d3f9cf260118674f96.jpg",
    name: "Matt B, CA",
  },
  {
    description:
      "I went for a routine dental check up at Laguna Park Dentistry with Dr. My. I usually don't bother writing reviews online, but I was really impressed by LP Dentistry. The staff was really friendly and I appreciated that the appointment was super fast. I was in and out of there. Dr. My is a good communicator and informative. Will come back ws online, but I was really impressed by LP Dentistry. The staff was really friendly and I appreciated that the appointment was super fast. I was in and out of there. Dr. My is a good communicator and informative. Will come back  for a future whitening or check up.",
    img: "https://saharamkt.com/wp-content/uploads/2020/01/John_1be893a040ff60d3f9cf260118674f96.jpg",
    name: "Matt B, CA",
  },
  {
    description:
      "I went for a routine dental check up at Laguna Park Dentistry with Dr. My. I usually don't bother writing reviews online, but I was really impressed by LP Dentistry. The staff was really friendly and I appreciated that the appointment was super fast. I was in and out of there. Dr. My is a good communicator and informative. Will come back for a future whitening or check up.",
    img: "https://saharamkt.com/wp-content/uploads/2020/01/John_1be893a040ff60d3f9cf260118674f96.jpg",
    name: "Matt B, CA",
  },
  {
    description:
      "I went for a routine dental check up at Laguna Park Dentistry with Dr. My. I usually don't bother writing reviews online, but I was really impressed by LP Dentistry. The staff was really friendly and I appreciated that the appointment was super fast. I was in and out of there. Dr. My is a good communicator and informative. Will come back for a future whitening or check up.",
    img: "https://saharamkt.com/wp-content/uploads/2020/01/John_1be893a040ff60d3f9cf260118674f96.jpg",
    name: "Matt B, CA",
  },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <section
      className="z-30 absolute  top-[40%] -right-[14px]"
      onClick={onClick}
    >
      <button className="">
        <ArrowRight stroke="#FFB400" />
      </button>
    </section>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <section
      className="z-30 absolute  top-[40%] -left-[14px]"
      onClick={onClick}
    >
      <button className="">
        <ArrowLeft stroke="#FFB400" />
      </button>
    </section>
  );
}
const Testimonial = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <div className="py-[40px] md:py-[60px] lg:py-[80px] bg-[#6A0000] my-[40px] md:my-[50px] lg:my-[60px]">
      <div className="p-[15px] max-w-[1140px] mx-auto">
        <div className="">
          <div className="  p-[10px] ">
            <div className="">
              <h2 className="text-center border-b-[3px] border-[#FFB400] pb-4 mb-[20px] text-[#FFB400] text-[28px] sm:text-[30px] md:text-[36px] font-bold leading-[1.2] ">
                {data?.testimonialheading}
              </h2>
            </div>
            <div className="text-center max-w-[1090px] cursor-grabbing">
              <Slider {...settings}>
                {data?.card?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="max-w-[1036px] p-[20px] transition "
                    >
                      <div
                        className="text-[#ffffff] italic  md:text-[19px] lg:text-[21px] font-[400] leading-[31px] cus-home-testimonial"
                        dangerouslySetInnerHTML={{ __html: item?.body }}
                      ></div>
                      <div className="flex gap-x-3 justify-center mt-[25px]">
                        <img
                          src={imageResolver(item?.img).path}
                          alt={item?.img?.data?.attributes?.alternativeText}
                          loading="lazy"
                          className="max-w-[50%] max-h-[50%] rounded-[999px]"
                        />
                        <div className="flex flex-col text-start">
                          <span className=" text-[14px]  leading-[21px] font-[600] text-[#ffb400] ">
                            {item?.title}
                          </span>
                          <span className=" text-[14px]  leading-[21px] font-[600] text-[#fff] ">
                            {item?.titledetail}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
