"use client"

import {BsFacebook, BsGithub, BsLinkedin    } from 'react-icons/bs'

const iconsList = [
    {
        link: "/",
        icon: <BsFacebook className='w-[40px] h-[70px]'/>
    },
    {
        link: "/",
        icon: <BsGithub className='w-[40px] h-[70px]'/>
    },
    {
        link: "/",
        icon: <BsLinkedin className='w-[40px] h-[70px]'/>
    }
]

const SocialIcons = () => {



    return (
        <div style={{display: "flex"}} className='flex'>
            {iconsList.map((item, index)=> {
                <a href={item?.link} key={index}> <span className='w-[120px] bg-red'>{item?.icon}</span></a>
            })}
        </div>
    );
};

export default SocialIcons;