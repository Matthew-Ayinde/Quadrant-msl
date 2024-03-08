import Image from "next/image";
import Contents from "@/data/Servicedata";
import { Button } from "./ui/button";

const ServiceCard = () => {
  return (
    <>
      <div className="flex flex-col gap-10 lg:gap-20 py-4 lg:py-20">
        <div className=" flex flex-col w-full justify-center items-center gap-2 lg:gap-6 ">
          <Button className="bg-transparent shadow-none text-black border border-black hover:bg-white flex">
            Services
          </Button>
          <h1 className="text-5xl lg:text-[56px] font-bold text-center">
            Our Services
          </h1>
          <div className="w-full flex flex-col">
            <p className="text-base text-center lg:text-[18px] text-[#4F4F4F]">
              We are driven to offer first-rate solutions to our clients
            </p>
            <p className="text-base text-center lg:text-[18px] text-[#4F4F4F]">
              From advisory to execution we deliver distinctive and creative
              services that add value and
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {Contents.map((service, index) => (
            <div
              key={index}
              className={`w-full flex items-center flex-col lg:flex-row lg:justify-between gap-4 lg:gap-10 px-6 lg:px-12 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse bg-[#F5F5F5]"}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:w-full h-[400px] lg:h-[720px] relative">
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
                <h1 className="font-bold text-3xl lg:text-[40px] mb-10">
                  {service.title}
                </h1>

                <div
                  className="text-[16px]"
                  dangerouslySetInnerHTML={{ __html: service.p }} // Add this line
                />

                <ul className="text-[16px] mb-10">
                  {/* {service.p} */}
                  <br />
                  Our capabilities
                  {service.capability.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-4 lg:justify-start justify-center items-center">
                  <Button className="h-[44px] w-[231px]">
                    Explore our Case studies
                  </Button>
                  <Button className="underline underline-offset-8 text-black shadow-none bg-transparent hover:bg-transparent">
                    Let's work with you
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
