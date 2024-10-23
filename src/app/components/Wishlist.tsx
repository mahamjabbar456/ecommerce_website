import Image from 'next/image';
import Delete from '../../../public/delete.svg';
import Cart from '../../../public/cart2.svg';
import CPUCooler from '../../../public/liquidcpucooler.png';
import RemoteController from '../../../public/remotecontroller.png';
import Coat from '../../../public/northcoat.png';
import Gucci from '../../../public/gucci.png';

const WishList = () => {
  return (
    <>
      <div className="text-black flex justify-between items-center font-bold mb-8">
        <h2>Wishlist  (4)</h2>
        <button className="border-2 py-3 px-8 text-sm rounded-md">Move All To Bag</button>
      </div>
      {/* Card Section */}
      <div className="flex gap-6 mb-[50px] flex-wrap justify-center">
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[220px] w-[220px] relative rounded-sm">
            <div className="w-[48px]  bg-red-600 text-white text-center text-sm rounded-sm absolute top-2 left-2">-40%</div>
            <Image src={Gucci} alt="gucci bag" className=" absolute top-[5%] left-[6%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Delete} alt="delete" className="w-4"  />
            </div>
            <div className='bg-black absolute bottom-0 h-9 flex items-center justify-center gap-2 w-full text-white'>
              <Image src={Cart} alt='cart' className='text-sm' />
              <p className='text-sm'>Add To Cart</p>
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Gucci Duffle Bag</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$960</p>
              <p className="text-gray-500 text-sm font-bold  line-through">$1160</p>
            </div>
          </div>
        </div>
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[220px] w-[220px] relative rounded-sm">
            <Image src={CPUCooler} alt="Liquid CPU Cooler" className="absolute top-[9%] right-[8%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Delete} alt="delete" className="w-4"  />
            </div>
            <div className='bg-black absolute bottom-0 h-9 flex items-center justify-center gap-2 w-full text-white'>
              <Image src={Cart} alt='cart' className='text-sm' />
              <p className='text-sm'>Add To Cart</p>
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">RCB Liquid CPU Cooler</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$1960</p>
            </div>
          </div>
        </div>
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[220px] w-[220px] relative rounded-sm">
            <Image src={RemoteController} alt="remote controller" className="rotate-[345deg]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Delete} alt="delete" className="w-4"  />
            </div>
            <div className='bg-black absolute bottom-0 h-9 flex items-center justify-center gap-2 w-full text-white'>
              <Image src={Cart} alt='cart' className='text-sm' />
              <p className='text-sm'>Add To Cart</p>
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">GP11 Shooter USB GamePad</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$550</p>
            </div>
          </div>
        </div>
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[220px] w-[220px] relative rounded-sm">
            <Image src={Coat} alt="coat" className="w-[80%] top-[-30px] left-[15px] absolute" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Delete} alt="delete" className="w-4"  />
            </div>
            <div className='bg-black absolute bottom-0 h-9 flex items-center justify-center gap-2 w-full text-white'>
              <Image src={Cart} alt='cart' className='text-sm' />
              <p className='text-sm'>Add To Cart</p>
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">The North Coat</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$750</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WishList;
