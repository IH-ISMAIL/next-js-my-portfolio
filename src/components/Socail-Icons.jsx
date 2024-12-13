"use client"

import Link from 'next/link';
import { FaGithub, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";



const SocialIcons = ({containerStyle, iconStyle}) => {


    const socailIcons = [
        { icons: <FaFacebook className='w-[32px] h-[32px]'  />, path: "/"},
        { icons: <FaGithub className='w-[32px] h-[32px]' />, path: "/"},
        { icons: <FaYoutube className='w-[32px] h-[32px]' />, path: "/"},
        { icons: <FaLinkedin className='w-[32px] h-[32px]' />, path: "/"},
    ]

    return (
        <div className="flex gap-4  relative">
            {socailIcons.map((icon, index)=> {
                return(
                    
                        <Link key={index} className={iconStyle}    href={icon.path}>{icon.icons}</Link>
                    
                )
            })}
        </div>
    );
};

export default SocialIcons;