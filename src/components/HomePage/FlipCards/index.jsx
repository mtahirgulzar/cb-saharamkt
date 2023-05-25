import { imageResolver } from "@/utils/helpers";
import React from "react";

const FlipCards = ({ data }) => {
  return (
    <div className="w-full my-[30px]">
      <div className=" max-w-[1140px] w-full mx-auto px-4">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <div 
                  className="flip-cards mx-auto max-w-[359px] h-[250px] lg:h-[280px]"
                >
                  <div className="flip-cards-inner ">
                    <div className="flip-cards-front mb-[20px]">
                      <img
                        src={imageResolver(item?.img).path}
                        alt={item?.img?.data?.attributes?.alternativeText}
                        loading="lazy"
                        className="w-[139px] h-[139px]"
                      />
                    </div>
                    <div className="flip-cards-back text-center p-4 sm:p-[25px] md:p-[35px] flex flex-col justify-center bg-[#6A0000] text-[#ffff]">
                      <h2 className="mb-[20px] text-[21px] font-bold leading-[1.2] ">
                        {item?.title}
                      </h2>
                      <p className="text-[13px] md:text-[14px]">
                        {" "}
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
