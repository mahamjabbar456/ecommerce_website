import CartProduct from "../components/CartProduct"
import CartTotal from "../components/CartTotal"
import Footer from "../components/Footer"
import HomeHeader from "../components/HomeHeader"
import TopHeader from "../components/TopHeader"

const Cart = () => {
  return (
    <>
      <TopHeader />
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <HomeHeader />
      </div>
      <div className="py-[50px] w-[75%] mx-auto">
        <div className="flex gap-2 pb-[50px]">
          <p className="text-gray-500">Home   /</p>
          <p className="text-black">Cart</p>
        </div>
        <CartProduct />
        <CartTotal />
      </div>
      <Footer />
    </>
  )
}

export default Cart
