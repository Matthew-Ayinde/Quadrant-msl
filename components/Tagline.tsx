import React from 'react';
import Image from 'next/image';
import TaglineData from '@/data/TaglineData';

const TaglineComponent = () => {
  return (
    <div className="max-w-screen-xxl w-full mx-auto lg:px-[90px] px-6 mt-10 bg-[#f5f5f5] py-10 lg:py-20">
      <p className="font-bold my-5 lg:text-[48px] text-[30px] lg:pt-36 pt-22 pb-14 text-center">
        You will be a Great Fit if you
      </p>

      <div className="w-full flex flex-wrap gap-8 justify-center rounded my-30">
        {TaglineData.map((service, index) => (
          <div
            key={index}
            className="w-full lg:max-w-[560px] py-[56px] items-center bg-white lg:h-auto border-2 px-8 border-white rounded my-3"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={30}
              height={30}
            />
            <p className="font-bold text-left mt-3 mb-5 lg:text-[24px] text-[20px]">
              {service.title}
            </p>
            <div className="text-[16px] font-normal">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaglineComponent;
