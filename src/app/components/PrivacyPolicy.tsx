import Image from "next/image";
import Shipping from '../../../public/shipping.svg';
import Service from '../../../public/service.svg';
import Money from '../../../public/moneyback.svg';

const PrivacyPolicy = () => {
    return (
        <div className="mx-auto w-[75%] md:my-[100px] my-[50px]">
            <div className="flex md:justify-center md:gap-20 gap-10 flex-wrap">
                <div className="flex flex-col items-center">
                    <div className="bg-black p-2 rounded-full border-[6px] border-gray-400">
                        <Image src={Shipping} alt="shipping" />
                    </div>
                    <h2 className="mt-4 font-extrabold uppercase ">Free and Fast Delivery</h2>
                    <p className="text-sm">Free Delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-black p-2 rounded-full border-[6px] border-gray-400">
                        <Image src={Service} alt="service" />
                    </div>
                    <h2 className="mt-4 font-extrabold uppercase ">24/7 Customer Service</h2>
                    <p className="text-sm">Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-black p-2 rounded-full border-[6px] border-gray-400">
                        <Image src={Money} alt="money" />
                    </div>
                    <h2 className="mt-4 font-extrabold uppercase ">Money Back Gurantee</h2>
                    <p className="text-sm">We return money within 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
