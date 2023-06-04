"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Links = [
  { href: "/", text: "About" },
  { href: "/", text: "Discover" },
  { href: "/", text: "Get Started" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="absolute inset-0 mx-auto w-full max-w-6xl px-5 pt-5 text-white md:pt-11">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold md:text-2xl">
          crowdfund
        </Link>
        <div className="cursor-pointer z-50 md:hidden" onClick={toggleMenu}>
          {open ? (
            <Image
              src="/images/icon-close-menu.svg"
              alt="Close Menu"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/images/icon-hamburger.svg"
              alt="Hamburger Menu"
              width={20}
              height={20}
            />
          )}
        </div>

        <ul className="flex items-center gap-x-6 max-md:hidden">
          {Links.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                className="border-b-2 border-transparent transition-all duration-200 ease-linear hover:border-white"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50">
          <div className="absolute inset-x-0 top-20 mx-auto w-[90%] max-w-md divide-y rounded-2xl bg-white">
            {Links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="block p-5 text-black"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
