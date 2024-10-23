import Footer from "../components/Footer"
import HomeHeader from "../components/HomeHeader"
import JustForYou from "../components/JustForYou"
import TopHeader from "../components/TopHeader"
import WishList from "../components/Wishlist"

const Wishlist = () => {
  return (
    <>
      <TopHeader/>
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <HomeHeader />
      </div>
      <div className="md:py-[40px] mx-auto w-[75%]">
        <WishList />
        <JustForYou />
      </div>
      <Footer />
    </>
  )
}

export default Wishlist
