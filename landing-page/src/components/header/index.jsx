import MenuScaleIcon from '@/assets/icons/menu-scale.svg';

import {pageLogo, routeList} from './data.js';

const Header = () => {
    return (
        <header className="w-full container mx-auto px-[16px]">
            <nav className="flex justify-between items-center py-[16px] md:py-[24px] relative">
                <h5 id="page-logo"
                    className="flex justify-center items-center text-[3.2rem] text-[#78350F] font-extrabold cursor-pointer select-none">
                    {pageLogo}
                </h5>
                <div className="flex justify-start items-center gap-[16px]">
                    {routeList.map((item, i) => (
                        <button key={`route${i}`}
                                className={`routes relative md:block hidden rounded-lg font-medium px-[8px] py-[12px] text-[#78350F] text-[1.6rem] bg-none ${item.id === 'signup' ? 'border border-solid border-[#78350F] hover:text-[#FFFBEB] hover:bg-[#78350F] transition-all duration-150 ease-linear' : 'border-none'}`}>
                            {item.title}
                        </button>
                    ))}
                    <div className="flex justify-center items-center md:hidden cursor-pointer">
                        <img className="w-[24px] h-[24px]" src={MenuScaleIcon} alt=""/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
