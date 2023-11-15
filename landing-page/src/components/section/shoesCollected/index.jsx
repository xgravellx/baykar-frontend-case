import {useState, useEffect} from 'react';
import ChartImage from '@/assets/images/chart.png';
import Picture5Image from '@/assets/images/Picture_5.png';

import {dots} from './data.js';
const ShoesCollected = () => {
    const [getMargin, setGetMargin] = useState(0);

    useEffect(() => {
        const updateMargin = () => {
            setGetMargin(window.innerWidth / 8);
        };

        window.addEventListener('resize', updateMargin);
        updateMargin();

        return () => {
            window.removeEventListener('resize', updateMargin);
        };
    }, []);

    return (
        <section className="shoes-collected bg-[#78350F] relative flex justify-start md:justify-center items-center py-[80px] pt-[120px] overflow-hidden ">
            <div className="background-wrapper relative flex justify-center items-center ">
                <img className="max-[767px]:min-w-[1000px]" src={ChartImage} alt=""/>
                <div
                    className="rounded-[99px] border-[3px] border-solid border-[#A3E635] absolute bg-[#A3E635] left-[14%] top-[34%] w-[24px] h-[24px]">
                    <div className="relative h-full">
                        <div
                            className="popup absolute left-[50%] top-[-100%] translate-x-[-50%] translate-y-[-100%] rounded-[5px] bg-[#E2E8F0] shadow-[0_25px_50px_-12px_#00000040] min-w-[250px] text-[1.4rem] text-left font-medium">
                            <div className="arrow-wrapper relative w-full h-full p-[16px] z-[1]">
                                <img className="absolute w-full left-[0] top-[0] translate-y-[-85%] z-[0]"
                                     src={Picture5Image} alt=""/>
                                <span
                                    className="relative z-[1]">Emma Simpson collected one pair of <b>Cool Shoes.</b></span>
                            </div>
                        </div>
                        <div
                            className="md:hidden area-info flex flex-col justify-start items-center absolute left-[50%] top-[100%] translate-x-[-50%] translate-y-[50%]">
                            <div
                                className="count text-[9.6rem] text-[#FFFBEB] font-extrabold text-center max-[767px]:text-[7.6rem]">
                                11,658,467
                            </div>
                            <div
                                className="counte-content text-[5.6rem] text-[#FFFBEB] font-extrabold text-center max-[767px]:text-[3.6rem]">
                                Shoes Collected
                            </div>
                        </div>
                    </div>
                </div>
                {dots.map((item, i) => (
                    <div key={`dots${i}`} style={{
                        left: `${item.left}%`,
                        marginLeft: `${getMargin}px`,
                        top: `${item.top}%`,
                        width: `${item.width}px`,
                        height: `${item.width}px`
                    }} className="rounded-[99px] border-[3px] border-solid border-[#A3E635] absolute">
                    </div>
                ))}
                <div
                    className="max-[767px]:hidden area-info flex flex-col justify-start items-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <div className="count text-[9.6rem] text-[#FFFBEB] font-extrabold text-center">
                        11,658,467
                    </div>
                    <div className="counte-content text-[5.6rem] text-[#FFFBEB] font-extrabold text-center">
                        Shoes Collected
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShoesCollected;
