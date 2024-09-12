import React from "react";

export const metadata = {
  title: "Contact Us - Dh.Kudahuvadhoo Council",
};

const ContactIndex = () => {
  return (
    <div className="w-full lg:py-[8rem] py-[4rem]">
      <div className="container mx-auto flex items-center flex-col justify-between px-6 gap-4">
        <div className="flex w-full items-center justify-center">
          <p className="font-waheed text-[42px] text-center">
            ގުޅޭނެ ނަންބަރުތައް
          </p>
        </div>
        <div className="w-full grid grid-cols-1 xl:grid-cols-7 gap-4 rtl mt-4 lg:px-[6rem] px-0">
          <div className="bg-[#F9F8F9] border border-[#EAE3EA] rounded-[12px] px-6 py-3 lg:col-span-2 col-span-1 w-full">
            <p className="text-[#1d8979] font-waheed text-[22px]">
              އާންމު މަޢުލޫމާތު ހޯދުމަށް
            </p>
            <p className="ltr text-right mt-4 text-[16px]">
              complaints@kudahuvadhoo.gov.mv
            </p>
            <div className="flex justify-start">
              <p className="ltr text-[20px] font-semibold">676 0633</p>
            </div>
          </div>
          <div className="bg-[#F9F8F9] border border-[#EAE3EA] rounded-[12px] px-6 py-3 lg:col-span-2 col-span-1 w-full">
            <p className="text-[#1d8979] font-waheed text-[22px]">
              އިއުލާނާއި ދެންނެވުންތަކާއި ބެހޭ
            </p>
            <p className="ltr text-right mt-4 text-[16px]">
              complaints@kudahuvadhoo.gov.mv
            </p>
            <div className="flex justify-start">
              <p className="ltr text-[20px] font-semibold">676 0633</p>
            </div>
          </div>
          <div className="bg-[#F9F8F9] border border-[#EAE3EA] rounded-[12px] px-6 py-3 lg:col-span-3 col-span-1 w-full">
            <p className="text-[#1d8979] font-waheed text-[22px]">
              ޝަކުވާ ހުށަހެޅުމަށް
            </p>
            <p className="ltr text-right mt-4 text-[16px]">
              complaints@kudahuvadhoo.gov.mv
            </p>
            <div className="flex justify-start">
              <p className="ltr text-[20px] font-semibold">676 0633</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactIndex;
