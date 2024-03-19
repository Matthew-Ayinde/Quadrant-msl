import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="w-full lg:h-screen h-[60vh] relative bg-black">
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
    </div>
  );
}
