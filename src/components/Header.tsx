"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface HeaderProps {
  className: string;
}

const Links = [
  { href: "/", text: "About" },
  { href: "/", text: "Discover" },
  { href: "/", text: "Get Started" },
];

const Header: FC<HeaderProps> = ({ className }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header
      className={cn(
        "relative mx-auto max-w-6xl px-5 pt-5 text-white md:pt-11",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-3xl font-bold md:text-2xl">
          crowdfund
        </Link>
        <Image
          className="md:hidden"
          src={"/images/icon-hamburger.svg"}
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(!open)}
        />

        <ul className="flex items-center justify-center gap-x-6 max-md:hidden [&>li]:text-sm">
          {Links.map((link) => {
            return (
              <li key={link.text}>
                <Link
                  href={link.href}
                  className="border-b-2 border-transparent transition-all duration-200 ease-linear hover:border-b-2 hover:border-white"
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={cn(open ? "visible" : "hidden", "md:hidden")}>
        <div className="absolute inset-0 z-50 h-screen w-screen bg-black/50"></div>
        <ul className="absolute inset-0 top-20 z-50 mx-auto w-[90%]  divide-y rounded-2xl bg-white">
          {Links.map((link) => {
            return (
              <li className="p-5 text-black " key={link.text}>
                <Link className="pl-5" href={link.href}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
