"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const MenuItem = ({ title, icon, path }) => {
  const currentRoute = usePathname();

  return (
    <Link href={path}>
      <div className="flex flex-row gap-2 items-center transform transition-transform duration-300 hover:scale-[1.02]">
        {currentRoute.startsWith(path) ? (
          <div className="w-[8px] h-[20px] rounded-lg bg-[#000000] lg:-ml-[13px] -ml-[13px] transition ease-in-out delay-150"></div>
        ) : (
          <div className="w-[8px] h-[20px] rounded-lg bg-transparent lg:-ml-[13px] -ml-[13px] transition ease-in-out delay-150"></div>
        )}
        <div
          className={`w-full menu-item rounded-lg flex flex-row gap-2 items-center py-2 lg:px-3 px-0 lg:h-[40px] h-[40px] lg:justify-start justify-center ${
            currentRoute.startsWith(path)
              ? "bg-[#f1f1f1]/50 text-[#000000]"
              : "bg-transparent text-[#18191B] hover:bg-[#f1f1f1]/50 hover:text-[#000000]"
          }`}
        >
          <div>{icon}</div>
          <h3 className="lg:flex hidden text-sm font-[600]">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
