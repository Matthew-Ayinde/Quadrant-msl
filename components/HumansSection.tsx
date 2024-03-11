import React from 'react'
import Image from 'next/image'
import { Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
  



const HumansSection = () => {
  return (
    <div className="w-full bg-custom-lightergray  max-w-screen-xxl lg:py-20  lg:px-[90px] px-6 py-5  mx-auto">
        <div className=" flex flex-col justify-center items-center pt-[160px] space-y-[88px] pb-[200px]">
        <div className="text-center w-[855px] flex flex-col space-y-6 items-center">
            <Button className="border-solid  bg-transparent border-black border-2  text-black hover:bg-transparent px-10 py-[12.5px] w-[113px] h-[44px]">Team</Button>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-[57px] text-custom-header">
               Humans of QMSL
            </h1>
            <p className="font-normal text-lg ">
            We are a dynamic team with a robust knowledge that keeps pushing the creative envelope.
            Our team of strategists, creatives, and innovators is made up of experts with a unified passion for excellence.
            </p>
            <p className="text-custom-paragraph text-base font-normal ">
            We know great work begins with great people and we’ve got the industry’s best. Meet the Humans of Quadrant MSL
            </p>
            
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-[76px] gap-y-10 lg:px-20 px-5 ">
            {HumansDetails.map((human, index) => (
                            <Card key={index} className="lg:max-w-[400px] lg:max-h-[440px] flex flex-col justify-center items-center px-[70px] pb-[31px] pt-5">
                            <CardContent>
                                <Image 
                                src={""}
                                alt=""
                                width={240}
                                height={240}
                                className="rounded-full bg-custom-offwhite"
                                />
                            </CardContent>
                            <CardFooter className=" flex flex-col justify-center items-center space-y-3 w-[200px] h-[111px] pt-5 ">
                                <p className="text-[20px] font-bold w-[200px]  text-center">{human.name}</p>
                                <p className="border-b border-solid border-custom-borderBottom pb-2 w-[200px] text-center">{human.position}</p>
                                
                                <div className="flex">
                                    <Image 
                                    src={"/Twitter.svg"}    
                                    width={24}
                                    height={24}
                                    alt=''
                                    />
                                    <Image 
                                    src={"/Linkedin.svg"}
                                    width={24}
                                    height={24}
                                    alt=''
                                    />
            
                                </div>
                            </CardFooter>
                        </Card>
            ))}
        </div>
        </div>

    </div>
  )
}

const HumansDetails = [
    {
        imgSrc: "",
        name: "Ranti Olaniyan ",
        position: "Business Lead "
    },
    {
        imgSrc: "",
        name: "Oluwaseyi Tomosori",
        position: "Designation"
    },
    {
        imgSrc: "",
        name: "Samuel Akinnuga ",
        position: "Designation"
    },
    {
        imgSrc: "",
        name: "Firstname Lastname",
        position: "Designation"
    },
    {
        imgSrc: "",
        name: "Firstname Lastname",
        position: "Designation"
    },
    {
        imgSrc: "",
        name: "Firstname Lastname",
        position: "Designation"
    },
    {
        imgSrc: "",
        name: "Firstname Lastname",
        position: "Designation"
    },
    {
        imgSrc: "",
        name: "Firstname Lastname",
        position: "Designation"
    },
    {
        imgSrc: "",
        name: "Firstname Lastname",
        position: "Designation"
    },
]

export default HumansSection