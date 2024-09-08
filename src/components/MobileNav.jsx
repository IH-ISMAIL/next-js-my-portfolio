"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from 'react-icons/ci';



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

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-3xl text-accent" />
            </SheetTrigger>
            <SheetContent >

                <div className="mobile-nav-wrapper flex flex-col gap-3">
                    {/* logo */}
                    <Link href="/">
                        <h1 className="text-lg md:text-3xl font-semibold text-white flex items-center gap-3">
                            <Image
                                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                                src="/IH-fav.png"
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            /> <span>ISMAIL HOSSAIN</span>
                            <span className="text-accent">.</span>
                        </h1>
                    </Link>

                    {/* menu list  */}
                    <nav className="flex flex-col gap-2 justify-center items-center">
                        {Links.map((link, index) => {
                            return (
                                <Link className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} `} href={link.path} key={index}>{link.name}</Link>
                            )
                        })}
                    </nav>
                </div>

            </SheetContent>
        </Sheet >
    );
};

export default MobileNav;