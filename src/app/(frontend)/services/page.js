import { getServices } from "../actions";
import ContactBox from "../components/contact-box";
import ServiceBox from "./service-box";

const ProjectsIndex = async ({ params }) => {
  const data = await getServices(params.slug);

  return (
    <>
      <div className="w-full py-[4rem]">
        <div className="container mx-auto flex items-center flex-col justify-between px-6 gap-4">
          <div className="flex w-full items-center justify-center">
            <p className="font-waheed text-[42px] text-center">ޚިދުމަތްތައް</p>
          </div>
          <div className="w-full items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-[10rem] px-0 mt-8 rtl">
            {data.services.map((service, index) => (
              <ServiceBox key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      <ContactBox />
    </>
  );
};

export default ProjectsIndex;
