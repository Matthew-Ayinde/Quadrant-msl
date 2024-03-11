import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full lg:h-screen h-[60vh] relative bg-black">
      {/* <div className="w-full">
        <h1 className="text-center text-3xl lg:text-[56px] font-bold text-white">
          Impact is at our core
        </h1>
        <p className="text-center text-base lg:text-xl text-gray-500 py-5">
          We are driven to offer first-rate solution to our clients
        </p>
        <div className="relative w-full mb-10 h-[200px] lg:h-[640px]">
          <Image
            src="/banner.svg"
            alt=""
            fill
            className="object-contain absolute w-auto"
          />
        </div>
      </div> */}

      <video
        className="absolute object-cover w-full h-full"
        preload="auto"
        loop
        muted
        autoPlay
        // controls
        controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
        disablePictureInPicture
        disableRemotePlayback
        playsInline
      >
        <source src="/videos/qmsl-video.mp4" type="video/mp4" />
        <Image
          src="/banner.svg"
          alt=""
          fill
          className="absolute object-cover w-auto"
        />
      </video>
    </div>
  );
};

export default Banner;
