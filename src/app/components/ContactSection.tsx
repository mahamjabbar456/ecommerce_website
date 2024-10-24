import Phone from '../../../public/telephone.svg';
import Message from '../../../public/message.svg';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <div className='md:flex md:justify-between md:w-[100%] md:gap-5 md:pb-[50px] pb-[30px]'>
      <div className='shadow-lg p-5 mb-5 md:w-[40%] rounded-md'>
         <div className="mb-8 flex gap-3 items-center">
          <div className='p-2 bg-red-500 rounded-full'><Image src={Phone} alt='phone' className='rotate-[235deg]' /></div>
         <p className='font-bold text-lg md:text-sm lg:text-lg'>Call To Us</p>
         </div>
         <p className="mb-4 font-bold text-sm md:text-[12px] lg:text-sm">We are available 24/7, 7 days a week.</p>
         <p className="mb-4 border-b-[1px] border-black pb-4 text-sm md:text-[12px] lg:text-sm">Phone: +92937593753</p>
         <div className="mb-4 flex gap-3 items-center">
          <div className='p-2 bg-red-500 rounded-full'>
            <Image src={Message} alt='message' />
          </div>
            <p className='font-bold text-lg md:text-sm lg:text-lg'>Write To Us</p>
         </div>
         <p className="mb-4 text-sm md:text-[12px] lg:text-sm">Fill out our form and we will contact you within 24 hours.</p>
         <p className="mb-4 text-sm md:text-[12px] lg:text-sm">Emails: mahamjabbar@gmail.com</p>
         <p className="mb-8 text-sm md:text-[12px] lg:text-sm">Emails: support@gmail.com</p>
      </div>
      <div className='p-5 shadow-lg mb-5 rounded-md'>
         <form action="">
          <div className='md:flex md:gap-3 md:mb-4'>
          <input type="text" name="name" id="name" placeholder='Your Name' className="bg-gray-100 p-2 rounded-md w-[100%] mb-4" />
          <input type="email" name="email" id="email" placeholder='Your Email*' className="bg-gray-100 p-2 rounded-md w-[100%] mb-4" />
          <input type="number" name="phone" id="phone" placeholder='Your Phone*' className="bg-gray-100 p-2 rounded-md w-[100%] mb-4" />
          </div>
          <textarea rows={8} cols={100} className="bg-gray-100 p-2 rounded-md w-[100%] mb-4 text-gray-400" >Your Message</textarea>
         </form>
         <div className='flex justify-end'>
         <button className='bg-red-500 py-3 px-5 rounded-md font-bold text-white'>Send Message</button>
         </div>
      </div>
    </div>
  )
}

export default ContactSection
