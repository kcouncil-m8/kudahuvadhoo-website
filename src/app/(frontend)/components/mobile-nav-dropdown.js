"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MobileNavDropdown = ({ links, name, onClick }) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li className="w-full">
      <button
        className={`w-full font-waheed text-[20px] flex gap-2 items-center justify-between hover:text-[#CF7457] ${
          isDropdownOpen && "text-[#CF7457]"
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
        <div className="bg-[#F5F9FF] rounded-b-xl mt-[28px] py-2 flex">
          <ul className="w-full px-4">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => {
                      router.push(link.link);
                      setIsDropdownOpen(false);
                      onClick();
                    }}
                    className="font-rasmee text-[16px] text-[#0D0D0D] flex py-3 whitespace-nowrap hover:text-[#CF7457]"
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MobileNavDropdown;
