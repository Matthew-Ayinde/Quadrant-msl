import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-full bg-custom-black lg:px-20 px-6 py-32">
      <div className="w-full text-center">
        <h1 className="text-3xl lg:text-[56px] font-bold text-white">
          Impact is at our core
        </h1>

        <p className="lg:text-xl text-custom-white mt-6">
          We are driven to offer first-rate solution to our clients
        </p>
        <div className="relative w-full h-[200px] lg:h-[640px] mt-14 rounded-2xl">
          <Image
            src="/banner.svg"
            alt=""
            fill
            className="object-cover absolute w-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
