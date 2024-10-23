import Image from "next/image"
import LeftArrow from "../../../public/leftarrow.svg";
import RightArrow from "../../../public/rightarrow2.svg";
import Star from '../../../public/star.svg';
import Heart from '../../../public/heart.svg';
import Eye from '../../../public/eye.svg';
import RemoteController from '../../../public/remotecontroller.png';
import Keyboard from '../../../public/lighteningkeyboard.png';
import LCD from '../../../public/lcd.png';
import Chair from '../../../public/chair.png';

const FlashSale = () => {
  return (
    <>
      <div className="md:flex md:justify-between mb-8">
        {/* left div */}
        <div>
          {/* left div upper part */}
          <div className="flex items-center gap-2">
          <div className="w-4 bg-red-700 h-[35px] rounded-sm"></div>
          <p className="text-red-700 text-sm font-bold">Today's</p>
          </div>
          {/* left div lower part */}
          <div className="mt-4 md:flex md:gap-20 inline">
            <h1 className="font-bold text-3xl tracking-wide md:mb-0 mb-8">Flash Sales</h1>
            {/* left div lower part another div for hourse */}
            <div className="flex items-center gap-3">
            <div className="mt-[-20px]">
              <p className="font-bold text-sm mb-[-4px]">Days</p>
              <p className="font-extrabold text-4xl tracking-widest">03</p>
            </div>
            <div>
            <p className="bg-red-600 p-[3px] rounded-full mb-2"></p>
            <p className="bg-red-600 px-[2px] py-[3px] rounded-[50%] mb-[4px]"></p>
            </div>
            <div className="mt-[-20px]">
              <p className="font-bold text-sm mb-[-4px]">Hours</p>
              <p className="font-extrabold text-4xl tracking-widest">23</p>
            </div>
            <div>
            <p className="bg-red-600 p-[3px] rounded-full mb-2"></p>
            <p className="bg-red-600 px-[2px] py-[3px] rounded-[50%] mb-[4px]"></p>
            </div>
            <div className="mt-[-20px]">
              <p className="font-bold text-sm mb-[-4px]">Minutes</p>
              <p className="font-extrabold text-4xl tracking-widest">19</p>
            </div>
            <div>
            <p className="bg-red-600 p-[3px] rounded-full mb-2"></p>
            <p className="bg-red-600 px-[2px] py-[3px] rounded-[50%] mb-[4px]"></p>
            </div>
            <div className="mt-[-20px]">
              <p className="font-bold text-sm mb-[-4px]">Seconds</p>
              <p className="font-extrabold text-4xl tracking-widest">56</p>
            </div>
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="lg:flex hidden lg:items-end">
          <div className='bg-gray-200 m-2 p-2 rounded-[50%]'>
          <Image src={LeftArrow} alt="left arrow" className="align-center" />
          </div>
          <div className='bg-gray-200 my-2 mr-[44px] p-2 rounded-[50%]'>
          <Image src={RightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="flex gap-6 mb-[50px] flex-wrap justify-center">
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm">
            <div className="w-[48px]  bg-red-600 text-white text-center text-sm rounded-sm absolute top-2 left-2">-40%</div>
            <Image src={RemoteController} alt="remote controller" className="rotate-[345deg]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="heart"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Model-View-Controller</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$120</p>
              <p className="text-gray-500 text-sm font-bold  line-through">$160</p>
            </div>
            <div className="flex mt-3 gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              </div>
              <p className="text-lg font-bold text-gray-500">(88)</p>
            </div>
          </div>
        </div>
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm">
            <div className="w-[48px]  bg-red-600 text-white text-center text-sm rounded-sm absolute top-2 left-2">-35%</div>
            <Image src={Keyboard} alt="Lightening KeyBoard" className="rotate-[345deg] absolute top-[8%] left-[8%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="heart"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">AK-900 Wired Keyboard</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$960</p>
              <p className="text-gray-500 text-sm font-bold line-through">$1160</p>
            </div>
            <div className="flex mt-3 gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5 text-gray-500" />
              </div>
              <p className="text-lg font-bold text-gray-500">(75)</p>
            </div>
          </div>
        </div>
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm">
            <div className="w-[48px]  bg-red-600 text-white text-center text-sm rounded-sm absolute top-2 left-2">-30%</div>
            <Image src={LCD} alt="LCD" className="absolute top-[25%] right-[10%] w-[80%] " />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="heart"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">IPS LCD Gaming Monitor</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$370</p>
              <p className="text-gray-500 text-sm font-bold line-through">$400</p>
            </div>
            <div className="flex mt-3 gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              </div>
              <p className="text-lg font-bold text-gray-500">(99)</p>
            </div>
          </div>
        </div>
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm">
            <div className="w-[48px]  bg-red-600 text-white text-center text-sm rounded-sm absolute top-2 left-2">-25%</div>
            <Image src={Chair} alt="chair" className="rotate-[345deg] absolute top-[10%] left-[10%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="eye"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">S-Series Comfort Chair</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$375</p>
              <p className="text-gray-500 text-sm font-bold line-through">$400</p>
            </div>
            <div className="flex mt-3 gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              </div>
              <p className="text-lg font-bold text-gray-500">(99)</p>
            </div>
          </div>
        </div>
      </div>
      {/* Button */}
      <button className="text-center bg-red-600 text-white py-[15px] px-[40px] text-sm rounded-md font-bold lg:ml-[350px] ml-[65px] md:ml-[30%] mb-[50px]">View All Products</button>
    </>
  )
}

export default FlashSale
