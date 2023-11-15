import {useState} from 'react';
import BlackShoppingCart from '@/assets/icons/black-shopping-cart.svg';
import ShoppingCart from '@/assets/icons/shopping-cart.svg';

import {signUpButton, theBestCardList, theBestHeader} from './data.js';

const TheBestOf = () => {
    const [hoveredItemId, setHoveredItemId] = useState('');


    return (
        <section className="bg-[#0F172A] md:py-[80px] py-[48px]">
            <div
                className="the-best-of container bg-bottom bg-no-repeat bg-contain mx-auto px-[16px] flex flex-col justify-start items-stretch gap-[80px] text-[#fff] max-[767px]:items-center">
                <div
                    className="the-best-of-header-and-button flex justify-between items-center max-[767px]:flex-col max-[767px]:gap-[32px]">
                    <h2 className="the-best-of-header text-[5.6rem] font-extrabold text-center md:text-left">
                        {theBestHeader}
                    </h2>
                    <button
                        className="sign-up-button text-[#fff] border-2 border-solid border-[#fff] rounded-[8px] py-[20px] px-[48px] text-[24px] font-bold hover:bg-[#fff] hover:text-[#0F172A] transition-all duration-150 ease-linear">
                        {signUpButton}
                    </button>
                </div>
                <div
                    className="card-list flex justify-between items-stretch gap-[15px] lg:gap-[48px] max-[767px]:flex-col max-[767px]:max-w-[450px] max-[767px]:gap-[32px]">
                    {theBestCardList.map((item, i) => (
                        <div key={`card${i}`}
                             className="card rounded-[10px] overflow-hidden flex flex-col justify-start items-stretch flex-[1_0_0%] shadow-[0_25px_50px_-12px_#FFFFFF40]">
                            <img className="object-contain w-full" src={item.image} alt=""/>
                            <div
                                className="card-info-wrapper flex flex-col justify-start items-stretch p-[32px] gap-[32px] bg-[#0F172A]">
                                <div className="card-info flex flex-col justify-start items-stretch">
                                    <h6 className="card-info-header text-left font-bold text-[2.4rem]">
                                        {item.title}
                                    </h6>
                                    <div className="card-info-content text-left font-normal text-[1.8rem]">
                                        {item.content}
                                    </div>
                                </div>
                                <button onMouseEnter={() => setHoveredItemId(item.id)}
                                        onMouseLeave={() => setHoveredItemId('')}
                                        className="card-button text-[#fff] border-2 border-solid border-[#fff] rounded-[8px] py-[16px] px-[16px] text-[24px] font-bold hover:bg-[#fff] hover:text-[#0F172A] transition-all duration-150 ease-linear flex justify-center items-center gap-[16px] lg:px-[48px]">
                                    <img className="w-[24px] h-[24px]"
                                         src={hoveredItemId === item.id ? BlackShoppingCart : ShoppingCart} alt=""/>
                                    <div className="button-text">
                                        Buy Now
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheBestOf;
