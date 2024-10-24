import Image from 'next/image';
import Person1 from '../../../public/person1.png';
import Person2 from '../../../public/person2.png';
import Person3 from '../../../public/person3.png';
import Linkedin from '../../../public/linkedin1.svg';
import Twitter from '../../../public/twitter1.svg';
import Instagram from '../../../public/instagram1.svg';

const PersonSection = () => {
  return (
    <>
    <div className='flex flex-wrap items-center justify-around gap-7 h-[100%]'>
      <div >
        <div className='bg-gray-300 rounded-md h-[300px] w-[250px]'>
            <Image src={Person1} alt='person one' width={300} height={300} className='w-[100%] h-[100%] relative left-[5%]' />
        </div>
        <p className='capitalize text-lg font-bold mt-4'>Taimoor hassan</p>
        <p className='text-sm'>Founder & Chairman</p>
        <div className='flex gap-2 mt-2'>
            <Image src={Twitter} alt='Twitter' />
            <Image src={Instagram} alt='instagram' />
            <Image src={Linkedin} alt='linkedin' />
        </div>
      </div>
      <div>
      <div className='bg-gray-300 rounded-md h-[300px] w-[250px]'>
            <Image src={Person2} alt='person two' width={300} height={300} className='w-[100%] h-[100%] relative left-[5%]' />
        </div>
        <p className='capitalize text-lg font-bold mt-4'>Muneeba Naseem</p>
        <p className='text-sm'>Managing Director</p>
        <div className='flex gap-2 mt-2'>
            <Image src={Twitter} alt='Twitter' />
            <Image src={Instagram} alt='instagram' className='stroke-current text-black' />
            <Image src={Linkedin} alt='linkedin' />
        </div>
      </div>
      <div>
      <div className='bg-gray-300 rounded-md h-[300px] w-[250px]'>
            <Image src={Person3} alt='person three' width={300} height={300} className='w-[100%] h-[100%] relative left-[5%]' />
        </div>
        <p className='capitalize text-lg font-bold mt-4'>Mahnoor Tanveer</p>
        <p className='text-sm'>Product Designer</p>
        <div className='flex gap-2 mt-2'>
            <Image src={Twitter} alt='Twitter' />
            <Image src={Instagram} alt='instagram' className='stroke-current text-black' />
            <Image src={Linkedin} alt='linkedin' />
        </div>
      </div>
    </div>
    <div className="flex gap-2 items-center justify-center mt-10">
            <div className="p-[6px] rounded-[50%] bg-gray-600"></div>
            <div className="p-[6px] rounded-[50%] bg-gray-600"></div>
            <div className="p-1 rounded-[50%] bg-red-600 border-2 border-gray-300"></div>
            <div className="p-[6px] rounded-[50%] bg-gray-600"></div>
            <div className="p-[6px] rounded-[50%] bg-gray-600"></div>
        </div>
    </>
  )
}

export default PersonSection
