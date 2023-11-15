import {useState} from 'react';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import VideoImage from '@/assets/images/Video.png';
import Picture2Image from '@/assets/images/Picture_2.png';
import Picture4Image from '@/assets/images/Picture_4.png';

import {buttonList, growContent, growHeader, windowTopBarDots} from './data.js';

const GrowCollection = () => {
    const [selectedButton, setSelectedButton] = useState('search');

    const choseButton = (item) => {
        setSelectedButton(item.id);
    };

    const getColor = (item) => {
        return `w-[10px] h-[10px] rounded-[99px] bg-[${item.color}]`;
    };

    return (
        <section className="grow-collection-main relative">
            <div
                className="grow-collection-wrapper container mx-auto px-[16px] py-[48px] gap-[32px] relative flex flex-col justify-start items-start text-[#0F172A] md:gap-[80px] md:py-[80px]">
                <div className="header-wrapper flex flex-col justify-start items-start gap-[32px]">
                    <h2 className="grow-header text-[5.6rem] font-extrabold text-center md:text-left">
                        {growHeader}
                    </h2>
                    <div className="grow-content font-normal text-[1.8rem] text-center md:text-left">
                        {growContent}
                    </div>
                </div>
                <div
                    className="grow-items-area flex justify-start items-stretch w-full min-h-[500px] md:min-h-[550px] max-[767px]:flex-col max-[767px]:gap-[32px]">
                    <div className="buttons-wrapper overflow-auto max-[767px]:py-[10px]">
                        <div
                            className="buttons flex justify-start items-stretch gap-[16px] md:flex-col overflow-hidden">
                            {buttonList.map((item, i) => (
                                <div key={`growButton${i}`} onClick={() => choseButton(item)}
                                     className={`grow-button flex justify-start items-center gap-[16px] font-medium text-[2rem] p-[16px] select-none cursor-pointer rounded-[8px] max-[767px]:min-w-[200px] ${selectedButton === item.id ? 'bg-[#fff] shadow-[0_4px_6px_-1px_#0000001A]' : ''}`}>
                                    <img src={item.icon} alt=""/>
                                    <div className="button-content">
                                        {item.title}
                                    </div>
                                    <img className="hidden md:block" src={ArrowRightIcon} alt=""/>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="window-area relative flex-[1_0_0%]">
                        <div
                            className="screen-wrapper flex justify-center items-center absolute left-[50%] top-[0] translate-x-[-50%] w-[60%] max-[767px]:w-[90%]">
                            <div
                                className="screen-window w-full shadow-[0_25px_50px_-12px_#00000040] border-[5px] border-solid border-[#fff] rounded-[20px] overflow-hidden flex flex-col justify-start items-stretch relative z-[2] bg-[#fff]">
                                <div
                                    className="screen-top-bar relative flex justify-start items-center gap-[5px] px-[16px] py-[8px]">
                                    {windowTopBarDots.map((item, i) => (
                                        <div key={`color${i}`} style={{backgroundColor: item.color}}
                                             className={`dot ${getColor(item)}`}></div>
                                    ))}
                                </div>
                                <img src={VideoImage} alt=""/>
                            </div>
                        </div>

                        <div
                            className="screen-wrapper flex justify-center items-center absolute left-[60%] top-[100px] translate-x-[-50%] w-[60%] max-[767px]:w-[80%]">
                            <div
                                className="screen-window w-full shadow-[0_25px_50px_-12px_#00000040] border-[5px] border-solid border-[#fff] rounded-[20px] overflow-hidden flex flex-col justify-start items-stretch relative z-[2] bg-[#fff]">
                                <div
                                    className="screen-top-bar relative flex justify-start items-center gap-[5px] px-[16px] py-[8px]">
                                    {windowTopBarDots.map((item, i) => (
                                        <div key={`color${i}`} style={{backgroundColor: item.color}}
                                             className={`dot ${getColor(item)}`}></div>
                                    ))}
                                </div>
                                <img src={Picture2Image} alt=""/>
                            </div>
                        </div>

                        <div
                            className="screen-wrapper flex justify-center items-center absolute left-[90%] top-[150px] translate-x-[-50%] w-[25%] max-[767px]:w-[150px] max-[767px]:left-[80%]">
                            <div
                                className="screen-window h-[120px] w-full shadow-[0_25px_50px_-12px_#00000040] border-[5px] border-solid border-[#fff] rounded-[20px] overflow-hidden flex flex-col justify-start items-stretch relative z-[2] bg-[#fff] 2xl:h-[335px] xl:h-[265px] lg:h-[190px] md:h-[120px]">
                                <img
                                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-45%] scale-[1.4]"
                                    src={Picture4Image} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GrowCollection;
