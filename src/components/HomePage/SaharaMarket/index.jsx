import React from "react";

const SaharaMarket = ({ order, data }) => {
  return (
    <div className="w-full py-[50px] md:py-[70px] lg:py-[80px] bg-[#6A0000] my-[60px]">
      <div className=" max-w-[1140px] w-full mx-auto px-4">
        <div
          className={` max-w-[1090px] ${
            order == 1 ? "grid && md:grid-cols-3" : null
          }`}
        >
          <div className={`md:p-[15px] ${order == 1 ? "md:col-span-2" : null}`}>
            <div>
              <p className="text-center text-[#FFFFFF] text-[20px] sm:text-[22px] md:text-[24px] font-500 mb-[10px] md:mb-[15px] ">
              Welcome to
              </p>
              <h2 className="text-center border-b-[3px] border-[#FFB400] pb-2 text-[#FFB400] text-[27px] sm:text-[35] md:text-[40px] font-bold leading-[1.2] mt-[8px] mb-[16px] ">
              {data?.text}
              </h2>
            </div>
            <div
              className="text-[#FFFFFF] text-[15px] md:text-[16px] lg:text-[17px] font-400 leading-[26px] md:leading-[32px] mt-5 md:mt-7 lg:leading-[34px] mb-[15px] "
              dangerouslySetInnerHTML={{ __html: data?.body }}
            ></div>
          </div>
          <div className="">
            {order == 1 ? (
              <div
                className="flex md:items-end justify-center py-[30px] md:py-[70px] md:px-[10px]"
              >
                <img
                  src="https://saharamkt.com/wp-content/uploads/2020/01/Restaurant_ed3850622aa2ae55b80492a7fa935d02.jpg"
                  alt="sahara market image"
                  className="shadow "
                  loading="lazy"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaharaMarket;
