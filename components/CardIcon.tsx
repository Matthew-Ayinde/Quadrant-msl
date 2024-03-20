'use client';

import React from 'react';
import Image from 'next/image';
import PositionData from '@/data/PositionData';
import { useState } from 'react';

const CardIcon = () => {
  const [selectedDiv, setSelectedDiv] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setSelectedDiv(idx);
  };

  return (
    <div className="flex flex-col gap-10">
      {PositionData.map((data, idx) => (
        <div
          key={idx}
          className={
            "flex flex-col lg:flex-row hover:bg-white bg-custom-deepgray text-white hover:text-custom-deepgray rounded-xl lg:pl-8 pl-4 pr-14 py-8 ${selectedDiv === idx ? 'bg-red-500' : 'bg-white'}"
          }
          onClick={() => handleClick(idx)}
        >
          <div className="lg:w-1/2 lg:m-0 mb-4">
            <div className="flex flex-col">
              <div className="font-normal text-16 lg:mb-6 mb-2">
                Position
              </div>
              <div className="font-medium">{data.position}</div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:m-0 mb-4">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div>
                    <div className="flex flex-col lg:m-0 mb-4">
                      <div className="font-normal text-16 lg:mb-6 mb-2">
                        Location
                      </div>
                      <div className="font-medium text-xl ">{data.location}</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <div className="font-normal text-16 lg:mb-6 mb-2">
                        Contract Type
                      </div>
                      <div className="font-medium text-xl lg:m-0 mb-4">
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









