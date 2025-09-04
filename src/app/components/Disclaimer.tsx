import Link from "next/link";
import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-[#FAFAFA] font-noto">
      <div className="site-width py-12 mx-auto">
        <div>
          <h2 className="font-semibold font-noto">DISCLAIMER:</h2>
          <p className="font-medium">
            As required by the California Consumer Privacy Act (CCPA) and
            California Privacy Rights Act (CPRA), California residents have
            rights regarding their personal information.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold font-noto">Collection & Use of Personal Information</h3>
          <p className="">
            We collect identifiers (name, email, IP address), financial data,
            commercial activity, and browsing history for security, fraud
            prevention, and business operations.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold font-noto">Data Sharing & Disclosure</h3>
          <p className="">
            We share data with affiliated companies, service providers,
            marketing partners, and legal entities as required. Paycio does not
            sell personal information in the traditional sense and does not
            process data of users under 16.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold font-noto">Call Permissions</h3>
          <p className="">
            For security, Paycio may verify phone numbers via automated calls
            but will not use this feature for other purposes without consent.
          </p>
        </div>

        <div className="mt-5">
          For more details, refer to our complete{" "}
          <Link href={"/privacy-policy"}
          className="text-thm font-semibold hover:underline"
          >privacy policy. </Link>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
