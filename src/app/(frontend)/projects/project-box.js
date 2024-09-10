import Link from "next/link";
import React from "react";

const ProjectBox = ({ project, onClick }) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="w-full bg-[#F9F8F9] px-6 py-4 rounded-[16px]"
    >
      <div className="flex justify-between items-center flex-row gap-4">
        <div className="font-waheed text-[20px]">{project.name ?? "N/A"}</div>
        <div className="flex justify-between gap-4">
          <p className="font-rasmee text-[16px]">ނިމިފައިވަނީ</p>
          <p className="font-sans text-[16px] font-semibold text-[#477BFF]">
            {project.percentage}%
          </p>
        </div>
      </div>
      <div className="w-full bg-white h-[8px] rounded-full relative overflow-hidden mt-6">
        <div
          className="h-[8px] rounded-full absolute top-0 right-0 bg-[#6B95FF]"
          style={{ width: `${project.percentage}%` }}
        ></div>
      </div>
    </Link>
  );
};

export default ProjectBox;
