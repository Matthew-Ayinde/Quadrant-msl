/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Image from "next/image";
import Link from "next/link";
import facebook from "../public/logo/facebook.png";
import twitter from "../public/logo/twitter.png";
import instagram from "../public/logo/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-custom-white py-6 flex items-center justify-between max-w-screen-xxl lg:px-[90px] px-6 w-full mx-auto border-b">
        <div className="mx-auto my-10 w-full">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full flex-1 gap-10">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">
                  What Customers are saying about Us
                </h2>
                <div className="flex my-5">
                  <span className="mr-2">
                    <Link href={""}>
                      <Image alt="twitter logo" src={twitter} width={40} />
                    </Link>
                  </span>
                  <span className="mr-2">
                    <Link href={""}>
                      <Image alt="facebook logo" src={facebook} width={40} />
                    </Link>
                  </span>
                  <span className="mr-2">
                    <Link href={""}>
                      <Image alt="instagram logo" src={instagram} width={40} />
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-x-52 gap-y-10 w-full max-w-96">
              <div className="w-full">
                <div className="space-y-2">
                  <div className="pb-3">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Case Studies
                    </Link>
                  </div>
                  <div className="pb-3">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Solutions
                    </a>
                  </div>
                  <div className="pb-3">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      About Us
                    </a>
                  </div>
                  <div className="pb-3">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      What's New
                    </a>
                  </div>
                  <div className="pb-3">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Q-intel
                    </a>
                  </div>
                  <div className="pb-3">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Q-impact
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="space-y-2">
                  <div className="pb-3">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Case Studies
                    </Link>
                  </div>
                  <div className="pb-3">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Solutions
                    </Link>
                  </div>
                  <div className="pb-3">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="pb-3">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      What's New
                    </Link>
                  </div>
                  <div className="pb-3">
                    <Link
                      href="#"
                      className="block text-gray-300 hover:text-white text-sm"
                    >
                      Q-intel
                    </Link>
                  </div>
                  <div className="pb-3">
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

          <hr className="mt-20 mb-2" />

          <div className="flex lg:justify-between items-center mt-5 gap-5 flex-col lg:flex-row">
            <p className="font-black text-2xl">QMSL</p>

            <p className="text-sm text-custom-offwhite">
              Copyright@2024QMSL.
              <span className=""> All Rights Reserved </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
