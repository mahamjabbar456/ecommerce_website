import Image from "next/image"
import speaker from '../../../public/speaker.png'

const MusicSection = () => {
  return (
    <>
      <div className="w-[75%] mx-auto bg-black py-5 px-4 md:flex md:py-10 md:px-8 md:items-center lg:justify-around mb-12">
      <div>
        <p className="text-green-600 text-sm font-bold">Categories</p>
        <p className="text-white font-bold text-xl md:text-2xl tracking-wide mt-3 md:mt-5">Enhance Your Music Experience</p>
        <div className="flex mt-3 md:mt-5 gap-4">
            <div className="bg-white text-black p-3 rounded-[50%]">
                <p className="text-sm text-center font-bold -m-1">23</p>
                <p className="text-[0.7em] text-center">Hours</p>
            </div>
            <div className="bg-white text-black p-3 rounded-[50%]">
                <p className="text-sm text-center font-bold -m-1">05</p>
                <p className="text-[0.7em] text-center">Days</p>
            </div>
            <div className="bg-white text-black py-3 px-2 rounded-[50%]">
                <p className="text-sm text-center font-bold -m-1">59</p>
                <p className="text-[0.7em] text-center">Minutes</p>
            </div>
            <div className="bg-white text-black py-3 px-[6px] rounded-[50%]">
                <p className="text-sm text-center font-bold -m-1">35</p>
                <p className="text-[0.7em] text-center">Seconds</p>
            </div>
        </div>
        <button className="bg-green-600 text-white text-sm font-bold py-3 px-7 rounded-md my-4 md:mt-6">Buy Now</button>
      </div>
      <div className="mt-4 md:rotate-[40deg] lg:rotate-0 drop-shadow-3xl">
        <Image src={speaker} alt="Speaker" width={500} height={500} className="w-[60vw] lg:w-[50vh] h-auto" />
      </div>
      
    </div>
    </>
  )
}

export default MusicSection
