"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import CloseIcon from "./CloseIcon";
import OpenIcon from "./OpenIcon";
import NavLinks from "./NavLinks";
import Image from "next/image";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open);
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="">
      <div className="flex items-center justify-between max-w-screen-xxl lg:px-20 px-6 py-5 w-full mx-auto bg-white lg:relative">
        {/* logo */}
        <div className="lg:w-fit w-full z-30 flex items-center justify-between lg:pb-0">
          {/* <Link href={"/"}>
            <div className="font-black text-2xl">QMSL</div>
          </Link> */}
          <Link
            href={"/"}
            className="h-[39px] w-[150px] flex justify-center items-center relative"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Image
              src={"/logo.png"}
              alt={""}
              className="absolute object-contain"
              fill
            />
          </Link>

          <div onClick={toggleMobileMenu} className="lg:hidden cursor-pointer">
            {open ? <CloseIcon /> : <OpenIcon />}
          </div>
        </div>

        {/* large screen links */}
        <div className="lg:flex hidden items-center gap-10 flex-1 ml-10">
          <NavLinks setOpen={setOpen} />
        </div>

        <Button
          className="bg-white px-12 py-4 rounded-[8px] text-custom-black hidden lg:flex items-center justify-center border-solid border border-custom-black hover:bg-inherit shadow-none"
          asChild
        >
          <Link href="/contact" className="text-sm">
            Get in Touch
          </Link>
        </Button>

        {/* mobile view */}
        <ul
          className={`lg:hidden uppercase absolute w-full h-full bottom-0 bg-white z-10 py-32 duration-500 ease-in-out transition-all ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="space-y-12 px-6">
            <NavLinks setOpen={setOpen} />

            <div className="w-full">
              <Button
                className="px-12 py-[17px] rounded-[8px] text-custom-black bg-white lg:hidden flex items-center justify-center mt-16 border-solid border border-custom-black hover:bg-inherit shadow-none"
                asChild
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
