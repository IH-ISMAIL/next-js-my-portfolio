"use client"

import Image from 'next/image';
import Link from 'next/link';


const Logo = () => {
    return (
       
        <Link href="/">
          <h1 className="text-lg md:text-3xl font-semibold text-white flex items-center gap-3">
          <Image
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            src="/Ismail Hossain Ih Raju Ismail Raju.png"
            width={100}
            height={100}
            alt="Picture of the author"
          /> <span>ISMAIL HOSSAIN</span>
            <span className="text-accent">.</span>
          </h1>
        </Link>
    );
};

export default Logo;