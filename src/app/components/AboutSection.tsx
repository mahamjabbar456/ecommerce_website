import Image from "next/image";
import AboutPic from '../../../public/aboutpic.png';

const AboutSection = () => {
  return (
    <div className="md:flex md:justify-between md:w-[100%] md:gap-5">
      <div className="md:w-[45%] md:self-center">
        <p className="font-bold text-3xl tracking-wide mb-5">Our Story</p>
        <p className="text-sm text-justify tracking-wide leading-5 mb-4">Launched in 2015,Maham Jabbar is South Asia's premier online shopping marketplace with an active presence in Pakistan. Supported by wide range of tailored marketing,data and service solutions, Maham Jabbar has 10,500 sellers and 300 brands and serves 3 millions customers across the range</p>
        <p className="text-sm text-justify tracking-wide leading-5 mb-8">Maham Jabbar has more than 1 million products to offer, growing at a very fast. Maham Jabbar offers a diverse assatment in categories ranging from consumer.</p>
      </div>
      <div className="md:w-[50%]">
        <Image src={AboutPic} alt="shopping girls" width={500} height={500} className="bg-pink-600 w-[100%]" />
      </div>
    </div>
  )
}

export default AboutSection
