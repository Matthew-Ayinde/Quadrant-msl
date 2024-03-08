import Image from "next/image";
import { Button } from "./ui/button";

const CrisisSection = () => {
    return (
        <div className="bg-[#F5F5F5] flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
        <div className="items-center w-full flex flex-col lg:flex-row lg:justify-between px-6 lg:px-12 lg:flex-row-reverse">
          <div className="w-full mt-20 lg:mt-0 lg:w-[660px] h-[400px] lg:h-[720px] relative">
            <Image
              src="/crisis.svg"
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
                Crisis Management
              </h1>

            <p className="text-[16px] mb-10">
                Our belief is simple: the best crisis is the one that never occurs. We stand side by side with our clients and work tirelessly to prepare, predict, pivot, and respond swiftly before issues escalate into crises - and beyond. Using our proprietary vulnerability assessment framework for crisis management, we support companies in managing their reputations and market positions with strategic counsel and comprehensive crises mitigation strategies that mitigate repercussions.
                <br />
                <br />
                Our capabilities
                <br />
                - Reputation management
                <br/> 
                - Vulnerability assessment and strategic counsel
                <br /> 
                - Risk response strategy and execution
                <br />
                - Crisis mitigation mapping
                <br />
                - Community management
                <br />
                - Montoring and intelligence
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

export default CrisisSection;