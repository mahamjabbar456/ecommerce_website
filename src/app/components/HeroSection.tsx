import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="w-[75%] mx-auto md:flex ">
      <div className="md:pt-[30px] md:block hidden lg:w-[20%] md:w-[28%] md:border-r-2">
         <div className="flex lg:gap-9 md:gap-[7px] mb-[10px]">
            <p className="text-sm font-bold">Woman's Fashion</p>
            <Image src={require('../../../public/rightarrow.svg')} alt="right arrow" />
         </div>
         <div className="flex lg:gap-[58px] md:gap-[29px] mb-[10px]">
            <p className="text-sm font-bold">Men's Fashion</p>
            <Image src={require('../../../public/rightarrow.svg')} alt="right arrow" />
         </div>
         <p className="text-sm font-bold mb-[10px]">Electronics</p>
         <p className="text-sm font-bold mb-[10px]">Home & Lifestyle</p>
         <p className="text-sm font-bold mb-[10px]">Medicine</p>
         <p className="text-sm font-bold mb-[10px]">Sports & Outdoor</p>
         <p className="text-sm font-bold mb-[10px]">Baby's & Toys</p>
         <p className="text-sm font-bold mb-[10px]">Groceries & Pets</p>
         <p className="text-sm font-bold mb-[10px]">Health & Beauty</p>
      </div>
      <div className="bg-black mt-8 md:ml-8 md:w-[72%] w-[100%] md:flex relative hover:z-20">
        <div className="flex flex-col">
         <Image src={require('../../../public/herosection.png')} alt="hero section image" width={500} height={500} className="w-[180px] md:ml-5 lg:mt-[-15px] mt-[-35px] md:mt-[-40px]" />
         <h1 className="text-white font-bold mt-[-55px] md:ml-[48px] md:text-[35px] text-[24px] ml-[20px] leading-[42px] ">Up to 10% off Voucher</h1>
         <div className="flex items-center gap-2">
         <h1 className="text-white font-light mt-2 md:ml-[48px] ml-[20px] text-md underline underline-offset-2 decoration-white ">Shop Now </h1>
         <p className="text-white mt-2 font-bold">&#10230;</p>
        </div>         
        </div>
        <div className="md:flex md:justify-center md:items-center lg:mb-7">
            <Image src={require('../../../public/herosection2.png')} alt="mobile" />
        </div>
        <div className="absolute bottom-2 left-[45%] flex gap-2">
            <div className="p-[6px] rounded-[50%] bg-gray-600"></div>
            <div className="p-[6px] rounded-[50%] bg-gray-600"></div>
            <div className="p-1 rounded-[50%] bg-red-600 border-2 border-white"></div>
            <div className="p-[6px] rounded-[50%] bg-gray-600"></div>
            <div className="p-[6px] rounded-[50%] bg-gray-600"></div>
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection
