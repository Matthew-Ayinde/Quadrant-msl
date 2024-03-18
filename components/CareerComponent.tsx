import React from "react";
import Image from "next/image";
import CareerComponentData from "@/data/CareerData";

const CareerComponent = () => {
  return (
    <div className="max-w-screen-xxl w-full mx-auto mt-10">
      <div className="lg:px-[90px] px-6">
        <div className="text-center">
          <div className="font-black lg:text-[56px] my-5 text-[30px]">
            That page where you can <br />
            apply for jobs
          </div>
          <div className="mb-5 text-[#828282] font-normal text-[18px]">
            Want to join a curious team to help businesses succeed through their
            PR? <br />
            We&#39;re always looking for talented people.
          </div>
          <button className="bg-black text-[#f2f2f2] px-10 py-3 rounded-lg mb-5 font-normal text-[14px]">
            See Open Positions
          </button>
        </div>

        <div className="flex items-center justify-center mt-5 mb-20">
          <div className="w-full">
            <Image
              className="w-full h-auto"
              src={"/career/Image1.png"}
              alt="Image"
              width={700}
              height={700}
              layout="responsive"
            />
            <div className="text-center font-medium text-[18px]">
              Photo of some QMSL team members
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {CareerComponentData.map((service, index) => (
          <div
            key={index}
            className={`w-full flex items-center flex-col lg:flex-row lg:justify-between gap-4 lg:gap-10 py-30 lg:px-[90px] px-6 ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse bg-[#F5F5F5]"
            }`}
          >
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-full h-[400px] lg:h-[720px] relative ">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain w-auto absolute"
                />
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 
               text-[10px] flex flex-col lg:gap-4"
            >
              <h1 className="font-bold lg:text-[40px] text-[30px] mb-10">
                {service.title}
              </h1>

              <div
                className="text-[16px] pb-10 font-normal"
                dangerouslySetInnerHTML={{ __html: service.descrption }} // Add this line
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerComponent;
