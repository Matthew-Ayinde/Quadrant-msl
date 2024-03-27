import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-black max-w-screen-xxl mx-auto">
      <div className="bg-black text-custom-white flex items-center justify-between  lg:px-20 px-6 w-full  border-b">
        <div className="mx-auto my-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-32 mb-20 lg:mt-14 mt-10 gap-y-[60px]">
            <div className="w-full flex-1">
              <div className="">
                <Image
                  src={'LogoBlack.svg'}
                  alt="logo"
                  width={276}
                  height={24}
                />

                <div className="flex lg:mt-16 mt-10 items-center gap-8">
                  <span className="mr-2">
                    <Link href={''}>
                      <Image
                        alt="twitter logo"
                        src={'/twitter.svg'}
                        width={48}
                        height={48}
                      />
                    </Link>
                  </span>
                  <span className="mr-2">
                    <Link href={''}>
                      <Image
                        alt="facebook logo"
                        src={'/facebook.svg'}
                        width={48}
                        height={48}
                      />
                    </Link>
                  </span>
                  <span className="mr-2">
                    <Link href={''}>
                      <Image
                        alt="instagram logo"
                        src={'/instagram.svg'}
                        width={48}
                        height={48}
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-y-[72px] w-full lg:w-1/12 lg:max-w-96 my-40xl lg:my-0">
              <div className="ml-5">
                <div className="space-y-10 font-normal">
                  <div className="">
                    <Link
                      href="#"
                      className="block text-custom-white hover:text-white text-sm"
                    >
                      Case Studies
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-custom-white hover:text-white text-sm"
                    >
                      Solutions
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-custom-white hover:text-white text-sm"
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-custom-white hover:text-white text-sm"
                    >
                      What's New
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-custom-white hover:text-white text-sm"
                    >
                      Q-intel
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="block text-custom-white hover:text-white text-sm"
                    >
                      Q-impact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:text-center text-left gap-8 flex-col  pt-6 lg:px-2 border-t border-[#828282] mb-12">
            <div className="text-custom-offwhite lg:text-center font-light">
              <div className="flex lg:flex-row flex-col lg:justify-center">
                <div className="flex mr-1 text-sm">Copyright@2024 QMSL.</div>
                <div className="flex">All Rights Reserved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
