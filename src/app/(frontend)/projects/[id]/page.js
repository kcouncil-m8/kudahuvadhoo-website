import React from "react";
import { getProject } from "../../actions";
import moment from "moment";
import ContactBox from "../../components/contact-box";

const ProjectShow = async ({ params }) => {
  const { id } = params;
  const { project } = await getProject(id);

  return (
    <>
      <div className="w-full py-[4rem]">
        <div className="container mx-auto flex items-center flex-col justify-between px-6 gap-4">
          <div className="flex w-full items-center justify-center mb-4">
            <p className="font-waheed lg:text-[42px] text-[32px] text-center">
              {project.name_dv}
            </p>
          </div>
          <div className="flex gap-4 bg-[#F9F8F9] items-center justify-center px-6 py-4 rounded-lg rtl mt-6">
            <div className="flex justify-between gap-4">
              <p className="font-rasmee text-[16px]">ނިމިފައިވަނީ</p>
              <p
                className={`font-sans text-[16px] font-semibold ${
                  project.percentage === "100"
                    ? "text-green-500"
                    : "text-[#477BFF]"
                }`}
              >
                {project.percentage}%
              </p>
            </div>
            <div className="bg-white h-[8px] rounded-[16px] relative overflow-hidden w-[200px] lg:w-[300px]">
              <div
                className={`h-[8px] rounded-full absolute top-0 right-0 ${
                  project.percentage === "100" ? "bg-green-500" : "bg-[#6B95FF]"
                }`}
                style={{ width: `${project.percentage}%` }}
              ></div>
            </div>
          </div>
          <div className="w-full flex px-6 lg:px-[20rem] mt-6">
            <div className="w-full flex flex-col gap-6 bg-[#F9F8F9] items-center px-6 py-4 rounded-lg rtl">
              <div className="w-full flex flex-col gap-1 border-b-[1px] border-[#E9E1E9] pb-4">
                <p className="font-rasmee text-[16px] text-[#8D898D]">
                  ކޮންޓްރެކްޓަރ
                </p>
                <p className="font-waheed text-[20px]">{project.company}</p>
              </div>
              <div className="w-full flex lg:flex-row flex-col gap-4">
                <div className="w-full flex flex-col gap-1">
                  <p className="font-rasmee text-[16px] text-[#8D898D]">
                    މަސައްކަތުގެ އަގު
                  </p>
                  <p className="font-waheed text-[20px]">{project.price}</p>
                </div>
                <div className="w-full  flex flex-col gap-1">
                  <p className="font-rasmee text-[16px] text-[#8D898D]">
                    މަސައްކަތް ފެށުނީ
                  </p>
                  <p className="font-waheed text-[20px]">
                    {moment(project.started_at).format("DD-MM-Y")}
                  </p>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <p className="font-rasmee text-[16px] text-[#8D898D]">
                    ކޮންޓްރެކްޓް މުއްދަތު
                  </p>
                  <p className="font-waheed text-[20px]">{project.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactBox />
      </div>
    </>
  );
};

export default ProjectShow;
