import Link from "next/link";
import React from "react";

const ServiceBox = ({ service }) => {
  return (
    <Link href={`${service?.file}`} target="_blank" className="flex w-full">
      <div className="group w-full bg-[#F9F8F9] hover:bg-[#FFF1ED] rounded-xl flex items-center overflow-hidden">
        <div className="w-full px-6 py-6 flex justify-end flex-col rtl">
          <p className="font-waheed text-[20px]">{service.title_dv}</p>
        </div>
        <div className="h-full bg-[#F5F2F5] group-hover:bg-[#FAD7CC] px-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6 text-[#E2D9E2] group-hover:text-[#CF7457]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ServiceBox;
