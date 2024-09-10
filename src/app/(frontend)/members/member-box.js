import React from "react";

const MemberBox = ({ member }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img
        src={member.image}
        alt={member.name}
        className="rounded-full w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] bg-gray-50 object-cover mb-2"
      />
      <h3 className="text-[#0D0D0D] text-[22px] lg:text-[26px] text-center font-waheed mt-2">
        {member.name_dv}
      </h3>
      <p className="text-[#0D0D0D] opacity-80 text-[16px] lg:text-[18px] text-center font-rasmee">
        {member.title_dv}
      </p>
    </div>
  );
};

export default MemberBox;
