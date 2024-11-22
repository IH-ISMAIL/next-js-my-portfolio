"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Service",
    path: "/service",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Protfolio",
    path: "/protfolio",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="text-white flex gap-8">
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              pathname === link.path &&
              "text-accent border-b-2 border-accent"
            } hover:text-accent uppercase font-medium transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
