import React from "react";
import ContactBox from "../../components/contact-box";
import MemberBox from "../member-box";
import { getCouncilMembers } from "../../actions";

const SeniorMembersIndex = async () => {
  const data = await getCouncilMembers();

  return (
    <>
      <div className="w-full py-[4rem]">
        <div className="container mx-auto flex items-center flex-col justify-between px-6 gap-4">
          <div className="flex w-full items-center justify-center">
            <p className="font-waheed text-[42px] text-center">
              ކައުންސިލް މެންބަރުން
            </p>
          </div>
          <div className="w-full lg:px-[10rem] px-0 mt-12 rtl">
            {data.members.length > 0 && (
              <>
                <div className="flex justify-center mb-6">
                  <MemberBox
                    key={data.members[0].id}
                    member={data.members[0]}
                  />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.members.slice(1).map((member) => (
                    <MemberBox key={member.id} member={member} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <ContactBox />
    </>
  );
};

export default SeniorMembersIndex;
