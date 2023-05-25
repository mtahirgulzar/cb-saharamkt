import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const Hamburger = ({
  isSubMenu2,
  isMenu,
  setIsSubmenu2,
  setIsMenu,
  data,
  store,
  isSubMenu,
  setIsSubmenu,
  isSubMenu1,
  setIsSubmenu1,
  orderdropdown
}) => {
  return (
    <>
      {" "}
      {!isMenu && (
        <span
          onClick={() => setIsMenu(!isMenu)}
          className="px-4 transition-all duration-500 ease-linear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      )}
      {isMenu && (
        <span
          onClick={() => {
            setIsMenu(!isMenu), setIsSubmenu1(false), setIsSubmenu(false);
          }}
          className="px-4 transition-all duration-500 ease-linear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </span>
      )}
      {isMenu && (
        <div className="bg-white  z-50 min-h-[200px] absolute left-0 top-[105px] sm:top-[109px] md:top-[112px] w-full shadow-lg">
          {data?.map((item, index) => (
            <ul key={index} className="w-full">
              <li
                className={`px-[30px] py-[6px]  cursor-pointer transition-all ease duration-500 ${styles.cusHover}`}
              >
                <div className="inline-flex">
                  <>
                    {" "}
                    <div
                      onClick={() => {
                        index === 1 && setIsSubmenu(!isSubMenu),
                          index === 4 && setIsSubmenu1(!isSubMenu1);
                      }}
                      className={`inline-flex  cursor-pointer ${styles.cusMenu} flex-col`}
                    >
                      <p
                        className={`text-[14px]  leading-[11px] font-[700] text-[#9A0000] transition-all ease duration-500 inline-flex items-center gap-[6px] ${styles.hoverText}`}
                      >
                        <Link href={`${item.link}`} legacyBehavior>
                          <a href={`${item.link}`}>{item.title}</a>
                        </Link>

                        <>
                          {index === 1 && (
                            <>
                              <svg
                              onClick={()=>{
                                index === 1 && setIsSubmenu(!isSubMenu)
                              }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-caret-down-fill ml-[5px]"
                                viewBox="0 0 16 16"
                              >
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                              </svg>
                            </>
                          )}
                          {index === 4 && (
                            <>
                              <span>
                                <svg
                                onClick={()=>{
                                  index === 1 && setIsSubmenu1(!isSubMenu1)
                                }}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="currentColor"
                                  className="bi bi-caret-down-fill ml-[5px]"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                              </span>
                            </>
                          )}
                        </>
                      </p>
                    </div>
                  </>
                </div>
              </li>
              <>
                {index === 1 && (
                  <>
                    {isSubMenu && (
                      <div
                        className={` w-full transition-all duration-3000 ease  z-50 bg-white  `}
                      >
                        <ul className={` bg-white`}>
                          {store?.map((item, index) => (
                            <Link
                              key={index}
                              href={item.link || "/"}
                              legacyBehavior
                            >
                              <li
                                className={`px-[30px] py-[13px] transition-all ease duration-500 ${styles.cusHover}`}
                              >
                                <p
                                  className={`${styles.hoverText} transition-all ease duration-500 text-[12px] leading-[15px] pl-[10px]`}
                                >
                                  {item.title}
                                </p>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
                {index === 4 && (
                  <>
                    {isSubMenu1 && (
                      <div
                        className={` w-full transition-all duration-3000 ease  z-50 bg-white  `}
                      >
                        <ul className={` bg-white`}>
                          {orderdropdown?.map((item, index) => (
                            <Link
                              key={index}
                              href={`${item.link}`}
                              legacyBehavior
                            >
                              <a href={`${item.link}`} className="">
                                <li
                                  className={`px-[30px] py-[13px] text-black transition-all ease duration-500 ${styles.cusHover}`}
                                >
                                  <p
                                    className={`${styles.hoverText} transition-all ease duration-500 text-[12px] leading-[15px] pl-[10px]`}
                                  >
                                    {item?.title}
                                  </p>
                                </li>
                              </a>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default Hamburger;
