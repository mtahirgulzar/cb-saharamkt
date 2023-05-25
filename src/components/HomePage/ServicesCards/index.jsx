import React from "react";
import CardItem from "./CardItem";

const ServicesCards = ({ data }) => {
  return (
    <div className="w-full " id="onlineOrder">
      <div >
        <div className="mb-[50px] py-[25px] bg-[#6A0000] px-4">
          <p className="text-center text-[#FFB400] text-[28px] sm:text-[30px] font-bold leading-[30px]  ">
            {data?.headline}
          </p>
          <h2 className="text-center pb-2 text-white text-[20px] sm:text-[22px] md:text-[24px]  leading-[36px] mt-[20px]">
            {data?.description}
          </h2>
        </div>
        <div className="pb-[80px] max-w-[1300px] mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2">
            {data?.orderCard?.map((item, index) => {
              return (
                <div key={index}>
                  <CardItem
                    title={item?.text}
                    button={item?.ctaname}
                    link={item?.ctalink}
                    image={item?.img}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
