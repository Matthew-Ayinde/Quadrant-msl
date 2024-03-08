import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full bg-black px-6 lg:px-20">
            <div className="pt-[80px] w-full">
                <h1 className="text-center text-3xl lg:text-[56px] font-bold text-white">Impact is at our core</h1>
                <p className="text-center text-base lg:text-xl text-gray-500 py-5">We are driven to offer first-rate solution to our clients</p>
                <div className="relative w-full mb-10 h-[200px] lg:h-[640px]">
                    <Image
                        src="/banner.svg"
                        alt=""
                        fill
                        className="object-contain absolute w-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner;