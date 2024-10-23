import Image from 'next/image';
import Star from '../../../public/star.svg';
import Heart from '../../../public/heart.svg';
import Eye from '../../../public/eye.svg';
import Keyboard from '../../../public/lighteningkeyboard.png';
import LCD from '../../../public/lcd.png';
import Chair from '../../../public/chair.png';
import Cart from '../../../public/cart2.svg';
import CPUCooler from '../../../public/liquidcpucooler.png';
import RemoteController from '../../../public/remotecontroller.png';
import Coat from '../../../public/northcoat.png';
import Gucci from '../../../public/gucci.png';

const JustForYou = () => {
  return (
    <>
    <div className="flex justify-between mb-12 text-black items-center">
    {/* left part */}
      <div className="flex items-center gap-2">
          <div className="w-4 bg-red-700 h-[35px] rounded-sm"></div>
          <p className="text-black text-sm font-bold">Just For You</p>
       </div>
        {/* right part */}
        <button className="border-2 py-3 px-8 text-sm font-bold rounded-md">See All</button>
    </div>
    {/* Card Section */}
    <div className="flex gap-6 mb-[50px] flex-wrap justify-center">
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[220px] w-[220px] relative rounded-sm">
            <div className="w-[48px]  bg-red-600 text-white text-center text-sm rounded-sm absolute top-2 left-2">-35%</div>
            <Image src={Chair} alt="chair" className=" absolute top-[5%] left-[10%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Eye} alt="eye" className="w-4"  />
            </div>
            <div className='bg-black absolute bottom-0 h-9 flex items-center justify-center gap-2 w-full text-white'>
              <Image src={Cart} alt='cart' className='text-sm' />
              <p className='text-sm'>Add To Cart</p>
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
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[220px] w-[220px] relative rounded-sm">
            <Image src={LCD} alt="LCD" className="absolute top-[20%] right-[10%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Eye} alt="eye" className="w-4"  />
            </div>
            <div className='bg-black absolute bottom-0 h-9 flex items-center justify-center gap-2 w-full text-white'>
              <Image src={Cart} alt='cart' className='text-sm' />
              <p className='text-sm'>Add To Cart</p>
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">IPS LCD Gaming Monitor</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$370</p>
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
          <div className="bg-gray-200 h-[220px] w-[220px] relative rounded-sm">
          <div className="w-[48px]  bg-green-500 text-white text-center text-sm rounded-sm absolute top-2 left-2">-50%</div>
            <Image src={RemoteController} alt="remote controller" className="rotate-[345deg]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Eye} alt="eye" className="w-4"  />
            </div>
            <div className='bg-black absolute bottom-0 h-9 flex items-center justify-center gap-2 w-full text-white'>
              <Image src={Cart} alt='cart' className='text-sm' />
              <p className='text-sm'>Add To Cart</p>
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Model-View-Controller</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$120</p>
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
          <div className="bg-gray-200 h-[220px] w-[220px] relative rounded-sm">
            <Image src={Keyboard} alt="lightening keyboard" className="rotate-[345deg] absolute top-[8%] left-[8%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Eye} alt="eye" className="w-4"  />
            </div>
            <div className='bg-black absolute bottom-0 h-9 flex items-center justify-center gap-2 w-full text-white'>
              <Image src={Cart} alt='cart' className='text-sm' />
              <p className='text-sm'>Add To Cart</p>
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">AK-900 Wired Keyboard</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$200</p>
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
      </div>
    </>
  )
}

export default JustForYou
