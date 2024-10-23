import Image from "next/image";
import Tick from '../../../public/tick.svg';
import LCD from '../../../public/lcd.png';
import RemoteController from '../../../public/remotecontroller.png';
import Credit from '../../../public/creditcard.png';
import Visa from '../../../public/visa.png';
import Dollar from '../../../public/bahamiandollar.png';
import Master from '../../../public/mastercard.png';

const BillingForm = () => {
    return (
        <div className="md:flex md:justify-between">
            <div className="md:w-[40%]">
                <form action="">
                    <div className="pb-6">
                        <label htmlFor="name" className="text-sm text-gray-400 pb-2 tracking-wide">First Name<span className="text-red-500">*</span></label>
                        <div className="">
                            <input type="text" name="name" id="name" className="bg-gray-100 p-2 rounded-md w-[100%]" />
                        </div>
                    </div>
                    <div className="pb-6">
                        <label htmlFor="name" className="text-sm text-gray-400 pb-2 tracking-wide">Company Name</label>
                        <div className="">
                            <input type="text" name="name" id="name" className="bg-gray-100 p-2 rounded-md w-[100%]" />
                        </div>
                    </div>
                    <div className="pb-6">
                        <label htmlFor="name" className="text-sm text-gray-400 pb-2 tracking-wide">Street Address<span className="text-red-500">*</span></label>
                        <div className="">
                            <input type="text" name="name" id="name" className="bg-gray-100 p-2 rounded-md w-[100%]" />
                        </div>
                    </div>
                    <div className="pb-6">
                        <label htmlFor="name" className="text-sm text-gray-400 pb-2 tracking-wide">Apartment,floor,etc. (optional)</label>
                        <div className="">
                            <input type="text" name="name" id="name" className="bg-gray-100 p-2 rounded-md w-[100%]" />
                        </div>
                    </div>
                    <div className="pb-6">
                        <label htmlFor="name" className="text-sm text-gray-400 pb-2 tracking-wide">Town/City<span className="text-red-500">*</span></label>
                        <div className="">
                            <input type="text" name="name" id="name" className="bg-gray-100 p-2 rounded-md w-[100%]" />
                        </div>
                    </div>
                    <div className="pb-6">
                        <label htmlFor="name" className="text-sm text-gray-400 pb-2 tracking-wide">Phone Number<span className="text-red-500">*</span></label>
                        <div className="">
                            <input type="text" name="name" id="name" className="bg-gray-100 p-2 rounded-md w-[100%]" />
                        </div>
                    </div>
                    <div className="pb-6">
                        <label htmlFor="name" className="text-sm text-gray-400 pb-2 tracking-wide">Email Address<span className="text-red-500">*</span></label>
                        <div className="">
                            <input type="text" name="name" id="name" className="bg-gray-100 p-2 rounded-md w-[100%]" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Image src={Tick} alt="tick" />
                        <p className="text-[12px]">Save this information for faster check-out next time</p>
                    </div>
                </form>
            </div>
            <div className="md:w-[50%] mt-5">
                <div className="lg:w-[80%] md:w-[90%]">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <Image src={RemoteController} alt="remote controller" className="w-12 text-sm" />
                        <p>Remote Controller</p>
                    </div>
                    <p>$1100</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <Image src={LCD} alt="lcd monitor" className="w-12 text-sm" />
                        <p>LCD Monitor</p>
                    </div>
                    <p>$650</p>
                </div>
                <p className="font-semibold pb-4">Cart Total</p>
                <div className="flex justify-between border-b-2 text-sm pb-2">
                    <p>Subtotal:</p>
                    <p>$1750</p>
                </div>
                <div className="flex justify-between border-b-2 text-sm py-2">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between text-sm py-2 mb-4">
                    <p>Total:</p>
                    <p>$1750</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4">
                        <div className="p-[10px] bg-white border-2 rounded-full border-black"></div>
                        <p className="text-sm">Bank</p>
                    </div>
                    <div className="flex gap-3">
                        <Image src={Credit} alt="credit card" className="w-6" />
                        <Image src={Visa} alt="visa" className="w-6" />
                        <Image src={Master} alt="master card" className="w-6" />
                        <Image src={Dollar} alt="Dollar" className="w-6" />
                    </div>
                </div>
                <div className="flex gap-4 mb-4">
                    <div className="border-2 border-black bg-white p-1 rounded-full"><div className="p-[6px] bg-black rounded-full"></div></div>
                    <div>Cash on Delivery</div>
                </div>
                </div>
                <div className="flex justify-between mb-4 md:w-[100%]">
                    <button className="border-2 py-3 pr-[70px] md:pr-[45px] lg:pr-[40%] pl-3 rounded-md lg:mr-2">Coupon Code</button>
                    <button className="bg-red-600 px-3 text-white rounded-md py-3">Apply Coupon</button>
                </div>
                <button className="bg-red-600 px-7 text-white rounded-md py-3">Place Order</button>
            </div>
        </div>
    )
}

export default BillingForm
