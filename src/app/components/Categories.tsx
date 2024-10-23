import Image from "next/image"
import LeftArrow from "../../../public/leftarrow.svg";
import RightArrow from "../../../public/rightarrow2.svg";
import Phone from '../../../public/phone.svg';
import Computer from '../../../public/computer.svg';
import SmartWatch from '../../../public/smartwatch.svg';
import Camera from '../../../public/camera.svg';
import Headphone from '../../../public/headphone.svg';
import Gaming from '../../../public/gaming.svg';

const Categories = () => {
  return (
    <>
      <div className="flex justify-between md:mb-12 mb-[30px]">
        {/* left div */}
        <div>
          {/* left div upper part */}
          <div className="flex items-center gap-2">
          <div className="w-4 bg-red-700 h-[35px] rounded-sm"></div>
          <p className="text-red-700 text-sm font-bold">Categories</p>
          </div>
          {/* left div lower part */}
          <div className="mt-4 flex gap-20">
            <h1 className="font-bold md:text-3xl text-[20px] tracking-wide">Browse By Category</h1>
          </div>
        </div>
        {/* right div */}
        <div className="flex items-end ">
          <div className='bg-gray-200 m-2 p-2 rounded-[50%]'>
          <Image src={LeftArrow} alt="left arrow" className="align-center" />
          </div>
          <div className='bg-gray-200 my-2 mr-[44px] p-2 rounded-[50%]'>
          <Image src={RightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
      <div className="mb-12 flex flex-wrap justify-center gap-5">
         <div className="border-2 w-[140px] h-[110px] rounded-sm  flex flex-col items-center justify-center">
            <Image src={Phone} alt="phone" className="w-10" />
            <p className="text-sm pt-[10px]">Phones</p>
         </div>
         <div className="border-2 w-[140px] h-[110px] rounded-sm  flex flex-col items-center justify-center">
            <Image src={Computer} alt="phone" className="w-10" />
            <p className="text-sm pt-[10px]">Computers</p>
         </div>
         <div className="border-2 w-[140px] h-[110px] rounded-sm  flex flex-col items-center justify-center">
            <Image src={SmartWatch} alt="phone" className="w-10" />
            <p className="text-sm pt-[10px]">Smart Watch</p>
         </div>
         <div className="border-2 w-[140px] h-[110px] rounded-sm  flex flex-col items-center justify-center">
            <Image src={Camera} alt="phone" className="w-10" />
            <p className="text-sm pt-[10px]">Camera</p>
         </div>
         <div className="border-2 w-[140px] h-[110px] rounded-sm  flex flex-col items-center justify-center">
            <Image src={Headphone} alt="phone" className="w-10" />
            <p className="text-sm pt-[10px]">HeadPhones</p>
         </div>
         <div className="border-2 w-[140px] h-[110px] rounded-sm  flex flex-col items-center justify-center">
            <Image src={Gaming} alt="phone" className="w-10" />
            <p className="text-sm pt-[10px]">Gaming</p>
         </div>
      </div>
    </>
  )
}

export default Categories
