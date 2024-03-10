"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import CloseIcon from "./CloseIcon";
import OpenIcon from "./OpenIcon";
import NavLinks from "./NavLinks";

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
      <div className="flex items-center justify-between max-w-screen-xxl lg:px-[90px] px-6 py-5 w-full mx-auto bg-white lg:relative border-b">
        {/* logo */}
        <div className="lg:w-fit w-full z-30 flex items-center justify-between border-b lg:border-none pb-5 lg:pb-0">
          <Link href={"/"}>
            <div className="font-black text-2xl">QMSL</div>
          </Link>

          <div onClick={toggleMobileMenu} className="lg:hidden cursor-pointer">
            {open ? <CloseIcon /> : <OpenIcon />}
          </div>
        </div>

        {/* large screen links */}
        <div className="lg:flex hidden items-center justify-between gap-[66px]">
          <NavLinks />
        </div>

        <Button
          className="bg-white px-12 py-[14px] rounded text-black hidden lg:flex lg:items-center lg:justify-center border-solid border-2 border-black hover:bg-inherit"
          asChild
        >
          <Link href="/subscribe">Get in Touch</Link>
          {/* Subscribe */}
        </Button>

        {/* mobile view */}
        <ul
          className={`lg:hidden uppercase absolute w-full h-full bottom-0 bg-white z-10 py-32 duration-500 ease-in-out transition-all ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="space-y-8 px-6">
            <NavLinks />

            <div className="w-full px-6">
              <Button
                className="px-12 py-[14px] rounded text-black bg-white lg:hidden flex items-center justify-center mt-14 border-solid border-2 border-black hover:bg-inherit"
                asChild
              >
                <Link href="/get-in-touch">Get in touch</Link>
              </Button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
