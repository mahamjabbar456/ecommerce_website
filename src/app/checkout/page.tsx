import BillingForm from "../components/BillingForm"
import Footer from "../components/Footer"
import HomeHeader from "../components/HomeHeader"
import TopHeader from "../components/TopHeader"

const CheckOut = () => {
  return (
    <>
      <TopHeader />
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <HomeHeader />
      </div>
      <div className="py-[70px]  w-[75%] mx-auto">
        <div className="flex flex-wrap gap-2 md:pb-[50px] pb-[30px] text-[12px] md:text-sm">
          <p className="text-gray-500">Account / My Account  / Product  / View Cart  /</p>
          <p className="text-black">CheckOut</p>
        </div>
        <h2 className="font-bold text-3xl tracking-wide pb-[30px]">Billing Details</h2>
        <BillingForm />
      </div>
      <Footer />
    </>
  )
}

export default CheckOut
