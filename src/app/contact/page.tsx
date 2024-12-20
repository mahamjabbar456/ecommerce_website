import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import HomeHeader from "../components/HomeHeader"
import TopHeader from "../components/TopHeader"

const Contact = () => {
  return (
    <>
      <TopHeader />
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <HomeHeader />
      </div>
      <div className="pt-[50px] w-[75%] mx-auto">
        <div className="flex gap-2 md:pb-[50px] pb-[30px]">
          <p className="text-gray-500">Home   /</p>
          <p className="text-black">Contact</p>
        </div>
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}

export default Contact
