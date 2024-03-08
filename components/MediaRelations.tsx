import Image from "next/image";
import { Button } from "./ui/button";

const MediaRelations = () => {
    return (
        <div className=" flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
        <div className="items-center w-full flex flex-col lg:flex-row lg:justify-between px-6 lg:px-12">
          <div className="w-full mt-20 lg:mt-0 lg:w-[660px] h-[400px] lg:h-[720px] relative">
            <Image
              src="/mediaRelations.svg"
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
                Media Relations
              </h1>

              <p className="text-[16px] mb-10">
                Our commitment extends beyond coverage and media placements, 
                we amplify infuence and create opportunities for impact. We equip our
                clients with the indispensable tools needed to thrive in today's media landscape as thought leaders. Our team of media specialists design and execute bespoke media campaigns to raise the position and core messages of each client. With us, your brand is not just seen; it's celebrated.
                <br />
                <br />
                Our capabilities
                <br />
                - Thought leadership and positioning
                <br />
                - Media Training
                <br />
                - Listening and analytics
                <br />
                - Event management
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

export default MediaRelations;