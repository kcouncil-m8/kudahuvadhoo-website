import { getProjects } from "../actions";
import ProjectBox from "./project-box";

const ProjectsIndex = async () => {
  const data = await getProjects();

  return (
    <div className="w-full py-[4rem]">
      <div className="container mx-auto flex items-center flex-col justify-between px-6 gap-4">
        <div className="flex w-full items-center justify-center">
          <p className="font-waheed text-[42px] text-center">ޕްރޮޖެކްޓްސް</p>
        </div>
        <div className="mt-4">
          <div className="w-full lg:w-auto grid grid-cols-3 lg:gap-10 gap-6 bg-[#FCFBFB] rounded-[12px] px-6 py-3 border border-[#EAEAEA] rtl">
            <div className="w-full flex gap-2 items-center justify-center">
              <p className="font-rasmee text-[14px] text-[#8D898D] mt-1">
                ކުރިއަށްދަނީ
              </p>
              <p className="font-sans text-[16px] font-semibold text-[#477BFF]">
                {data.notCompletedProjectsCount ?? 0}
              </p>
            </div>
            <div className="w-full flex gap-2 items-center justify-center">
              <p className="font-rasmee text-[14px] text-[#8D898D] mt-1">
                ނިމިފައިވަނީ
              </p>
              <p className="font-sans text-[16px] font-semibold text-[#477BFF]">
                {data.completedProjectsCount ?? 0}
              </p>
            </div>
            <div className="w-full flex gap-2 items-center justify-center">
              <p className="font-rasmee text-[14px] text-[#8D898D] mt-1">
                ޖުމްލަ
              </p>
              <p className="font-sans text-[16px] font-semibold text-[#477BFF]">
                {data.totalProjectsCount ?? 0}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-[10rem] px-0 mt-8 rtl">
          {data.projects.map((project, index) => (
            <ProjectBox key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsIndex;
