import Image from "next/image";
import Speaker from "../../../public/speaker1.png";
import PlayStation from "../../../public/playstation.png";
import Women from '../../../public/women.png';
import Perfume from '../../../public/perfume.png';

const Featured = () => {
    return (
        <div className="mx-auto w-[75%]">
            <div className="md:mb-12 mb-[30px]">
                {/* left div upper part */}
                <div className="flex items-center gap-2">
                    <div className="w-4 bg-red-700 h-[35px] rounded-sm"></div>
                    <p className="text-red-700 text-sm font-bold">Featured</p>
                </div>
                {/* left div lower part */}
                <div className="mt-4 flex gap-20">
                    <h1 className="font-bold md:text-3xl text-[20px] tracking-wide">New Arrival</h1>
                </div>
            </div>
            <div className="md:flex w-[100%] md:flex-wrap md:gap-2">
                <div className="bg-black md:w-[49%] w-[100%] rounded-md relative mb-2 md:mb-0">
                    <Image src={PlayStation} alt="play station" className="w-[100%] md:relative md:top-24" />
                    <div className="text-white absolute bottom-3 ml-4">
                        <h2 className="font-bold text-md md:text-lg md:mb-2">Play Station 5</h2>
                        <p className="text-[10px] md:text-sm">Black and white version of ps5 is coming out on sale.</p>
                        <div className="flex items-center gap-2">
                            <h1 className=" font-light md:mt-2 md:text-[16px] underline underline-offset-2 decoration-white text-[10px]">Shop Now </h1>
                            <p className=" md:mt-2 font-bold md:text-[16px] text-[10px]">&#10230;</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-[49%] flex gap-2 flex-col flex-wrap">
                    <div className="bg-black w-[100%] rounded-md relative">
                        <Image src={Women} alt="Women collection" />
                        <div className="text-white absolute bottom-3 ml-4">
                            <h2 className="font-bold text-sm md:text-lg md:mb-2">Women Collection</h2>
                            <p className="text-[10px] md:text-sm">Featured women collection that give you another vibe.</p>
                            <div className="flex items-center gap-2">
                                <h1 className="font-light md:mt-2 md:text-[16px] underline underline-offset-2 decoration-white text-[10px]">Shop Now </h1>
                                <p className="md:mt-2 font-bold md:text-[16px] text-[10px]">&#10230;</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] flex gap-2">
                        <div className="bg-black w-[50%] rounded-md relative">
                            <Image src={Speaker} alt="speaker" />
                            <div className="text-white absolute md:bottom-1 bottom-3 lg:bottom-3 ml-4">
                                <h2 className="font-bold text-sm md:text-lg lg:mb-2">Speaker</h2>
                                <p className="text-[10px] md:text-sm lg:text-[16px] md:leading-none">Amazon wireless speakers</p>
                                <div className="flex items-center gap-2">
                                    <h1 className="font-light md:mt-0 md:text-sm lg:mt-2 lg:text-[16px] underline underline-offset-2 decoration-white text-[10px]">Shop Now </h1>
                                    <p className="md:mt-0 font-bold md:text-sm text-[10px] lg:mt-2 lg:text-[16px]">&#10230;</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black w-[50%] rounded-md relative">
                            <Image src={Perfume} alt="perfume" />
                            <div className="text-white absolute md:bottom-1 bottom-3 lg:bottom-3 ml-4">
                                <h2 className="font-bold text-sm md:text-lg lg:mb-2">Perfume</h2>
                                <p className="text-[10px] md:text-sm md:leading-none lg:text-[16px]">Gucci intense perfume</p>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-white font-light md:mt-0 md:text-sm underline underline-offset-2 decoration-white text-[10px] lg:mt-2 lg:text-[16px]">Shop Now </h1>
                                    <p className="text-white md:mt-0 font-bold md:text-sm text-[10px] lg:mt-2 lg:text-[16px]">&#10230;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
