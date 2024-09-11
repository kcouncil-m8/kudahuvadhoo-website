"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavDropdown = ({ links, name }) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li className="relative z-30">
      <button
        className={`font-waheed text-[20px] flex gap-2 items-center hover:text-[#1d8979] ${
          isDropdownOpen && "text-[#1d8979]"
        }`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-5 text-[#E1D4CF]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="bg-[#F5F9FF] rounded-b-xl mt-[28px] py-2 px-3 absolute flex">
          <ul className="w-full px-4">
            {links.map((link, index) => {
              return (
                <div ikey={index} className="cursor-pointer">
                  <button
                    onClick={() => {
                      router.push(link.link);
                      setIsDropdownOpen(false);
                    }}
                    className="font-rasmee text-[16px] text-[#0D0D0D] flex py-3 whitespace-nowrap hover:text-[#1d8979]"
                  >
                    {link.name}
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavDropdown;
