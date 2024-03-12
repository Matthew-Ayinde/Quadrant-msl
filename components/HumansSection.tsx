import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const HumansSection = () => {
  return (
    <div className="w-full bg-custom-lightergray  max-w-screen-xxl lg:py-20 lg:px-20 px-6 py-5 mx-auto">
      <div className="flex flex-col justify-center items-center pt-[160px] space-y-[88px] pb-[200px] ">
        <div className="text-center w-[855px] flex flex-col space-y-6 items-center">
          <Button className="border-solid  bg-white border-custom-black border text-custom-black hover:bg-transparent px-10 py-[12.5px] w-[113px] h-[44px] shadow-none text-sm">
            Team
          </Button>
          <h1 className="text-4xl font-bold tracking-tight lg:text-[57px] text-custom-header">
            Humans of QMSL
          </h1>
          <p className="font-normal text-lg ">
            We are a dynamic team with a robust knowledge that keeps pushing the
            creative envelope. Our team of strategists, creatives, and
            innovators is made up of experts with a unified passion for
            excellence.
          </p>
          <p className="text-custom-paragraph text-base font-normal ">
            We know great work begins with great people and we’ve got the
            industry’s best. Meet the Humans of Quadrant MSL
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-[76px] gap-10 w-full">
          {HumansDetails.map((human, index) => (
            <Card
              key={index}
              className="min-h-[440px] px-20 py-8 w-full rounded-2xl flex-col flex items-center justify-center"
            >
              <CardContent className="w-[240px] h-[240px] flex items-center justify-center p-0">
                <Image
                  src={""}
                  alt=""
                  width={240}
                  height={240}
                  className="rounded-full bg-custom-offwhite"
                />
              </CardContent>

              <CardFooter className="mt-[26px] w-full p-0">
                <div className="text-center w-full">
                  <p className="text-xl font-bold text-nowrap">{human.name}</p>

                  <p className="border-b border-solid border-custom-borderBottom mt-3 pb-3 text-custom-lightgray">
                    {human.position}
                  </p>

                  <div className="flex gap-3 items-center justify-center mt-2">
                    <Image src={"/twitterBlack.svg"} width={24} height={24} alt="" />
                    <Image
                      src={"/Linkedin.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const HumansDetails = [
  {
    imgSrc: "",
    name: "Ranti Olaniyan ",
    position: "Business Lead ",
  },
  {
    imgSrc: "",
    name: "Oluwaseyi Tomosori",
    position: "Designation",
  },
  {
    imgSrc: "",
    name: "Samuel Akinnuga ",
    position: "Designation",
  },
  {
    imgSrc: "",
    name: "Firstname Lastname",
    position: "Designation",
  },
  {
    imgSrc: "",
    name: "Firstname Lastname",
    position: "Designation",
  },
  {
    imgSrc: "",
    name: "Firstname Lastname",
    position: "Designation",
  },
  {
    imgSrc: "",
    name: "Firstname Lastname",
    position: "Designation",
  },
  {
    imgSrc: "",
    name: "Firstname Lastname",
    position: "Designation",
  },
  {
    imgSrc: "",
    name: "Firstname Lastname",
    position: "Designation",
  },
];

export default HumansSection;
