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
                router.push("/contact");
              }}
            >
              <div className="flex gap-6 items-center">
                <img
                  src="/images/kudhahuvadhoocouncillogo.png"
                  className="h-[36px]"
                />
                <div className="text-[#0D0D0D] mt-1">
                  <p className="font-waheed lg:text-[18px] text-[16px]">
                    ކުޑަހުވަދޫ
                  </p>
                  <p className="font-waheed lg:text-[18px] text-[16px] -mt-1">
                    ކައުންސިލް
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-[1px] w-0 h-[41px] bg-[#E2D9E2] bg-opacity-50"></div>
          </div>
          <div className="flex flex-row gap-4">
            <div
              className="font-waheed cursor-pointer whitespace-nowrap mt-1 rounded-full bg-[#CF7457] flex items-center justify-center lg:h-[41px] h-[36px] lg:text-[18px] text-[14px] text-white lg:px-6 px-4"
              onClick={() => {
                setShowMenu(false);
                router.push("/contact");
              }}
            >
              ޝަކުވާ ހުށަހެޅުއްވުން
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
