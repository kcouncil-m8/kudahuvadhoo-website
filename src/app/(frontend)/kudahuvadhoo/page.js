import { getStats } from "../actions";
import ContactBox from "../components/contact-box";

const KudahuvadhooIndex = async () => {
  const data = await getStats();

  return (
    <>
      <div className="w-full py-[4rem]">
        <div className="container mx-auto flex items-center flex-col justify-between px-6 gap-4">
          <div className="flex w-full items-center justify-center flex-col gap-6">
            <img src="/images/nishaan.svg" className="h-[60px]" />
            <p className="font-waheed text-[42px] text-center">
              ދ.ކުޑަހުވަދޫ ކައުންސިލް އިދާރާ
            </p>
          </div>
          <div className="mt-6">
            <p className="font-rasmee text-[16px] text-[#68656F] lg:px-[17rem] md:px-[10rem] px-6 text-center leading-loose">
              މާލޭ ސިޓީ ކައުންސިލަކީ ޤާނޫނު ނަމްބަރ 7/2010 “ދިވެހިރާއްޖޭގެ
              އިދާރީ ދާއިރާތައް ލާމަރުކަޒީ އުސޫލުން ހިންގުމުގެ ޤާނޫން” އިން ބާރު
              ލިބިގެން އުފައްދާފައިވާ މިނިވަން މުސްތަޤިއްލު މުވައްސަސާއެކެވެ.
              ހަމައެއާއެކު އަމިއްލަ ނަމުގައި ދައުވާކުރުމާއި، ދައުވާ ލިބިގަތުގެ
              ބާރާއި އަދި އަމިއްލަ ނަމުގައި މުޢާމަލާތްކުރުމުގެ ހައިސއްޔަތު
              ލިބިފައިވާ ވަކި ސިއްކައެއް އޮންނަ ޤާނޫ ޝަޚުސެކެވެ. ލާމަރުކަޒީ
              ޤާނޫނު ވުޖޫދުވުމާގުޅިގެން ކުރިން ހިންގަމުން އައި މާލޭ
              މުނިސިޕަލްޓީގެ އެންމެހާ މަސައްކަތްތަކާ އަދި މުނިސިޕަލްޓީގެ
              ބެލުމުގެ ދަށުގައި ހުރި އެންމެހާ ވަޞީލަތްތަކާ، ހަރުމުދަލާ، ތަންތަން
              އަދި މުވައްޒަފުން، ޤާނޫނުގައި އޮންނަ ހަމައިގެމަތިން މާލޭ ސީޓީ
              ކައުންސިލަށް ނަގުލުކުރެވުނެވެ.
            </p>
          </div>
          <div className="w-full items-center justify-center px-0 mt-6">
            {/* stats */}
            <div className="w-full flex items-center justify-center">
              <div className="lg:w-auto w-full grid grid-cols-1 md:grid-cols-3 md:divide-x divide-x-0 md:divide-y-0 divide-y divide-[#E2D9E2] py-3 lg:px-0 px-[6rem]">
                <div className="px-10 py-4 lg:py-2 flex justify-center items-center">
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
                <div className="px-10 py-4 lg:py-2 flex justify-center items-center">
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
                <div className="px-10 py-4 lg:py-2 flex justify-center items-center">
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
            </div>
            {/* .stats */}
          </div>
          <div className="w-full flex items-center justify-center px-6 lg:px-[16rem] md:px-[10rem] mt-6">
            <img src="/images/map.svg" className="w-full" />
          </div>
        </div>
      </div>
      <ContactBox />
    </>
  );
};

export default KudahuvadhooIndex;
