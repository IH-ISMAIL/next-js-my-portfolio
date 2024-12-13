"use client"

import CountUp from 'react-countup';

const WorkingProgress = () => {

    const stats = [
        { num: 5, text: "Years Of Experience" },
        { num: 120, text: "Projects Completed" },
        { num: 8, text: "Technologies Masters" },
        { num: 500, text: "Code Commit" },
        { num: 120, text: "Completed" },
        { num: 105, text: "Get 5 ⭐ From Clients" },
    ]

    return (
        <section data-aos="fade-up"
        data-aos-duration="1500">
           <div className='container mx-auto section-padding'>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center items-center max-w-[800vw] xl:max-w-none'>
                    {
                        stats.map((item, index)=> {
                            return(
                                <div data-aos="fade-left" key={index} className='border-gray-800 rounded-[7px] flex flex-col justify-center xl:flex-row items-center gap-4 h-[200px] bg-gray-800 xl:bg-transparent p-4 xl:h-full text-center w-full'>
                                    <CountUp 
                                      end={item.num}
                                      duration={5}
                                      delay={2}
                                      className='text-4xl xl:text-6xl font-extrabold' 
                                    />
                                    <h3 className={`${item.text.length > 10 ? "max-w-[100px]" : "max-w-[150px]"}`}>{item.text}</h3>
                                </div>
                            )
                        })
                    }
                </div>
           </div>
        </section>
    );
};

export default WorkingProgress;