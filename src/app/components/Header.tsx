import Link from "next/link";
import search from '../../../public/search.svg';
import Image from "next/image";

// className="flex justify-around items-center gap-[80px] mx-[80px]"

const Header = () => {
  return (
    <nav className="lg:flex lg:justify-around lg:items-center lg:w-[1000px] mx-auto lg:gap-10 box-border">
      <div className="md:flex md:items-center md:gap-10 md:justify-around">
      <div className="leftpart md:mr-[60px]">
           <h1 className="font-bold text-xl text-center mb-2 md:mb-0">Maham Jabbar</h1>
       </div>
       <div className="middlepart">
            <ul className="flex gap-10 font-extralight text-sm justify-center mb-2 md:mb-0">
                <li><Link href={'../'}>Home</Link></li>
                <li><Link href={'../contact'}>Contact</Link></li>
                <li><Link href={'../about'}>About</Link></li>
                <li><Link href={'../signup'}>SignUp</Link></li>
            </ul>
       </div>
      </div>
       
       <div className="rightpart text-black flex items-center mx-auto w-[260px] mt-3 lg:mt-0 bg-gray-200 text-sm py-2 px-4 md:gap-6 gap-3 rounded-lg ">
            <input className="bg-gray-200 outline-none" type="text" name="" id="search" placeholder="What are you looking for?" />
            <Image src={search} alt="search" />
       </div>
    </nav>
  )
}

export default Header
