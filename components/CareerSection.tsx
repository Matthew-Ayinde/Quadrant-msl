import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CareerSection = () => {
  return (
    <>
    <div className="max-w-screen-xxl  pt-[157px] pb-[232px]  lg:py-20  lg:px-[90px] px-6 py-5 w-full mx-auto">
        <Card className="lg:flex space-y-10 bg-custom-black  text-white lg:max-h-[680px] py-[62px] lg:px-[64px]  items-center  lg:justify-between">
            
            <CardContent className="lg:max-w-[467px] flex flex-col space-y-8 ">
             
                    <h1 className="font-black text-[56px]">Careers</h1>
                    <p className="text-lg font-normal leading-[25.2px] text-custom-offwhite">
                        If solving these problems excites you, we're growing quickly
                        and looking for kind, ambitious people to join our team.
                    </p>

                <Link href={""}>
                    <Button className="bg-custom-white hover:bg-custom-white text-custom-black">Explore our Career Page</Button>
                </Link>
            </CardContent>
            <CardContent className="">
                <Image 
                src={"/careerImage.svg"}
                alt=""
                width={395}
                height={356}
                className=""
                />
            </CardContent>

           
        </Card>

        <div className="flex flex-col items-center pt-[197px] space-y-[60px]">
            <div className="flex flex-col items-center ">
                <Button className="border-solid bg-transparent border-black border-2  text-black hover:bg-transparent px-10 py-[12.5px] w-[127px] h-[44px]">Insights</Button>
                <h1 className="font-bold text-2xl lg:text-4xl text-custom-header pt-5 text-center">The world is constantly evolving and so are we</h1>
                <p className="text-lg font-normal pt-2">Find out what we've been up to</p>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 gap-y-10 ">
                {cardContent.map((content, index) => (
                    <Card key={index} className="lg:max-w-[400px] lg:max-h-[440px] rounded-2xl">
                        
                            <Image 
                            src={content.imgSrc}
                            width={399}
                            height={260}
                            alt=''
                            className="rounded-tl-2xl rounded-tr-2xl"
                            />
                        
                        <CardContent className="px-5 py-6 flex flex-col space-y-4">
                                        <p className="text-sm font-normal text-custom-lightgray">{content.date}</p>
                                        <p className="text-xl font-medium text-custom-header">{content.title}</p>
                                        <p className="text-base font-normal text-custom-lightgray">{content.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Button className="bg-custom-black hover:bg-custom-black text-white">View all</Button>
        </div>
    </div>
    </>
    
  )
}

const cardContent = [
    {
        imgSrc: "/image1.svg",
        date: "Date",
        title: "The world is constantly evolving and so are we",
        description: "Find out what we've been up to"
    },
    {
        imgSrc: "/image2.svg",
        date: "Date",
        title: "The world is constantly evolving and so are we",
        description: "Find out what we've been up to"
    },
    {
        imgSrc: "/image3.svg",
        date: "Date",
        title: "The world is constantly evolving and so are we",
        description: "Find out what we've been up to"
    },
]

export default CareerSection