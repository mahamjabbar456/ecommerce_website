import Image from "next/image";
import LeftArrow from "../../../public/leftarrow.svg";
import RightArrow from "../../../public/rightarrow2.svg";
import Star from '../../../public/star.svg';
import Heart from '../../../public/heart.svg';
import Eye from '../../../public/eye.svg';
import BreadDog from '../../../public/breaddryfood.png';
import DSLCamera from '../../../public/dslcamera.png';
import LighteningKeyboard from '../../../public/lighteningkeyboard.png';
import Curology from "../../../public/curlogyproducts.png";
import Car from "../../../public/electriccar.png";
import Soccer from "../../../public/soccercleats.png";
import RemoteController from '../../../public/remotecontroller.png';
import Coat from '../../../public/northcoat.png';

const Products = () => {
  return (
    <div className="mx-auto w-[75%]">
      <div className="flex justify-between md:mb-12 mb-[30px]">
        {/* left div */}
        <div>
          {/* left div upper part */}
          <div className="flex items-center gap-2">
          <div className="w-4 bg-red-700 h-[35px] rounded-sm"></div>
          <p className="text-red-700 text-sm font-bold">Our Products</p>
          </div>
          {/* left div lower part */}
          <div className="mt-4 flex gap-20">
            <h1 className="font-bold md:text-3xl text-[20px] tracking-wide">Explore Our Products</h1>
          </div>
        </div>
        {/* right div */}
        <div className="flex items-end ">
          <div className='bg-gray-200 m-2 p-2 rounded-[50%]'>
          <Image src={LeftArrow} alt="left arrow" className="align-center" />
          </div>
          <div className='bg-gray-200 my-2 mr-[44px] p-2 rounded-[50%]'>
          <Image src={RightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-[40px]">
        {/* First Product */}
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm ">
            <Image src={BreadDog} alt="bread dog food" width={600} height={600} className="w-[80%] top-1 left-[15px] absolute" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="eye"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Bread Dry Dog Food</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$100</p>
              <div className="flex gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              </div>
              <p className="text-sm font-bold text-gray-500">(65)</p>
            </div>
            </div>
            
          </div>
        </div>
        {/* second product */}
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm ">
            <Image src={DSLCamera} alt="dsl camera" width={600} height={600} className="w-[80%] top-1 left-[15px] absolute" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="eye"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">CANON EOS DSLR Camera</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$360</p>
              <div className="flex gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              </div>
              <p className="text-sm font-bold text-gray-500">(95)</p>
            </div>
            </div>
            
          </div>
        </div>
        {/* third product */}
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm ">
            <Image src={LighteningKeyboard} alt="dsl camera" width={600} height={600} className="rotate-[345deg] absolute top-[8%] left-[8%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="eye"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">AK-900 Wired Keyboard</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$960</p>
              <div className="flex gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              </div>
              <p className="text-sm font-bold text-gray-500">(325)</p>
            </div>
            </div>
            
          </div>
        </div>
        {/* fourth product */}
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm ">
            <Image src={Curology} alt="dsl camera" width={600} height={600} className="absolute top-[8%] w-[100%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="eye"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Curology Product Sets</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$500</p>
              <div className="flex gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              </div>
              <p className="text-sm font-bold text-gray-500">(145)</p>
            </div>
            </div>
            
          </div>
        </div>
        {/* fifth product */}
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm ">
          <div className="w-[48px]  bg-green-600 text-white text-center text-sm rounded-sm absolute top-2 left-2">-40%</div>
            <Image src={Car} alt="electric car" width={600} height={600} className="absolute top-[16%] w-[100%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="eye"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Kids Electric Car</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$960</p>
              <div className="flex gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              </div>
              <p className="text-sm font-bold text-gray-500">(65)</p>
            </div>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="rounded-full border-2 border-black p-[2px]">
                <div className="bg-purple-500 rounded-full p-2"></div>
            </div>
            <div className="p-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
        {/* Sixth Product */}
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm ">
            <Image src={Soccer} alt="Soccer Cleats" width={600} height={600} className="absolute top-[16%] w-[100%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="eye"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Jr. Zoom Soccer Cleats</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$1160</p>
              <div className="flex gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              </div>
              <p className="text-sm font-bold text-gray-500">(35)</p>
            </div>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="rounded-full border-2 border-black p-[2px]">
                <div className="bg-yellow-400 rounded-full p-2"></div>
            </div>
            <div className="p-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
        {/* Seventh product */}
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm ">
          <div className="w-[48px]  bg-green-600 text-white text-center text-sm rounded-sm absolute top-2 left-2">-40%</div>
            <Image src={RemoteController} alt="remote controller" width={600} height={600} className="rotate-[345deg]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="eye"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Model-View-Controller</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$660</p>
              <div className="flex gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              </div>
              <p className="text-sm font-bold text-gray-500">(55)</p>
            </div>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="rounded-full border-2 border-black p-[2px]">
                <div className="bg-red-500 rounded-full p-2"></div>
            </div>
            <div className="p-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
        {/* Eigth Product */}
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm ">
            <Image src={Coat} alt="North Coat" width={600} height={600} className="w-[80%] top-[-30px] left-[15px] absolute" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="eye"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">The north coat</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$660</p>
              <div className="flex gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              <Image src={Star} alt="rating" className="w-4" />
              </div>
              <p className="text-sm font-bold text-gray-500">(55)</p>
            </div>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="rounded-full border-2 border-black p-[2px]">
                <div className="bg-pink-300 rounded-full p-2"></div>
            </div>
            <div className="p-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Button */}
      <button className="text-center bg-red-600 text-white py-[15px] px-[40px] text-sm rounded-md font-bold lg:ml-[350px] ml-[65px] md:ml-[30%] md:mb-[100px] mb-[50px]">View All Products</button>
    </div>
  )
}

export default Products
