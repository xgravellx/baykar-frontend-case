import AppStoreIcon from '@/assets/icons/app_store.svg';
import GooglePlayIcon from '@/assets/icons/google_play.svg';

import {footerItems, footerMenuItems, socialMedias} from './data';

const Footer = () => {
    return (
        <footer className="footer-main w-full bg-[#0F172A] pb-[48px] max-[639px]:pb-[100px]">
            <div
                className="footer container mx-auto px-[16px] gap-[32px] relative flex flex-col justify-start items-start">
                <div
                    className="button-area w-full flex justify-between items-stretch border-b border-b-solid border-b-[#334155] py-[48px] max-[639px]:flex-col max-[639px]:gap-[48px]">
                    {footerItems.map((item, i) => (
                        <div key={`buttonsGroup${i}`}
                             className="buttons-wrapper flex flex-col justify-start items-stretch flex-[1_0_0%] max-[639px]:items-center">
                            <div
                                className="main text-[1.6rem] font-bold text-[#fff] text-left py-[12px] cursor-pointer select-none">
                                {item.main}
                            </div>
                            {item.items.map((lowItem, k) => (
                                <div key={`lowItem${k}`}
                                     className="items text-[1.6rem] font-normal text-[#E2E8F0] text-left py-[12px] cursor-pointer select-none">
                                    {lowItem}
                                </div>
                            ))}
                        </div>
                    ))}
                    <div
                        className="get-app flex flex-col justify-between items-stretch flex-[1_0_0%] max-[639px]:items-center max-[639px]:gap-[56px]">
                        <div
                            className="app-buttons flex flex-col justify-start items-stretch gap-[8px] max-[639px]:items-center">
                            <div
                                className="main text-[1.6rem] font-bold text-[#fff] text-left py-[12px] cursor-pointer select-none">
                                Get the App
                            </div>
                            <div
                                className="ios-app-store text-[#fff] rounded-[8px] flex justify-start items-center gap-[8px] cursor-pointer select-none">
                                <img className="select-none pointer-events-none" src={AppStoreIcon} alt="App Store"/>
                            </div>
                            <div
                                className="google-play text-[#fff] rounded-[8px] flex justify-start items-center gap-[8px] cursor-pointer select-none">
                                <img className="select-none pointer-events-none" src={GooglePlayIcon}
                                     alt="Google Play"/>
                            </div>
                        </div>
                        <div
                            className="social-media flex flex-col justify-start items-stretch max-[639px]:items-center">
                            <div
                                className="main text-[1.6rem] font-bold text-[#E2E8F0] text-left py-[12px] cursor-pointer select-none">
                                Follow Us
                            </div>
                            <div className="social-media-icons flex justify-start items-center gap-[18px]">
                                {socialMedias.map((item, i) => (
                                    <a key={`social${i}`} target="_blank" href={item.link} rel="noopener noreferrer">
                                        <img src={item.icon} alt={item.title}/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="terms flex justify-between items-center w-full max-[639px]:flex-col max-[639px]:gap-[24px]">
                    <div className="copyright text-[#E2E8F0] text-[1.6rem] font-normal">
                        Collers @ 2023. All rights reserved.
                    </div>
                    <div className="footer-menus-wrapper flex justify-start items-center gap-[32px]">
                        {footerMenuItems.map((item, i) => (
                            <div key={`footerMenu${i}`}
                                 className="footer-menu-items flex justify-center items-center gap-[8px]">
                                <img hidden={!item.icon} src={item.icon} alt=""/>
                                <div
                                    className="menu-text text-[1.6rem] text-[#E2E8F0] font-normal select-none cursor-pointer">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
