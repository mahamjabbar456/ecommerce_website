import React from 'react'
import TopHeader from '../components/TopHeader'
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import AboutPrivacy from '../components/AboutPrivacy'
import PersonSection from '../components/PersonSection'
import PrivacyPolicy from '../components/PrivacyPolicy'

const About = () => {
  return (
    <>
      <TopHeader />
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <HomeHeader />
      </div>
      <div className="pt-[50px] w-[75%] mx-auto">
        <div className="flex gap-2 md:pb-[50px] pb-[30px]">
          <p className="text-gray-500">Home   /</p>
          <p className="text-black">About</p>
        </div>
        <AboutSection />
        <AboutPrivacy />
        <PersonSection />
      </div>
        <PrivacyPolicy />
      <Footer />
    </>
  )
}

export default About
