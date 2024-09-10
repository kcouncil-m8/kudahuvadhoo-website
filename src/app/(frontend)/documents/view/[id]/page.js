import { getDocumentById } from "@/app/(frontend)/actions";
import ContactBox from "@/app/(frontend)/components/contact-box";
import moment from "moment";
import Link from "next/link";

const ProjectsIndex = async ({ params }) => {
  const data = await getDocumentById(params.id);

  return (
    <>
      <div className="w-full py-[4rem]">
        <div className="container mx-auto flex items-center flex-col justify-between px-6 gap-4">
          <div className="flex w-full items-center justify-center">
            <p className="font-waheed text-[42px] text-center">
              {data.document.name_dv}
            </p>
          </div>
          <div className="w-full">
            <div className="w-full flex px-6 lg:px-[20rem] mt-6">
              <div className="w-full flex flex-col gap-6 bg-[#F9F8F9] items-center px-6 py-4 rounded-lg rtl">
                <div className="w-full flex flex-col gap-1 border-b-[1px] border-[#E9E1E9] pb-4">
                  <p className="font-rasmee text-[16px] text-[#8D898D]">
                    ފައިލް
                  </p>
                  <p className="font-waheed text-[20px]">
                    {data.document.name_dv}
                  </p>
                </div>
                <div className="w-full flex lg:flex-row flex-col gap-4">
                  <div className="w-full flex flex-col gap-1">
                    <p className="font-rasmee text-[16px] text-[#8D898D]">
                      ތާރީޙް
                    </p>
                    <p className="ltr text-right text-[16px]">
                      {moment(data.document.open_date).format("DD MMMM YYYY")}
                    </p>
                  </div>
                  {data.document.date_expiry && (
                    <div className="w-full flex flex-col gap-1">
                      <p className="font-rasmee text-[16px] text-[#8D898D]">
                        ހަމަވާ ތާރީޙް
                      </p>
                      <p className="ltr text-right text-[16px]">
                        {moment(data.document.date_expiry).format(
                          "DD MMMM YYYY"
                        )}
                      </p>
                    </div>
                  )}
                  <div className="w-full flex flex-col gap-1">
                    <p className="font-rasmee text-[16px] text-[#8D898D]">
                      ކޮންޓްރެކްޓް މުއްދަތު
                    </p>
                    <Link
                      href={data.document.file}
                      className="text-[16px] underline text-[#CF7457]"
                      target="_blank"
                      download
                      rel="noopener noreferrer"
                    >
                      Download
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactBox />
    </>
  );
};

export default ProjectsIndex;
