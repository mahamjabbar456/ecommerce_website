
import Footer from '../components/Footer'
import Header from '../components/Header'
import TopHeader from '../components/TopHeader'
import Image from 'next/image'
import mobileimage from '../../../public/signuppageimage.jpg'
import Link from 'next/link'

const Login = () => {
  return (
    <>
      <TopHeader />
      <div className="md:mt-[40px] mt-[20px] pb-[20px] border-b-2">
        <Header />
      </div>
      <div className="mt-[40px] mb-[80px] lg:flex w-[100%]">
        <div className="lg:w-[55%] w-[100%]">
          <Image src={mobileimage} alt="mobile" width={500} height={500} className="w-full h-full rounded-md" />
        </div>
        <div className="flex flex-col lg:my-auto lg:ml-[100px] lg:w-[22%] mt-[30px] mx-[50px]">
            <h2 className="text-xl font-bold tracking-wide mb-4">Log in To Maham Jabbar</h2>
            <p className="text-sm mb-[40px] font-bold">Enter your details below</p>
            <input type="email" name="email" id="email" placeholder="Email or Phone Number" className="text-sm pb-1 outline-none mb-[30px]" style={{borderBottom:'1px solid #cbd5e1'}}  />
            <input type="password" name="pswd" id="pswd" placeholder="Password" className="text-sm pb-1 outline-none mb-[30px]" style={{borderBottom:'1px solid #cbd5e1'}}  />
            <div className='flex justify-between items-center'>
              <button className="bg-red-600 py-3 rounded-md text-white text-sm mb-3 w-[40%]"><Link href='../'>Log In</Link></button>
              <Link href='../signup' className='text-sm text-red-600'>Forget Password?</Link>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Login
