import React from 'react';
import Image from 'next/image';
import TaglineData from '@/data/TaglineData';

const TaglineComponent = () => {
  return (
    <div className="max-w-screen-xxl w-full mx-auto mt-10 px-6 lg:px-[64px] bg-[#f5f5f5] py-10 lg:py-20">
      <p className="font-medium text-[16px] text-center lg:mt-28 ">Tagline</p>
      <p className="font-bold my-4 lg:my-0 lg:text-[48px] text-[34px] pt-22 lg:pt-7 pb-14 text-center">
        You will be a Great Fit if you
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 rounded">
        {TaglineData.map((service, index) => (
          <div
            key={index}
            className="w-full lg:max-w-[640px] h-[364px] lg:h-[330px] flex flex-col justify-center bg-white border-2 px-8 border-white rounded"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={30}
              height={30}
            />
            <p className="font-bold text-left mt-3 mb-5 lg:text-2xl text-sm">
              {service.title}
            </p>
            <div className="text-sm lg:text-base font-normal">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaglineComponent;
