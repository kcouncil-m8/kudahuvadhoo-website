import Link from "next/link";
import React from "react";

const ContactBox = () => {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto lg:px-[12rem] px-6 flex justify-center items-center flex-col gap-6">
        <p className="font-waheed text-[32px] lg:text-[42px]">
          އިތުރު މަޢުލޫމާތު ނޫނީ ގުޅުއްވުމަށް
        </p>
        <div className="flex flex-row gap-4">
          <Link
            href="/contact"
            className="font-waheed mt-1 rounded-full bg-[#CF7457] flex gap-2 items-center justify-center lg:h-[41px] h-[36px] lg:text-[18px] text-[14px] text-white lg:px-6 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-white"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            ގުޅުއްވުމަށް
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
