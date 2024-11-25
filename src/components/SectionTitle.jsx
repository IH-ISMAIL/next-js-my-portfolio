"use client"



const SectionTitle = ({title, colorText}) => {
    return (
        <h3 className="section-title relative text-[24px]  xl:text-5xl font-bold uppercase mb-10 xl:mb-14 text-center">{title} <span className="text-accent">{colorText}</span></h3>
    );
};

export default SectionTitle;