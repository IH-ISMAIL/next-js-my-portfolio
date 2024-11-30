"use client"
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const WorkSliderBtn = ({ swiper, containerStyle, btnStyle, iconsSTyles }) => {
    return (
        <div className={containerStyle}>
            <button className={btnStyle} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsSTyles} />
            </button>
            <button className={btnStyle} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsSTyles} />
            </button>
        </div>
    );
};

export default WorkSliderBtn;