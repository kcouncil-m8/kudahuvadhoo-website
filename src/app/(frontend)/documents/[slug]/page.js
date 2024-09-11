import DocumentBox from "./document-box";
import { getDocumentBySlug } from "../../actions";
import ContactBox from "../../components/contact-box";
import Link from "next/link";

const ProjectsIndex = async ({ params }) => {
  const data = await getDocumentBySlug(params.slug);

  return (
    <>
      <div className="w-full py-[4rem]">
        <div className="container mx-auto flex items-center flex-col justify-between px-6 gap-4">
          <div className="flex w-full items-center justify-center">
            <p className="font-waheed text-[42px] text-center">
              {data.type.name_dv}
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center mt-4 gap-4">
            {data.types.map((type, index) => (
              <Link key={index} href={`/documents/${type.slug}`}>
                <p
                  className={`flex font-waheed items-center justify-center px-6 py-2 rounded-full cursor-pointer ${
                    type.slug === params.slug
                      ? "bg-[#1d8979] text-white hover:bg-[#1d8979]"
                      : "bg-gray-200 text-black hover:bg-[#1d8979] hover:text-white"
                  }`}
                >
                  {type.name_dv}
                </p>
              </Link>
            ))}
          </div>
          <div className="w-full items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-[10rem] px-0 mt-8 rtl">
            {data.documents.map((document, index) => (
              <DocumentBox key={index} document={document} />
            ))}
          </div>
        </div>
      </div>
      <ContactBox />
    </>
  );
};

export default ProjectsIndex;
