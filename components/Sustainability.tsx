import Image from "next/image";
import { Button } from "./ui/button";

const Sustainability = () => {
    return (
        <div className="bg-[#F5F5F5] flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
        <div className="items-center w-full flex flex-col lg:flex-row lg:justify-between px-6 lg:px-12 lg:flex-row-reverse">
          <div className="w-full lg:mt-0 lg:w-[660px] h-[400px] lg:h-[720px] relative">
            <Image
              src="/sustainability.png"
              alt=""
              fill
              className="object-contain w-auto absolute"
            />
          </div>
          <div>
            <div
              className="w-full lg:w-[560px] h-[620px] text-[10px] flex flex-col lg:gap-4"
            >
              <h1 className="font-bold text-3xl lg:text-[40px] mb-10">
                Sustainability and impact advisory
              </h1>

            <p className="text-[16px] mb-10">
                Purpose is at the center of what we do - and we help our clients live out theirs to the fullest as well. We thrive at supporting clients integrate sustainable practices that deepen their impact and opportunities to connect with their partners and the communities they serve. Through strategic alliances, grassroots initiatives, advocacy campaigns, and deft impact advisory, we support our clients in authentically delivering on their promises and benchmarks
                <br />
                <br />
                Our capabilities
                <br />
                - Investor relations
                <br/> 
                - Policy research and advisory
                <br /> 
                - Benchmark reporting
              </p>
              
              <div className="flex w-[231px]">
                <Button>Explore our Case studies</Button>
                <Button className="underline underline-offset-8 bg-[#F5F5F5] text-black shadow-transparent hover:bg-[#F5F5F5]">
                  Let's work with you
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Sustainability;