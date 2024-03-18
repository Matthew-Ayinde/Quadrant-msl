import React from "react";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="bg-black text-custom-white flex items-center justify-between max-w-screen-xxl lg:px-20 px-6 w-full mx-auto border-b">
        <div className="mx-auto my-10 w-full">
          <div className="flex flex-col lg:flex-row lg:mb-32 mb-20 lg:mt-14 mt-10 gap-y-[60px]">
            <div className="w-full flex-1">
              <div className="">
                <h2 className="lg:text-[32px] font-bold text-2xl">
                  What Customers are saying <br /> about Us
                </h2>

                <div className="flex lg:mt-16 mt-8 items-center gap-8">
                  <span className="mr-2">
                    <Link href={""}>
                      <Image
                        alt="twitter logo"
                        src={"/twitter.svg"}
                        width={48}
                        height={48}
                      />
                    </Link>
                  </span>
                  <span className="mr-2">
                    <Link href={""}>
                      <Image
                        alt="facebook logo"
                        src={"/facebook.svg"}
                        width={48}
                        height={48}
                      />
                    </Link>
                  </span>
                  <span className="mr-2">
                    <Link href={""}>
                      <Image
                        alt="instagram logo"
                        src={"/instagram.svg"}
                        width={48}
                        height={48}
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-y-[72px] w-full lg:w-1/3 lg:max-w-96">
              <div className="">
                <div className="space-y-10">
                  <div className="">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Case Studies
                    </Link>
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Solutions
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      About Us
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      What's New
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Q-intel
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Q-impact
                    </a>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="space-y-10">
                  <div className="">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Case Studies
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Solutions
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      What's New
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Q-intel
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Q-impact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:justify-between lg:items-center gap-8 flex-col lg:flex-row pt-6 lg:px-2 border-t border-[#828282] mb-12">
            <p className="font-black text-[32px] text-custom-white">QMSL</p>

            <p className="text-sm text-custom-offwhite">
              Copyright@2024QMSL.
              <span className=""> All Rights Reserved </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
