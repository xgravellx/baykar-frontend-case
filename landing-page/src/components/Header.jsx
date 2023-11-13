import { useState } from "react";
import { routeList } from "../constants/routeList.js";
import MenuScaleIcon from '../assets/icons/menu-scale.svg';

const Header = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

    const openMobileMenu = () => {
        setIsOpenMobileMenu(true);
    };

    const closeMobileMenu = () => {
        setIsOpenMobileMenu(false);
    };

    return (
        <header className="w-full container mx-auto px-[16px]">
            <nav className="flex justify-between items-center py-[16px] md:py-[24px] relative">
                <h5 id="page-logo" className="flex justify-center items-center text-[3.2rem] text-amber font-extrabold cursor-pointer select-none">
                    Collers
                </h5>
                <div className="flex justify-start items-center gap-[16px]">
                    {routeList.map((item, i) => (
                        <button key={`route${i}`} className={`routes relative md:block hidden rounded-lg font-medium px-[8px] py-[12px] text-amber text-[1.6rem] bg-none ${item.id === 'signup' ? 'border border-solid border-amber border-2 hover:text-amber-light hover:bg-amber transition-all duration-150 ease-linear px-[25px]' : 'border-none'}`}>
                            {item.title}
                        </button>
                    ))}
                    {!isOpenMobileMenu ? (
                        <div onClick={openMobileMenu} className="flex justify-center items-center md:hidden cursor-pointer">
                            <img className="w-[24px] h-[24px]" src={MenuScaleIcon} alt="" />
                        </div>
                    ) : (
                        <div onClick={closeMobileMenu} className="close-mobile-menu w-[24px] h-[24px] relative cursor-pointer">
                            <img className="w-[24px] h-[24px]" src={MenuScaleIcon} alt="" />
                        </div>
                    )}
                </div>
                {isOpenMobileMenu && (
                    <div className="mobile-menu pb-[10px] fixed right-0 top-[100%] flex justify-start items-stretch flex-wrap min-w-[200px] shadow-[0px_26px_35px_0px_rgba(0,0,0,0.08)] z-[99] bg-[#fff]">
                        {routeList.map((item, i) => (
                            <div key={`mobileRoute${i}`} className="text-[2rem] py-[10px] px-[4px] min-w-[100px] flex justify-center items-center text-amber font-medium">
                                {item.title}
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
