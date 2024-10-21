import Link from "next/link";
import QrCode from '../../../public/qrcode.jpeg';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-5 mx-auto gap-5 md:gap-10 py-[40px] px-[90px]">
      <div className="logo">
        <h1 className="font-bold text-xl mb-[15px]">Maham Jabbar</h1>
        <h2 className="font-bold text-lg mb-[15px]">Subscribe</h2>
        <p className="text-sm mb-[10px]">Get 10% off your first order</p>
        <div className="email flex items-center relative w-[175px] p-2 rounded-md" style={{border:"1px solid white"}}>
        <input type="email" id="email" placeholder="Enter your email" className="text-sm outline-none w-[173px]" style={{background:'transparent'}} />
        {/* <FontAwesomeIcon icon={faPaperPlaneTop} /> */}
        <FontAwesomeIcon className="absolute right-4 w-3" icon={faPaperPlane} />
        </div>
      </div>
      <div className="support">
        <h2 className="font-bold text-lg mb-[15px]">Support</h2>
        <p className="text-sm mb-[10px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p className="text-sm mb-[10px]">maham@gmail.com</p>
        <p className="text-sm mb-[10px]">023749327493</p>
      </div>
      <div className="account">
        <h2 className="font-bold text-lg mb-[15px]">Account</h2>
        <p className="text-sm mb-[10px]"><Link href={'#'}>My Account</Link></p>
        <p className="text-sm mb-[10px]"><Link href={'#'}>Login/ Register</Link></p>
        <p className="text-sm mb-[10px]"><Link href={'#'}>Cart</Link></p>
        <p className="text-sm mb-[10px]"><Link href={'#'}>Wishlist</Link></p>
        <p className="text-sm mb-[10px]"><Link href={'#'}>Shop</Link></p>
      </div>
      <div className="quicklink">
        <h2 className="font-bold text-lg mb-[15px]">Quick Link</h2>
        <p className="text-sm mb-[10px]"><Link href={'#'}>Privacy Policy</Link></p>
        <p className="text-sm mb-[10px]"><Link href={'#'}>Terms of Use</Link></p>
        <p className="text-sm mb-[10px]"><Link href={'#'}>FAQ</Link></p>
        <p className="text-sm mb-[10px]"><Link href={'#'}>Contact</Link></p>
      </div>
      <div>
        <h2 className="mb-[15px]">Download App</h2>
        <p className="text-[10px] mb-[8px]">Save $3 with App New User Only</p>
        <div className="flex" style={{columnGap:'5px'}}>
          <Image src={QrCode} alt="QrCode Pic" width={150} height={150} className="w-[30%]" />
          <Image src={require('../../../public/appleandgoogle.png')} alt="apple and google" width={150} height={150} className="w-[40%]" />
        </div>
        <div className="flex items-center content-center gap-4 mt-[15px]">
          <Image src={require('../../../public/facebook.svg')} alt="facebook icon" className="w-4" />
          <Image src={require('../../../public/twitter.svg')} alt="twitter icon" className="w-4" />
          <Image src={require('../../../public/instagram.svg')} alt="instagram icon" className="w-4" />
          <Image src={require('../../../public/linkedin.svg')} alt="linkedin icon" className="w-4" />
        </div>
      </div>
      </div>
      <p className="text-center text-gray-400 py-5" style={{borderTop:'1px solid #94a3b8'}}>&#169; Copyright Maham 2024. All right reserved</p>
    </div>
  )
}

export default Footer
