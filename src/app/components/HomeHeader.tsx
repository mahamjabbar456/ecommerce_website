import Link from "next/link";
import search from '../../../public/search.svg';
import Image from "next/image";
import AccountDropDown from "./AccountDropDown";

const HomeHeader = () => {
  return (
    <nav className="lg:flex lg:justify-around lg:items-center lg:w-[1000px] mx-auto lg:gap-10 box-border">
      <div className="md:flex md:items-center md:gap-10 md:justify-around">
      <div className="leftpart">
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
      <div className="flex md:gap-8 gap-4 justify-center md:justify-center md:mt-3 lg:mt-0">
        <div className=" text-black flex items-center bg-gray-200 text-sm py-2 px-4 md:gap-6 gap-3 rounded-lg ">
          <input className="bg-gray-200 outline-none" type="text" name="" id="search" placeholder="What are you looking for?" />
          <Image src={search} alt="search" />
        </div>
        <div className="flex md:gap-6 gap-3">
          <Image src={require('../../../public/heart.svg')} alt="heart" className="cursor-pointer" />
          <Image src={require('../../../public/cart.svg')} alt="cart" className="cursor-pointer" />
          <div className="relative inline-block group">
            <Image src={require('../../../public/account.svg')} alt="account" className="cursor-pointer bg-red-700 rounded-[50%] px-3 w-[40px] h-[40px] " />
            <AccountDropDown />
          </div>
        </div>
      </div>

    </nav>
  )
}

export default HomeHeader
