import React from "react";
import styles from "../style.module.css";
import Link from "next/link";
const SubMenu = ({ dropdown, setIsSubmenu, small }) => {
  return (
    <>
      <div
        onMouseEnter={() => setIsSubmenu(true)}
        onMouseLeave={() => setIsSubmenu(false)}
        className={`absolute top-[40.5px] left-[0px]  ${
          small ? "w-[120px]" : "w-[200px]"
        } transition-all duration-3000 ease  z-50 bg-white`}
      >
        <ul className={` bg-white`}>
          {dropdown?.map((item, index) => (
            <Link key={index} href={`${item.link}`} legacyBehavior>
              <li
                className={`px-[20px] py-[13px] transition ${styles.cusHover}`}
              >
                <p
                  className={`${styles.hoverText} transition font-600 text-[15px] leading-[15px]`}
                >
                  <a href={`${item.link}`}>{item.title || item.attributes.title}</a>
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SubMenu;
