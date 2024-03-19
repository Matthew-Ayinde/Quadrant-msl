import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import CardIcon from "./CardIcon";

const MissingPiece = () => {
  return (
    <div className="max-w-screen-xxl w-full mx-auto lg:px-[90px] px-6   bg-black m-0 pb-40">
      <p className="text-center text-white lg:text-[56px] text-[32px] py-36 font-bold">
        You&#39;re the missing piece of our team!
        <br />
        Check out our open positions.
      </p>

      <CardIcon />

      <div className="bg-white py-10 text-black p-10 border-2 border-black rounded-2xl mt-40">
        <p className="lg:text-[48px] text-[28px] font-bold text-[#333333]">
          {" "}
          Not Seeing a position that&#39;s right for you?
        </p>
        <p className="font-normal text-[#4F4F4F] my-8 text-[18px]">
          Don&#39;t worry, we&#39;re always happy to hear from talented people
          interested in joining QMSL
        </p>
        <Button className="bg-white text-[#333333] py-[16px] px[32px] border gap-10 border-[#333333] rounded hover:bg-inherit w-full">
          <Link href="/">Explore our Career page</Link>
        </Button>
      </div>
    </div>
  );
};

export default MissingPiece;
