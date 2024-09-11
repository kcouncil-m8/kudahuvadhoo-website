import Image from "next/image";
import Link from "next/link";
import AnnouncementBox from "./components/announcement-box";
import { getHome } from "./actions";
import ProjectBox from "./projects/project-box";
import ContactBox from "./components/contact-box";
import BlogBox from "./blog/blog-box";

export default async function Home() {
  const data = await getHome();

  return (
    <>
      <div className="w-full bg-[url('/images/headerbg.png')] bg-no-repeat bg-cover bg-center px-6">
        <div className="container relative mx-auto lg:h-[500px] h-[500px] flex justify-center">
          <div className="bg-white rounded-xl w-full md:w-[528px] absolute bottom-[10px] z-10 -mb-20 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-x-0 md:divide-y-0 divide-y divide-[#E2D9E2] py-3 lg:px-0 px-6">
              <div className="px-3 py-3 flex justify-center items-center">
                <div className="">
                  <div className="flex items-center gap-2">
                    <p className="flex justify-center font-lato font-bold text-[28px]">
                      {data.size
                        ? data.size.value
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        : 0}
                    </p>
                    <div>
                      <img src="/images/iconmap.svg" />
                    </div>
                  </div>
                  <p className="w-full text-center font-waheed text-[20px] text-[#BCB6BC]">
                    ހެކްޓަރ
                  </p>
                </div>
              </div>
              <div className="px-3 py-3 flex justify-center items-center">
                <div className="">
                  <div className="flex items-center gap-2">
                    <p className="flex justify-center font-lato font-bold text-[28px]">
                      {data.size
                        ? data.households.value
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        : 0}
                    </p>
                    <div>
                      <img src="/images/iconhouse.svg" />
                    </div>
                  </div>
                  <p className="w-full text-center font-waheed text-[20px] text-[#BCB6BC]">
                    ގޭބީސީ
                  </p>
                </div>
              </div>
              <div className="px-3 py-3 flex justify-center items-center">
                <div className="">
                  <div className="flex items-center gap-2">
                    <p className="flex justify-center font-lato font-bold text-[28px]">
                      {data.size
                        ? data.population.value
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        : 0}
                    </p>
                    <div>
                      <img src="/images/icongroup.svg" />
                    </div>
                  </div>
                  <p className="w-full text-center font-waheed text-[20px] text-[#BCB6BC]">
                    އާބާދި
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F3F6] h-[60px] flex items-center justify-center w-full">
              <Link href="/kudahuvadhoo" className="w-full">
                <div className="px-6 w-full">
                  <p className="w-full font-waheed text-[20px] text-center">
                    ރަށާއި ބެހޭ އިތުރު މަޢުލޫމާތު
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ./ */}
      <div className="w-full bg-white py-[6rem]">
        <div className="container mx-auto lg:px-[12rem] px-6">
          <div className="flex justify-between items-center py-12">
            <Link href="/documents/iulaan">
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="lg:size-5 size-4 text-[#D2C3D2]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <p className="lg:text-[18px] text-[14px] text-[#2E292E] font-rasmee">
                  ފަހުގެ އިއުލާންތައް
                </p>
              </div>
            </Link>
            <p className="lg:text-[32px] text-[28px] font-waheed text-[#2E292E]">
              ފަހުގެ އިއުލާންތައް
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.documents.map((document, index) => {
              return <AnnouncementBox key={index} document={document} />;
            })}
          </div>
        </div>
      </div>
      {/* ./ */}
      <div className="w-full bg-[#F6F3F6] py-12">
        <div className="container mx-auto lg:px-[12rem] px-6">
          <div className="flex w-full justify-between items-center">
            <Link href="/blog">
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="lg:size-5 size-4 text-[#D2C3D2]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <p className="lg:text-[18px] text-[14px] text-[#2E292E] font-rasmee">
                  ހަބަރާއި ހަރަކާތްތައް
                </p>
              </div>
            </Link>
            <p className="lg:text-[32px] text-[28px] font-waheed text-[#2E292E]">
              ފަހުގެ ހަބަރާއި ހަރަކާތްތައް
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {data.blogs.map((blog, index) => (
              <BlogBox key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      {/* ./ */}
      <div className="w-full py-20">
        <div className="container mx-auto lg:px-[12rem] px-6">
          <div className="flex w-full justify-between items-center">
            <Link href="/projects">
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="lg:size-5 size-4 text-[#D2C3D2]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <p className="lg:text-[18px] text-[14px] text-[#2E292E] font-rasmee">
                  ޕްރޮޖެކްޓްތައް
                </p>
              </div>
            </Link>
            <p className="lg:text-[32px] text-[28px] font-waheed text-[#2E292E]">
              ފަހުގެ ޕްރޮޖެކްޓްތައް
            </p>
          </div>
          <div className="w-full items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 rtl">
            {data.projects.map((project, index) => (
              <ProjectBox key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
      {/* ./ */}
      <ContactBox />
    </>
  );
}
