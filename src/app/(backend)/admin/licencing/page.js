import React from "react";

const LicensingIndex = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Licensing</h1>
      </div>
      <div className="py-6 lg:px-[16rem] md:px-[10rem] px-2">
        <ul className="pl-6">
          <li className="mb-4">
            <h2 className="text-lg font-semibold">Acceptance of Terms</h2>
            <br />
            By using Kintiq Pvt. Ltd.'s Atholhu Content Management System (CMS),
            you agree to be bound by these Terms and Conditions. If you do not
            agree to these terms, please do not use the CMS.
          </li>
          <li className="mb-4">
            <h2 className="text-lg font-semibold">License Grant</h2>
            <br />
            Kintiq Pvt. Ltd. grants you a non-exclusive, non-transferable
            license to use the Atholhu CMS for your business purposes, subject
            to these Terms and Conditions.
          </li>
          <li className="mb-4">
            <h2 className="text-lg font-semibold">
              Intellectual Property Rights
            </h2>
            <br />
            All intellectual property rights in the Atholhu CMS, including but
            not limited to copyrights, patents, trademarks, and trade secrets,
            are owned by Kintiq Pvt. Ltd.
          </li>
          <li className="mb-4">
            <h2 className="text-lg font-semibold">Prohibited Actions</h2>
            <br />
            You are expressly prohibited from:
            <ul className="list-disc pl-6">
              <li>
                a) Making copies of the Atholhu CMS software, except for backup
                purposes.
              </li>
              <li>
                b) Distributing, sublicensing, or transferring the Atholhu CMS
                to any third party.
              </li>
              <li>
                c) Reverse engineering, decompiling, or disassembling the
                Atholhu CMS.
              </li>
              <li>
                d) Removing or altering any copyright notices or other
                proprietary markings.
              </li>
              <li>e) Reselling the Atholhu CMS or any part thereof.</li>
            </ul>
          </li>
          <li className="mb-4">
            <h2 className="text-lg font-semibold">Permitted Modifications</h2>
            <br />
            You are permitted to make changes to the Atholhu CMS for your own
            use, provided that such changes do not infringe on Kintiq Pvt.
            Ltd.'s intellectual property rights or violate these Terms and
            Conditions.
          </li>
          <li className="mb-4">
            <h2 className="text-lg font-semibold">Support and Updates</h2>
            <br />
            Kintiq Pvt. Ltd. will provide support and updates as outlined in
            your service agreement. The terms of support and updates may be
            subject to change.
          </li>
          <li className="mb-4">
            <h2 className="text-lg font-semibold">Limitation of Liability</h2>
            <br />
            Kintiq Pvt. Ltd. shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from the use
            or inability to use the Atholhu CMS.
          </li>
          <li className="mb-4">
            <h2 className="text-lg font-semibold">Termination</h2>
            <br />
            Kintiq Pvt. Ltd. reserves the right to terminate your license to use
            the Atholhu CMS if you violate these Terms and Conditions.
          </li>
          <li className="mb-4">
            <h2 className="text-lg font-semibold">Governing Law</h2>
            <br />
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of [Your Jurisdiction].
          </li>
          <li className="mb-4">
            <h2 className="text-lg font-semibold">
              Changes to Terms and Conditions
            </h2>
            <br />
            Kintiq Pvt. Ltd. reserves the right to modify these Terms and
            Conditions at any time. Your continued use of the Atholhu CMS after
            such changes constitutes acceptance of the new Terms and Conditions.
          </li>
        </ul>
        <p className="mt-4 px-6">
          By using the Atholhu CMS, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default LicensingIndex;
