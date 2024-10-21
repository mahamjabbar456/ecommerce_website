
import TopHeader from "./components/TopHeader";
import HomeHeader from "./components/HomeHeader";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FlashSale from "./components/FlashSale";
import Categories from "./components/Categories";
import BestSellingProduct from "./components/BestSellingProduct";

export default function Home() {
  return (
    <>
      <TopHeader />
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <HomeHeader />
      </div>
      <HeroSection />
      <div className="mt-[100px] mx-auto w-[75%]">
         <FlashSale />
         <hr className="border-[1px] text-gray-400" />
      </div>
      <div className="mt-[60px] mx-auto w-[75%]">
         <Categories />
         <hr className="border-[1px] text-gray-400" />
      </div>
      <div className="mt-[50px] mx-auto w-[75%]">
         <BestSellingProduct />
         <hr className="border-[1px] text-gray-400" />
      </div>
      <Footer />
    </>
  );
}
