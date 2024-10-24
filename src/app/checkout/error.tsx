'use client';

import ErrorPage from "../components/404page";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import TopHeader from "../components/TopHeader";



const error = () => {
  return (
    <>
      <TopHeader />
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <HomeHeader />
      </div>
      <div className="pt-[50px] w-[75%] mx-auto">
        <div className="flex gap-2 md:pb-[50px] pb-[30px]">
          <p className="text-gray-500">Home   /</p>
          <p className="text-black">404 error</p>
        </div>
      </div>
      <ErrorPage />
      <Footer />
    </>
  )
}

export default error
