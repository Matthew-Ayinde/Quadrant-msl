import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cardInformation from '@/data/HomePageCardData'
import InfoSection from './InfoSection'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"

const HomePage = () => {
    const btnName = "In the news"
  return (
    <>
        <div className="w-full bg-black mt-20 px-5 lg:px-20 pt-[123px] pb-24">
            <div className="w-full items-center">
                <h1 className="text-center text-2xl lg:text-[56px] font-bold text-white lg:leading-[72.8px]">
                We are a collective of strategists, storytellers
                and creators driven by an innovative spirit 
                </h1>
                <p className="text-center text-base lg:text-xl text-custom-white py-5 font-normal leading-8 mx-8 mt-6 ">
                Our focus stays on walking hand in hand with brands and leaders of tomorrow to build their influence and deliver meaningful 
                impact across their worlds of business.
                </p>
                <div className="relative w-full mb-10 h-[200px] lg:h-[640px] mt-14 rounded-2xl">
                <Image
                    src=""
                    alt=""
                    width={1280}
                    height={600}
                    className="bg-custom-lightgray rounded-2xl"
                    // fill
                    // className="object-contain absolute w-auto"
                />
                </div>
            </div>
        </div>

        <section className=" px-5 lg:px-20 pt-64">
            <div className=" px-0 lg:px-16">
                <h1 className="text-center text-3xl lg:text-[56px] font-bold text-custom-header lg:leading-[73.9px]">Our tool box is a Swiss Army Knife and more</h1>
                <p className="text-center text-base lg:text-xl text-custom-lightgray py-5 font-normal lg:leading-8 lg:mx-[149.5px] mt-6 ">
                    We distill and transfom your communication needs into opportunities to build/unlock your impact 
                    and influence. Our expertise covers: 
                </p>
            </div>

            <div className="">
          {cardInformation.map((card, index) => (
            <div
              key={index}
              className="lg:px-0 px-6 "
            >
              <div
                className={` max-w-screen-xxl w-full mx-auto flex items-center flex-col lg:flex-row lg:justify-between gap-[60px] py-16 lg:py-32 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="w-full h-[300px] lg:h-[600px] relative rounded-2xl">
                    <Image
                      src={card.image}
                      alt={""}
                      fill
                      className="object-cover w-auto absolute rounded-2xl bg-custom-lightgray"
                    />
                  </div>
                </div>

                <div
                  className="w-full lg:w-1/2 text-[10px] flex flex-col lg:gap-4"
                >
                  <h1 className="font-bold text-3xl lg:text-[40px] mb-8 text-custom-header leading-[54.4px]">
                    {card.header}
                  </h1>

                  <div
                    className="text-lg font-normal text-custom-lightgray mb-8"
                    dangerouslySetInnerHTML={{ __html: card.paragraph }} // Add this line
                  />

                
                    <Button className="w-[150px] h-[44px] bg-transparent shadow-none rounded-lg border-custom-black border mr-[109px] text-custom-black hover:bg-transparent">
                      Learn More
                    </Button>
                  
                </div>
              </div>
            </div>
          ))}

            </div>

            <Card className="space-y-10 bg-custom-black  text-white lg:max-h-[680px] pt-[103px] pb-[215px] lg:px-[64px]  items-center lg:mt-[455px]">  
                <CardContent className="items-center flex flex-col space-y-8 ">
                    <h1 className="font-black text-2xl lg:text-[56px]">Let's work together</h1>

                    <Link href={""}>
                        <Button className="bg-transparent hover:bg-transparent px-16 py-[14px] text-white rounded-lg shadow-none">View All</Button>
                    </Link>
                </CardContent>     
            </Card>
        </section>

        <InfoSection btnName = {btnName}/>
    
    </>
  )
}

export default HomePage