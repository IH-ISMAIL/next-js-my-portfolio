"use client"

import Logo from './Logo';
import Nav from './Nav';
import SocialIcons from './Socail-Icons';

const Footer = () => {
    return (
        <div className='flex flex-col gap-4 py-6'>

            <div className="container footer-top-sc-icons-wrapper relative flex justify-center items-center ">
                <SocialIcons />
            </div>

            <div className="footer-copyright container flex justify-center items-center">
                <Logo />
            </div>

            <div className='flex justify-center items-center'>
                <Nav />
            </div>


        </div>
    );
};

export default Footer;