import Store from '../../../public/store.svg';
import Dollar from '../../../public/dollar.svg';
import BreifCaseDollar from '../../../public/breifcasedollar.svg';
import ShoppingBag from '../../../public/shoppingbag.svg';
import Image from 'next/image';

const AboutPrivacy = () => {
  return (
    <div className='flex flex-wrap py-[50px] md:py-[80px] gap-5 justify-evenly items-center'>
      <div className='h-[170px] w-[200px] flex flex-col items-center justify-center border-2 rounded-md'>
        <div className='bg-black p-2 rounded-full border-[6px] border-gray-300 mb-3'><Image src={Store} alt='market place' /></div>
        <p className='font-bold text-2xl'>10.5k</p>
        <p className='text-sm'>Sellers active our site</p>
      </div>
      <div className='h-[170px] w-[200px] flex flex-col items-center justify-center rounded-md bg-red-500 text-white'>
        <div className='bg-white p-2 rounded-full border-[6px] border-gray-300 mb-3'><Image src={Dollar} alt='market place' /></div>
        <p className='font-bold text-2xl'>33k</p>
        <p className='text-sm'>Monthly product sales</p>
      </div>
      <div className='h-[170px] w-[200px] flex flex-col items-center justify-center border-2 rounded-md'>
        <div className='bg-black p-2 rounded-full border-[6px] border-gray-300 mb-3'><Image src={ShoppingBag} alt='market place' /></div>
        <p className='font-bold text-2xl'>45.5k</p>
        <p className='text-sm'>Customer active in our site</p>
      </div>
      <div className='h-[170px] w-[200px] flex flex-col items-center justify-center border-2 rounded-md'>
        <div className='bg-black p-2 rounded-full border-[6px] border-gray-300 mb-3'><Image src={BreifCaseDollar} alt='market place' /></div>
        <p className='font-bold text-2xl'>25k</p>
        <p className='text-sm'>Annual grass sale in our site</p>
      </div>
    </div>
  )
}

export default AboutPrivacy
