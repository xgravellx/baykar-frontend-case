import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/section/hero";
import TheBestOf from "@/components/section/theBestOf";
import JoinUs from "@/components/section/joinUs";
import LoveUs from "@/components/section/loveUs";
import GrowCollection from "@/components/section/growCollection";
import ShoesCollected from "@/components/section/shoesCollected";

const App = () => {
    return (
        <div className="bg-[#fff] w-full h-full md:bg-[#FFFBEB] overflow-auto relative">
            <div className="flex flex-col justify-start items-stretch">
                <Header/>
                <Hero/>
                <TheBestOf/>
                <JoinUs/>
                <LoveUs/>
                <GrowCollection/>
                <ShoesCollected/>
                <Footer/>
            </div>
        </div>
    );
};

export default App;
