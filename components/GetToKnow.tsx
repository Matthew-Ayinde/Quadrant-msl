import React from 'react';
import GetToKnowData from '@/data/GetToKnowData';
import Image from 'next/image';

const GetToKnow = () => {
  return (
    <div className="max-w-screen-xxl w-full mx-auto lg:px-20 px-6 my-40">
      <div className="font-bold lg:text-[48px] text-[30px] text-[#011B33] text-center">
        Get to know us a little better
      </div>
      <p className="font-normal text-[18px] mb-[40px] text-[#4F4F4F] text-center">
        Find out what we&#39;ve been up to
      </p>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-8 rounded my-30">
        {GetToKnowData.map((service, index) => (
          <div
            key={index}
            className="w-full lg:max-w-[400px] bg-[#f5f5f5] lg:h-auto border-2 rounded-xl px-8 pt-4 border-white lg:my-8 my-3"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={30}
              height={30}
              className="mt-8"
            />
            <p className="font-bold text-left mt-3 mb-5 text-[#40px]">
              {service.title}
            </p>
            <div className="font-normal mb-16 text-[16px]">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetToKnow;
