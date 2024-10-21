import Footer from "../components/Footer"
import Header from "../components/Header"
import TopHeader from "../components/TopHeader"
import Image from "next/image"
import mobileimage from '../../../public/signuppageimage.jpg'
import Link from "next/link"

const SignUp = () => {
  return (
    <>
      <TopHeader />
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <Header />
      </div>
      <div className="mt-[40px] mb-[80px] lg:flex w-[100%]">
        <div className="w-[100%] lg:w-[55%]">
          <Image src={mobileimage} alt="mobile" width={500} height={500} className="w-full h-full rounded-md" />
        </div>
        <div className="flex flex-col lg:my-auto lg:ml-[100px] lg:w-[22%] mt-[30px] mx-[50px]">
            <h2 className="text-2xl font-bold tracking-widest mb-4">Create an account</h2>
            <p className="text-sm mb-[40px] font-bold">Enter your details below</p>
            <input type="text" name="name" id="name" placeholder="Name" className="text-sm pb-1 outline-none mb-[30px]" style={{borderBottom:'1px solid #cbd5e1'}} />
            <input type="email" name="email" id="email" placeholder="Email or Phone Number" className="text-sm pb-1 outline-none mb-[30px]" style={{borderBottom:'1px solid #cbd5e1'}}  />
            <input type="password" name="pswd" id="pswd" placeholder="Password" className="text-sm pb-1 outline-none mb-[30px]" style={{borderBottom:'1px solid #cbd5e1'}}  />
            <button className="bg-red-600 py-3 rounded-md text-white text-sm mb-3"><Link href='../'>Create Account</Link></button>
            <div className="flex items-center justify-center border-2 rounded-md mb-[30px]">
              <Image src={require('../../../public/google.png')} alt="Google" width={100} height={100} className="w-[40px] " />
              <span className="text-sm">Sign up with Google</span>
            </div>
            <span className="text-sm text-center text-gray-400">Already have account?<Link href='../login' className="ml-3 text-gray-700 underline mb-1">Log In</Link></span>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default SignUp
