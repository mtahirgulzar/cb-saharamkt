import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SubMenu from "./subMenu";
import TopCard from "./TopCard";
import Hamburger from "../Hamburger";
import { imageResolver } from "@/utils/helpers";


const Navbar = ({ data }) => {

  const about = [{ title: "Meat", link: "/meat" }];
  const orderOnline = [
    {
      title: "RESTAURANT",
      link: "https://marketplace.boons.io/site/sahara-restaurant/38/y",
    },
    {
      title: "MEAT SHOP",
      link: "https://marketplace.boons.io/site/sahara-meat-market-dublin/76/y",
    },
    { title: "GROCERIES -Coming Soon", link: "#" },
  ];

  const router = useRouter();
  const currentRoute = router.pathname.slice(0);
  const [isSubMenu, setIsSubmenu] = useState(false);
  const [isSubMenu1, setIsSubmenu1] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="fixed top-0 z-50 w-full mx-auto">
      <div className="transition ">
        <TopCard />
      </div>
      <div className=" shadow-lg bg-[#ffffff]">
        <nav>
          <div className=" max-w-[1140px] mx-auto flex  justify-between  pt-[25px]  flex-row items-center px-[12px]">
            <div className="hover:cursor-pointer w-[135px] sm:w-[155px] md:w-[177px] lg:w-[220px] h-[36px] sm:h-[40px] md:h-[44px] lg:h-[58px]">
              <Link href={"/"} legacyBehavior>
                <a href={"/"}>
                  <img
                    className="w-full h-full"
                    src={imageResolver(data?.logo)?.path}
                    alt="navbar logo"
                    loading="lazy"
                  ></img>
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <ul className="mx-[5px] hidden lg:flex items-center text-[#6A0000] leading-[1em] text-[16px] font-[600] gap-x-[20px] ">
                {data?.navitems?.map((item, index) => (
                  // ${item.link}
                  <Link href={`${item.link}`} legacyBehavior key={index}>
                    <li
                      onMouseEnter={() => {
                        index === 1 && setIsSubmenu(true),
                          index === 4 && setIsSubmenu1(true);
                      }}
                      onMouseLeave={() => {
                        index === 1 && setIsSubmenu(false),
                          index === 4 && setIsSubmenu1(false);
                      }}
                      // ${styles.cusMenu}
                      className={`flex cursor-pointer items-center relative `}
                    >
                      <div className="flex items-center hover:bg-[#FFC648] ">
                        <div
                          className={`hover:text-[#ffffff]     transition px-[20px] py-[12px] hover:cursor-pointer ${
                            currentRoute === item.link
                              ? "text-[#ffffff] bg-[#FFC648]"
                              : "text-[#6A0000]"
                          }`}
                        >
                          <a href={item.link}>{item.title}</a>
                        </div>
                        <div className={`${index !== 1 && "hidden"}`}>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <div className={`${!isSubMenu && "hidden"}`}>
                            <SubMenu
                              setIsSubmenu={setIsSubmenu}
                              dropdown={about}
                              small
                            />
                          </div>
                        </div>
                        <div className={`${index !== 4 && "hidden"}`}>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <div className={`${!isSubMenu1 && "hidden"}`}>
                            <SubMenu
                              setIsSubmenu={setIsSubmenu1}
                              dropdown={orderOnline}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="lg:hidden flex items-center lg:bg-white  h-[32px] w-[40px] justify-center ">
              <Hamburger
                data={data?.navitems}
                store={about}
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                isSubMenu={isSubMenu}
                setIsSubmenu={setIsSubmenu}
                isSubMenu1={isSubMenu1}
                setIsSubmenu1={setIsSubmenu1}
                orderdropdown={orderOnline}


              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
