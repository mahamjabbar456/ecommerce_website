import Image from 'next/image';
import ArrowDown from '../../../public/arrowdown.svg';
import ArrowUp from '../../../public/arrowup.svg';
import LCD from '../../../public/lcd.png';
import RemoteController from '../../../public/remotecontroller.png';

const CartProduct = () => {
  return (
    <>
      <div className="text-sm md:text-lg gap-2 md:gap-0 grid grid-cols-4 justify-items-center bg-white shadow-lg py-4 font-bold px-7 rounded-md mb-8">
        <div>
        <p>Product</p>
        </div>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <div className="grid grid-cols-4 justify-items-center items-center bg-white shadow-lg py-4 font-bold px-7 rounded-md mb-8">
        <div className='md:flex md:items-center md:gap-2'>
            <Image src={LCD} alt='lcd' height={100} width={100} className='w-12 mb-2 md:mb-0' />
            <p>LCD Monitor</p>
        </div>
        <p>$650</p>
        <div className='flex items-center border-2 gap-2 md:px-4 md:py-5 md:h-[50%] px-2 rounded-md'>
            <div className='text-sm'>01</div>
            <div>
                <Image src={ArrowUp} alt='arrow up' className='w-4' />
                <Image src={ArrowDown} alt='arrow down' className='w-4' />
            </div>
        </div>
        <p>$650</p>
      </div>
      <div className="gap-2 md:gap-0 grid grid-cols-4 justify-items-center items-center bg-white shadow-lg py-4 font-bold px-7 rounded-md mb-8">
        <div className='md:flex md:items-center md:gap-2'>
            <Image src={RemoteController} alt='remote controller' height={100} width={100} className='w-12 md:rotate-[345deg] mb-2 md:mb-0' />
            <p>Remote Controller</p>
        </div>
        <p>$550</p>
        <div className='flex items-center border-2 gap-2 md:px-4 md:py-5 md:h-[50%] px-2  rounded-md'>
            <div className='text-sm'>02</div>
            <div>
                <Image src={ArrowUp} alt='arrow up' className='w-4' />
                <Image src={ArrowDown} alt='arrow down' className='w-4' />
            </div>
        </div>
        <p>$1100</p>
      </div>
      <div className='flex justify-between font-bold mb-12'>
        <button className='border-2 rounded-md py-2 md:px-9 px-4'>Return To Shop</button>
        <button className='border-2 rounded-md py-2 md:px-9 px-4'>Update Cart</button>
      </div>
    </>
  )
}

export default CartProduct
