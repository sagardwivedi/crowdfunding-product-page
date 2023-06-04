import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface HeaderProps {
  className: string;
}

const Links = [
  { href: "/", text: "About" },
  { href: "/", text: "Discover" },
  { href: "/", text: "Get Started" },
];

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn("mx-auto w-[90%] max-w-6xl pt-11 text-white", className)}
    >
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-2xl font-bold">
          crowdfund
        </Link>
        <ul className="flex items-center justify-center gap-x-6 [&>li]:text-sm">
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
    </header>
  );
};

export default Header;
