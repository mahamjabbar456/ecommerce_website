import Link from "next/link"

const CartTotal = () => {
  return (
    <div className="lg:flex lg:justify-between mb-[40px] lg:mb-[70px]">
      <div className="flex justify-between lg:inline ">
        <button className="border-2 py-3 pr-[70px] md:pr-[150px] pl-3 rounded-md lg:mr-2">Coupon Code</button>
        <button className="bg-red-600 px-3 text-white rounded-md py-3">Apply Coupon</button>
      </div>
      <div className="border-2 border-black p-5 mt-6 lg:mt-0 rounded-md lg:w-[35%]">
        <p className="font-semibold pb-4">Cart Total</p>
        <div className="flex justify-between border-b-2 text-sm pb-2">
           <p>Subtotal:</p>
           <p>$1750</p>
        </div>
        <div className="flex justify-between border-b-2 text-sm py-2">
            <p>Shipping:</p>
            <p>Free</p>
        </div>
        <div className="flex justify-between text-sm py-2">
            <p>Total:</p>
            <p>$1750</p>
        </div>
        <div className="flex justify-center">
            <Link href={'../checkout'}>
            <button className="bg-red-600 px-4 text-white rounded-md py-2 font-bold">Process to CheckOut</button>
            </Link>
        </div>
        
      </div>
    </div>
  )
}

export default CartTotal
