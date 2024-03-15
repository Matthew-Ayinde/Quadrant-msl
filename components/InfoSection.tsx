import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"


interface MyButtonProps {
    btnName: string
}

const InfoSection: React.FC<MyButtonProps> = ({btnName}) => {
  return (
    <div className="flex flex-col items-center pt-[197px] space-y-[60px] lg:my-[282px] my-20 px-5 lg:px-20">
    <div className="flex flex-col items-center ">
        <Button className=" shadow-none border-solid bg-transparent border-black border-2  text-black hover:bg-transparent px-10 py-[12.5px] w-[127px] h-[44px] mb-5">{btnName}</Button>
        <h1 className="font-bold text-2xl lg:text-4xl text-custom-header pt-5 text-center">The world is constantly evolving and so are we</h1>
        <p className="text-lg font-normal pt-2">Find out what we&apos;ve been up to</p>
    </div>
    <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 gap-y-10 mt-[60px]">
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
    <Button className="bg-custom-black hover:bg-custom-black text-white shadow-none mt-[60px] py-[14px] px-16 text-base">View all</Button>
</div>
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



export default InfoSection