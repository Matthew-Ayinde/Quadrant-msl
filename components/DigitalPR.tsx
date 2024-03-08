import Image from "next/image";
import { Button } from "./ui/button";

const DigitalPR = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
      <div className="items-center w-full flex flex-col lg:flex-row lg:justify-between px-6 lg:px-12">
        <div className="w-full mt-20 lg:mt-0 lg:w-[660px] h-[400px] lg:h-[720px] relative">
          <Image
            src="/digitalPR.svg"
            alt=""
            fill
            className="object-contain w-auto absolute"
          />
        </div>
        <div>
          <div
            className="w-full lg:w-[560px]
          h-[620px] text-[10px] flex flex-col lg:gap-4"
          >
            <h1 className="font-bold text-3xl lg:text-[40px] mb-10">
              Digital PR
            </h1>

            <p className="text-[16px] mb-10">
              Our digital world is driven by influence and authenticity. From
              the content creation to building engagement, we work with our
              clients to curate digital experiences and stories that expand
              influence and market their businesses authentically. Across
              channels and audiences, we drive conversations around our clients'
              products, services, activities, and more to boost their digital
              presence and brand affinity.
              <br />
              <br />
              Our capabilities
              <br />
              - Digital media engagement strategy
              <br />
              - Influencer relations
              <br />
              - Brand marketing
              <br />
              - Digital storytelling and amplification
              <br />
              - Content creation and planning
              <br />
              - SEO advisory
              <br />
              - Listening and analytics
            </p>

            <div className="flex w-[231px]">
              <Button>Explore our Case studies</Button>
              <Button className="underline underline-offset-8 bg-white text-black shadow-transparent hover:bg-white">
                Let's work with you
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPR;
