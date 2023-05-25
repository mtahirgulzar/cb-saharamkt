import React from "react";
import Link from "next/link";
import { imageResolver } from "@/utils/helpers";

const CardItem = ({ title, button, link, image }) => {
  return (
    <div className=" relative  max-w-[305px] max-h-[330px] bg-red-600 mx-auto">
      <div className="text-center ">
        <div className=" max-w-[305px] h-[330px] ">
          <img
            src={imageResolver(image).path}
            loading="lazy"
            alt={image?.data?.attributes?.alternativeText}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overlay  absolute top-0 left-0 right-0 bottom-0 bg-[#6A0000] opacity-0  hover:opacity-90">
          <div className="text absolute top-[50%] left-[50%] ">
            <h2 className="text-[#FFB400] font-bold leading-[1] text-[24px]">
              {title}
            </h2>
            <Link href={`${link}`}>
              <button className="mt-[20px] text-[#6A0000] bg-[#FFB400] text-center text-[16px]  font-bold leading-[1] py-[15px] px-[10px] rounded duration-300 transition-all hover:bg-[#6A0000] hover:text-[#FFC648] hover:border-[#FFC648] border-[2px] border-[#6A0000]">
                {button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
