import Link from "next/link"
import down from "../../../public/downarrow.svg"
import Image from "next/image"

// pl-[400px]
const TopHeader = () => {
  return (
    <>
      <div className="bg-black text-white p-4 md:flex md:gap-[150px] md:justify-center md:mx-auto
      ">
        <div className="md:flex text-sm md:gap-3 md:items-center">
            <p className="font-thin md:text-[12px] lg:text-sm mr-1 inline md:mr-0">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <Link href={"#"} className="underline font-bold">Shop Now</Link>
        </div>
        <div className="flex justify-end mt-[-21px] md:mt-0 items-center">
            <ul>English</ul>
            <Image src={down} alt="Down arrow" />
        </div>
      </div>
    </>
  )
}

export default TopHeader
