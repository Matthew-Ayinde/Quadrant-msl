import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import facebook from '../public/logo/facebook.png';
import twitter from '../public/logo/twitter.png';
import instagram from '../public/logo/instagram.png';

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white py-6 flex items-center justify-between max-w-screen-xxl lg:px-[90px] px-6 w-full mx-auto lg:relative border-b">
        <div className="container mx-auto px-4 my-10">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-9/12">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">
                  What Customers are saying about Us
                </h2>
                <div className="flex my-5">
                  <span className="mr-2">
                    <Link href={''}>
                      <Image alt="twitter logo" src={twitter} width={40} />
                    </Link>
                  </span>
                  <span className="mr-2">
                    <Link href={''}>
                      <Image alt="facebook logo" src={facebook} width={40} />
                    </Link>
                  </span>
                  <span className="mr-2">
                    <Link href={''}>
                      <Image alt="instagram logo" src={instagram} width={40} />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/12 lg:mx-20">
              <div className="space-y-2">
                <div className="pb-3">
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white text-sm"
                  >
                    Case Studies
                  </a>
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
            <div className="w-full sm:w-1/12">
              <div className="space-y-2">
                <div className="pb-3">
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white text-sm"
                  >
                    Case Studies
                  </a>
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
          </div>

          <hr className="mt-20 mb-2" />

          <div className="flex justify-between mt-5">
            <span className="font-black text-2xl">QMSL</span>
            <span className="text-xs">
              Copyright@2024QMSL. 
              <span className='hidden'>All Rights Reserved </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
