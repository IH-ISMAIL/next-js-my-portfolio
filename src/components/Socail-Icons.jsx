import Link from 'next/link';
import React from 'react';
import { FaGithub, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";



const SocialIcons = ({containerStyle, iconStyle}) => {


    const socailIcons = [
        { icons: <FaFacebook/>, path: "/"},
        { icons: <FaGithub/>, path: "/"},
        { icons: <FaYoutube/>, path: "/"},
        { icons: <FaLinkedin/>, path: "/"},
    ]

    return (
        <div className={containerStyle}>
            {socailIcons.map((icon, index)=> {
                return(
                    
                        <Link key={index} className={iconStyle}    href={icon.path}>{icon.icons}</Link>
                    
                )
            })}
        </div>
    );
};

export default SocialIcons;