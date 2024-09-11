import moment from "moment";
import Link from "next/link";
import React from "react";

const DocumentBox = ({ document }) => {
  return (
    <Link href={`/documents/view/${document?.id}`} className="flex w-full">
      <div className="group w-full bg-[#F9F8F9] hover:bg-[#1d8979] hover:bg-opacity-10 rounded-xl flex items-center overflow-hidden">
        <div className="w-full px-6 py-6 flex justify-end flex-col">
          <p className="font-waheed text-[20px] rtl">{document.name_dv}</p>
          {document.date_open && (
            <p className="text-[16px] text-[#8D898D] text-right ltr capitalize">
              {moment(document.date_open).format("DD MMMM YYYY")}
            </p>
          )}
        </div>
        <div className="h-full bg-[#F5F2F5] group-hover:bg-[#1d8979] group-hover:bg-opacity-20 px-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6 text-[#E2D9E2] group-hover:text-[#1d8979]"
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

export default DocumentBox;
