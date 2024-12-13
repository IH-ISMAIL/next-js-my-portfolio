"use client"

import { Button } from "./ui/button";

const PrimaryButton = ({ title, value, submit, bgColor }) => {
    return (
        <Button
            variant="outline"
            size="lg"
            className={`custom-primary-btn text-black font-bold border-accent rounded-[50px] text-base bg-[${bgColor}]`}
        >
            <span className='mr-2'>{title}</span>

        </Button>
    );
};

export default PrimaryButton;