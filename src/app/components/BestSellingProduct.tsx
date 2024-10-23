import Image from "next/image"
import Star from '../../../public/star.svg';
import Heart from '../../../public/heart.svg';
import Eye from '../../../public/eye.svg';
import Coat from '../../../public/northcoat.png';
import Gucci from '../../../public/gucci.png';
import CpuCooler from '../../../public/liquidcpucooler.png';
import BookShelf from '../../../public/bookshelf.png';

const BestSellingProduct = () => {
  return (
    <>
      <div className="flex justify-between mb-12">
        {/* left div */}
        <div>
          {/* left div upper part */}
          <div className="flex items-center gap-2">
          <div className="w-4 bg-red-700 h-[35px] rounded-sm"></div>
          <p className="text-red-700 text-sm font-bold">This Month</p>
          </div>
          {/* left div lower part */}
          <div className="mt-4 flex gap-20">
            <h1 className="font-bold md:text-3xl text-[20px] tracking-wide">Best Selling Products</h1>
          </div>
        </div>
        {/* right div */}
        <div className="flex items-end md:mr-[44px]">
        <button className="text-center bg-red-600 text-white md:py-[15px] md:px-[40px] px-[20px] py-[10px] text-sm rounded-md font-bold">View All</button>
        </div>
      </div>
      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-6 md:mb-[100px] mb-[50px]">
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm ">
            <Image src={Coat} alt="remote controller" width={600} height={600} className="w-[80%] top-[-30px] left-[15px] absolute" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="heart"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">The north coat</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$260</p>
              <p className="text-gray-500 text-sm font-bold  line-through">$360</p>
            </div>
            <div className="flex mt-3 gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              </div>
              <p className="text-lg font-bold text-gray-500">(65)</p>
            </div>
          </div>
        </div>
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm">
            <Image src={Gucci} alt="Gucci Bag" className="absolute top-[5%] left-[6%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="heart"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Gucci duffle bag</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$960</p>
              <p className="text-gray-500 text-sm font-bold line-through">$1160</p>
            </div>
            <div className="flex mt-3 gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5 text-gray-500" />
              </div>
              <p className="text-lg font-bold text-gray-500">(65)</p>
            </div>
          </div>
        </div>
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm">
            <Image src={CpuCooler} alt="Liquid CPU Cooler" className="absolute top-[9%] right-[8%] w-[80%] " />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="heart"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">RGB Liquid CPU Cooler</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$160</p>
              <p className="text-gray-500 text-sm font-bold line-through">$170</p>
            </div>
            <div className="flex mt-3 gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              </div>
              <p className="text-lg font-bold text-gray-500">(65)</p>
            </div>
          </div>
        </div>
        <div>
        {/* Card Upper part */}
          <div className="bg-gray-200 h-[190px] w-[220px] relative rounded-sm">
            <Image src={BookShelf} alt="Book Shelf" className="absolute top-[10%] left-[10%] w-[80%]" />
            <div  className="absolute top-2 right-[6px] bg-white m-1 p-2 rounded-[50%]">
              <Image src={Heart} alt="heart" className="w-4"  />
            </div>
            <div  className="absolute top-[46px] right-[6px] bg-white m-1 p-1 rounded-[50%]">
              <Image src={Eye} alt="heart"  />
            </div>
          </div>
          {/* Card Lower part */}
          <div>
            <h2 className="font-bold my-3">Small BookSelf</h2>
            <div className="flex gap-5">
              <p className="text-red-600 text-sm font-bold">$360</p>
            </div>
            <div className="flex mt-3 gap-2">
              <div className="flex gap-1">
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              <Image src={Star} alt="rating" className="w-5" />
              </div>
              <p className="text-lg font-bold text-gray-500">(65)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestSellingProduct
