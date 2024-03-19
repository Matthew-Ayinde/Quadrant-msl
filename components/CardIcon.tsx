import React from 'react';
import Image from 'next/image';
import PositionData from '@/data/PositionData';

const CardIcon = () => {
  return (
    <div className="flex flex-col gap-10">
      {PositionData.map((data, idx) => (
        <div
          key={idx}
          className="flex flex-col lg:flex-row bg-white hover:bg-custom-deepgray hover:text-white rounded-xl pl-8 pr-14 py-8"
        >
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              <div className="font-normal text-custom-lightgray hover:text-custom-offwhite text-16 lg:mb-6 mb-2">
                Position
              </div>
              <div className="font-medium text-xl">{data.position}</div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div>
                    <div className="flex flex-col">
                      <div className="font-normal text-customlightgray text-16 lg:mb-6 mb-2 hover:text-custom-offwhite">
                        Location
                      </div>
                      <div className="font-medium text-xl">{data.location}</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <div className="font-normal text-customlightgray text-16 lg:mb-6 mb-2 hover:text-custom-offwhite ">
                        Contract Type
                      </div>
                      <div className="font-medium text-xl">
                        {data.contractType}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex lg:justify-end justify-start">
                <Image
                  src={data.image}
                  width={32}
                  alt="arrow image"
                  height={32}
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
