import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {cardList, loveUsText} from './data.js';

const LoveUs = () => {
    const goPrev = () => {
    };

    const goNext = () => {
    };

    return (
        <section className="love-us-main container mx-auto px-[16px] py-[48px] gap-[32px] md:gap-[80px] md:py-[80px] relative flex flex-col justify-start items-start">
            <div className="header-and-button flex justify-between items-center w-full">
                <h2 className="header-text font-extrabold text-[5.6rem] text-[#0F172A] text-center w-full md:text-left md:w-fit">
                    {loveUsText}
                </h2>
                <div className="swiper-button-wrapper flex justify-center items-center gap-[24px] max-[639px]:hidden">
                    <button onClick={goPrev}
                            className="swiper-prev rounded-[99px] border-2 border-solid border-[#78350F] p-[12px] flex justify-center items-center">
                        <img src={ArrowLeftIcon} alt=""/>
                    </button>
                    <button onClick={goNext}
                            className="swiper-next rounded-[99px] border-2 border-solid border-[#78350F] p-[12px] flex justify-center items-center rotate-180">
                        <img src={ArrowLeftIcon} alt=""/>
                    </button>
                </div>
            </div>
            <div className="slider-area w-full p-[40px] relative overflow-hidden">
                <Swiper
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={30}
                    centeredSlidesBounds={true}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.7,
                        },
                        1024: {
                            slidesPerView: 27,
                        },
                        1280: {
                            slidesPerView: 3.7,
                        },
                    }}
                >
                    {cardList.map((item, i) => (
                        <SwiperSlide key={`card${i}`}
                                     className="card-main shadow-[0_10px_15px_-3px_#0000001A] min-h-[420px] bg-[#fff] flex flex-col justify-between items-start p-[32px] rounded-[20px] gap-[16px] swiper-slide">
                            <div className="card-company flex justify-start items-center py-[16px]">
                                <img loading="lazy" src={item.company} alt=""/>
                            </div>
                            <div className="card-content font-normal text-[2.4rem] text-[#000] text-left">
                                {item.content}
                            </div>
                            <div className="card-owner flex justify-start items-center gap-[16px]">
                                <img className="rounded-[99px] w-[64px] h-[64px]" loading="lazy" src={item.picture}
                                     alt=""/>
                                <div className="owner-name-and-job flex flex-col justify-start">
                                    <div className="owner-name text-[1.8rem] font-normal text-[#000]">
                                        {item.name}
                                    </div>
                                    <div className="owner-job text-[1.6rem] font-normal text-[#475569]">
                                        {item.job}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    className="slider-background w-[110%] h-[80%] top-[-10px] left-[50%] translate-x-[-50%] bg-[#FDE68A] absolute z-[0]">

                </div>
            </div>
        </section>
    );
};

export default LoveUs;
