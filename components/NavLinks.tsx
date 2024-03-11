"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { useState } from "react";

const links = [
  { name: "Solutions", url: "solutions" },
  { name: "Case-studies", url: "case-studies" },
  { name: "About us", url: "about-us" },
  { name: "What's new", url: "whats-new" },
  { name: "Q-intel", url: "q-intel" },
  { name: "Q-impact", url: "q-impact" },
];

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ setOpen }: Props) => {
  const segment = useSelectedLayoutSegment();

  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((link) => {
        const isActive = segment === link.url;

        return (
          <div key={link.name}>
            <div className="group">
              <Link
                href={link.url}
                className={`capitalize text-xs text-black cursor-pointer lg:px-[1px] px-1 pt-1 pb-[11px] lg:pb-0 block hover:font-medium hover:underline hover:underline-offset-4 transition-all duration-500 ease-in-out delay-300 ${
                  isActive || heading === link.name
                    ? "font-medium underline underline-offset-2"
                    : ""
                }`}
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");

                  setOpen(false);
                }}
              >
                {link.name}
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
