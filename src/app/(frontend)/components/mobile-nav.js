"use client";

import Link from "next/link";
import React, { useState } from "react";
import MobileNavDropdown from "./mobile-nav-dropdown";
import { useRouter } from "next/navigation";

const MobileNav = ({ navLinks }) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#F5F9FFF0] lg:h-[100px] h-[80px] xl:hidden flex items-center justify-between rtl">
        <div className="container mx-auto flex items-center justify-between px-6 gap-4">
          <div className="flex items-center justify-center lg:gap-12 gap-4">
            <button
              onClick={() => setShowMenu(showMenu ? false : true)}
              className="text-[#0D0D0D]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="xl:w-0 w-[1px] h-[41px] bg-[#E2D9E2] bg-opacity-50"></div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setShowMenu(false);
                router.push("/");
              }}
            >
              <div className="flex gap-6 items-center">
                <img
                  src="/images/kudhahuvadhoocouncillogo.png"
                  className="h-[36px]"
                />
                <div className="text-[#0D0D0D] mt-1">
                  <p className="font-waheed lg:text-[18px] text-[16px]">
                    ނިލަންދެއަތޮޅު ދެކުނުބުރި
                  </p>
                  <p className="font-waheed lg:text-[18px] text-[16px] -mt-1">
                    ކުޑަހުވަދޫ ކައުންސިލް އިދާރާ
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-[1px] w-0 h-[41px] bg-[#E2D9E2] bg-opacity-50"></div>
          </div>
          <div className="flex flex-row gap-4">
            <div
              className="font-waheed cursor-pointer whitespace-nowrap mt-1 rounded-full bg-[#CF7457] flex items-center gap-2 justify-center lg:h-[41px] lg:w-auto h-[40px] w-[40px] lg:text-[20px] text-[14px] text-white lg:px-6 px-0"
              onClick={() => {
                setShowMenu(false);
                router.push("/contact");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="w-full bg-[#F5F9FFF0] border-t-[1px] boder-[#E2D9E2]">
          <ul className="flex flex-col gap-8 text-[#0D0D0D] rtl p-6">
            {navLinks.map((link, index) => {
              if (link.links) {
                return (
                  <MobileNavDropdown
                    name={link.name}
                    links={link.links}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  />
                );
              } else {
                return (
                  <li key={index}>
                    <div
                      className="cursor-pointer font-waheed text-[20px] hover:text-[#CF7457] w-full"
                      onClick={() => {
                        setShowMenu(false);
                        router.push(link.link);
                      }}
                    >
                      {link.name}
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
