import { FileDownIcon } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import SocialIcons from '../components/Socail-Icons'; 
import Photo from './Photo';

const HeroBannerVone = () => {
    return (
        <section id="hero-section-wrapper" className="pb-[60px] overflow-hidden">
            <div className="hero-section-container container">
                <div className="hero-section-body-wrapper flex flex-col-reverse xl:flex-row items-center justify-between gap-8 xl:gap-4">
                    {/* Hero Text */}
                    <div className="hero-section-top basis-[55%]">
                        <div className="hero-section-content flex flex-col gap-4">
                            <span className="hero-sub-heading">Front End Developer</span>
                            <h1 className="h1">
                                Hello, I'm <br />
                                <span className="text-accent">Ismail Hossain</span>
                            </h1>
                            <p className="hero-description">
                                I am strategic and goal-oriented, and I always work with an end goal in mind. I like to take challenges in everything. I believe I am a good candidate for this position.
                            </p>

                            <div className="hero-btn-wrapper">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="px-6 py-4 flex items-center uppercase gap-2 hover:text-black border-accent border rounded-full"
                                >
                                    Download CV
                                    <FileDownIcon />
                                </Button>
                            </div>

                            <SocialIcons
                                containerStyle="flex space-x-4"
                                iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-black hover:transition-all duration-5"
                            />
                        </div>
                    </div>

                    {/* Hero Photo */}
                    <div className="hero-section-bottom">
                        <div className="hero-photo">
                            <Photo />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBannerVone;
