import React from 'react';
import Image from 'next/image';
import PositionData from '@/data/PositionData';

const CardIcon = () => {
  return (
    <div>
      {PositionData.map((service, index) => (
        <div
          key={index}
          className="w-full bg-white rounded-xl overflow-hidden p-[15px] mb-3"
        >
          <div className="w-full flex flex-col lg:flex-row justify-between px-10 py-2 ">
            <div className="w-1/2">
              <p className="text-sm text-gray-500 mb-5">Position</p>
              <p className="mb-3">{service.position}</p>
            </div>
            <div className="w-1/2 flex flex-col lg:flex-row lg:items-center items-start justify-between">
              <div className="">
                <p className="text-sm text-gray-500 mb-5">Location</p>
                <p className="mb-3">{service.location}</p>
              </div>
              <div className="">
                <p className="text-sm text-gray-500 mb-5">Contract Type</p>
                <p className="mb-3">{service.contractType}</p>
              </div>
              <div className=" text-black mb-5">
                <Image
                  src={service.image}
                  width={40}
                  alt="arrow image"
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardIcon;
