import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Facebook from "../Common/Icon/Facebook";
import Twitter from "../Common/Icon/Twitter";
import Google from "../Common/Icon/Google";
import { Youtube } from "../Common/Icon/Youtube";
import Linkedin from "../Common/Icon/Linkedin";
import { Instagram } from "../Common/Icon/Instagram";
import { imageResolver } from "@/utils/helpers";

export default function Footer({ data }) {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  const router = useRouter();
  const currentRoute = router.pathname.slice(0);
  const [isSubMenu, setIsSubmenu] = useState(false);
  const [isSubMenu1, setIsSubmenu1] = useState(false);
  return (
    <div className="bg-[#6A0000]">
      <div className="max-w-[1140px] mx-auto px-4 md:flex pt-[60px] justify-between text-center sm:text-start">
        <div className="md:w-[40%]">
          <div className="max-w-[300px] h-[80px] mb-[15px]">
            <img
              className="w-full h-full"
              src={imageResolver(data?.logo).path}
              alt="footer logo"
              loading="lazy"
            />
          </div>
          <p className="text-[16px] leading-[24px] text-white font-normal">
            {data?.marketdetails}
          </p>
          <div className="flex gap-x-[15px] items-center justify-center sm:justify-start mt-[20px]">
            <Link href={""} legacyBehavior>
              <span>
                <a href="">
                  <Facebook
                    className="hover:fill-[#FFB400] transition-all duration-300"
                    width={22}
                    height={22}
                  />
                </a>
              </span>
            </Link>
            <Link href={""} legacyBehavior>
              <span>
                <a href="">
                  <Twitter className="hover:fill-[#FFB400] transition-all duration-300" />{" "}
                </a>
              </span>
            </Link>
            <Link href={""} legacyBehavior>
              <span>
                <a href="">
                  <Google
                    className="hover:stroke-[#FFB400] transition-all duration-300"
                    width={18}
                    height={18}
                  />
                </a>
              </span>
            </Link>
            <Link href={""} legacyBehavior>
              <span>
                <a href="">
                  <Instagram className="hover:fill-[#FFB400] transition-all duration-300" />{" "}
                </a>
              </span>
            </Link>
            <Link href={""} legacyBehavior>
              <span>
                <a href="">
                  <Youtube className="hover:fill-[#FFB400] transition-all duration-300" />{" "}
                </a>
              </span>
            </Link>
            <Link href={""} legacyBehavior>
              <span>
                <a href="">
                  <Linkedin
                    className="hover:fill-[#FFB400] transition-all duration-300"
                    width={18}
                    height={16}
                  />
                </a>
              </span>
            </Link>
          </div>
          <Link href={`${data?.cta?.link}`} legacyBehavior>
            <div className="hover:cursor-pointer border-[2px] border-[#FFC648] text-[#FFC648] hover:text-[#6A0000] font-[700] hover:bg-[#FFC648] transition-all duration-300 mt-5 px-4 py-1 inline-flex  rounded-[3px]">
              <button>
                <a href={`${data?.cta?.link}`}>{data?.cta?.name}</a>
              </button>
            </div>
          </Link>
        </div>
        <div className="md:w-[50%] sm:flex mt-[50px] md:mt-0">
          <div className="px-4 sm:w-1/2">
            <h2 className="text-[20px] leading-[30px] text-white font-bold">
              QUICK LINKS
            </h2>
            <div className="mt-[20px]">
              {data?.footernav?.map((item, index) => (
                <Link href={item?.link} legacyBehavior key={index}>
                  <p
                    onMouseEnter={() => {
                      index === 1 && setIsSubmenu(true),
                        index === 4 && setIsSubmenu1(true);
                    }}
                    className=""
                  >
                    <a
                      href={item?.link}
                      className={` text-[16px] leading-[35px] text-[#ffffff]  hover:text-[#FFC648] transition font-semibold tracking-[1px] ${
                        currentRoute === item.link
                          ? "text-[#FFC648] border-b-[2px] border-[#FFC648]"
                          : ""
                      }`}
                    >
                      {item.title}
                    </a>
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:w-1/2">
            <h2 className="text-[20px] leading-[30px] text-white font-bold">
              OPEN HOURS
            </h2>
            <div className="mt-[20px]">
              {data?.opentime?.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-[15px] leading-[35px] text-white  ">
                      {item.days}
                      {item.timing}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] px-4 mx-auto h-[1px] bg-white mt-[30px] " />
      <div className="">
        <div className="text-center text-[14px] font-[400] text-white py-[20px] px-4">
        © {year}
          <span className="hover:text-[#FFC648] transition-all duration-300 font-[500]">
            <Link href={`${data?.links?.companylink}`} legacyBehavior>
              <a href={`${data?.links?.companylink}`}>
                {" "}
                {data?.links?.companytext}{" "}
              </a>
            </Link>{" "}
          </span>
          {data?.links?.publisherheading}
          <span className="hover:text-[#FFC648] transition-all duration-300 font-[500]">
            <Link href={`${data?.links?.publisherlink}`} legacyBehavior>
              <a
                href={`${data?.links?.publisherlink}`}
                target={"_blank"}
                rel="noopener"
              >
                {" "}
                {data?.links?.publishertext}
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
