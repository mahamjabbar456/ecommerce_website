import AccountSection from "../components/AccountSection"
import Footer from "../components/Footer"
import HomeHeader from "../components/HomeHeader"
import TopHeader from "../components/TopHeader"

const Account = () => {
  return (
    <>
      <TopHeader />
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <HomeHeader />
      </div>
      <div className="py-[70px]  w-[75%] mx-auto">
        <div className="flex flex-wrap justify-between md:pb-[50px] pb-[30px] text-[12px] md:text-sm">
          <div className="flex gap-2">
          <p className="text-gray-500">Home / </p>
          <p className="text-black">My Account</p>
          </div>
          <p>Welcome! <span className="text-red-600">Maham Jabbar</span></p>
        </div>
        <AccountSection />
      </div>
      <Footer />
    </>
  )
}

export default Account
