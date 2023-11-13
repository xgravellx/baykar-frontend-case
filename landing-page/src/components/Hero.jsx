import PlayCircleIcon from '../assets/icons/play-circle.svg';
import ShoeImage from '../assets/images/Shoe.png';
import {heroContentList} from "../constants/heroContentList.js";

const Hero = () => {

    const triangleStyle = {
        clipPath: 'polygon(100% 0%, 0 100%, 100% 100%)',
    };

    return (
        <section className="bg-primary-color flex flex-col justify-start items-stretch relative">
            <div className="container mx-auto px-[16px] w-full py-[80px] gap-[80px] flex justify-start items-stretch flex-row md:flex-row md:items-center max-[639px]:py-[48px] relative z-[1]">
                <div className="show-room-infos md:flex-[2_0_0%] flex flex-col justfy-start items-stretch gap-[32px]">
                    <h1 className="text-[7.2rem] text-[#0F172A] font-extrabold text-left">
                        Collectible Sneakers
                    </h1>
                    <div className="show-room-text text-[1.8rem] font-normal">
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                    </div>
                    <div className="show-room-buttons flex justify-start items-stretch gap-[16px]">
                        <button className="show-room-sign-up-button text-[#78350F] border-2 border-solid border-[#78350F] rounded-[8px] py-[16px] px-[32px] text-[20px] font-medium hover:bg-[#78350F] hover:text-[#fff] transition-all duration-150 ease-linear">
                            Sign up now
                        </button>
                        <button className="show-room-wrat-button flex justify-start items-center px-[8px] py-[12px] rounded-[8px] ">
                            <img className="w-[24px] h-[24px]" src={PlayCircleIcon} alt="" />
                            <div className="show-room-wrat-button-text px-[8px] font-medium text-[1.6rem] text-[#78350F]">
                                Watch Demo
                            </div>
                        </button>
                    </div>
                </div>
                <div className="show-room-image h-[423px] flex justify-center items-center max-h-[315px] 2xl:h-[423px] xl:h-[373px] lg:h-[323px] md:h-[273px] md:flex-[1_0_0%] md:max-h-[100%] relative max-[320px]:h-[250px]">
                    <div className="show-room-image-bg w-[75%] h-[75%] lg:h-[75%] lg:w-[75%] rounded-[50px] max-w-[270px] max-h-[275px] md:max-w-[100%] md:max-h-[100%] md:h-[80%] md:w-[90%] max-[320px]:h-[80%] max-[320px]:mb-[10%] max-[320px]:max-h-[210px] bg-amber-400">
                        <transition name="rotate-image">
                            <img className="w-full absolute max-w-[360px] left-[50%] top-0 translate-x-[-50%] lg:top-0 md:top-[10%] md:max-w-[100%]" src={ShoeImage} alt="" />
                        </transition>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-[16px] show-room-info flex justify-between items-center py-[80px] gap-[20px] lg:gap-[80px] max-[639px]:flex-col max-[639px]:py-[48px] relative z-[1]">
                {heroContentList.map((item, i) => (
                    <div key={`heroContentList${i}`}
                         className="flex flex-col justify-start items-start gap-[16px] text-[#0F172A] max-[639px]:items-center max-[639px]:max-w-[400px]">
                        <div className="info-image-wrapper relative flex justify-center items-center">
                            <img src="../assets/icons/cursus-rectangle.svg" alt="" width={100}/>
                            <img className="relative z-[2] w-[64px] h-[64px]" src={item.icon} alt="" />
                            <img className="absolute top-0 right-0 translate-x-[30%] translate-y-[-20%] z-[1] w-[40px] h-[40px]" src={item.rectangle} alt="" />
                        </div>
                        <div className="info-title text-left text-[2rem] font-bold max-[639px]:text-center">
                            {item.title}
                        </div>
                        <div className="info-content text-left text-[1.8rem] font-normal max-[639px]:text-center">
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full h-full bg-secondary-color absolute bottom-0 left-0 z-[0]" style={triangleStyle}></div>
        </section>
    );
};

export default Hero;
