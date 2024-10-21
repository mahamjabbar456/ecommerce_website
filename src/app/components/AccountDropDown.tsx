import React from 'react'
import Image from 'next/image'

const AccountDropDown = () => {
    return (
        <div className='bg-[#5f4a70] w-[200px] pt-[20px] pl-[20px] pb-2 rounded-md absolute top-[45px] right-[-170px] hidden group-hover:block transition duration-300 ease-in-out  hover:z-10'>
            <div className='flex items-center gap-4 mb-2'>
                <Image src={require('../../../public/account.svg')} alt='account' />
                <p className='text-white text-sm'>Manage My Account</p>
            </div>
            <div className='flex items-center gap-4 mb-2'>
                <Image src={require('../../../public/shoppingbag.svg')} alt='account' />
                <p className='text-white text-sm'>My Order</p>
            </div>
            <div className='flex items-center gap-4 mb-2'>
                <Image src={require('../../../public/cancelation.svg')} alt='account' />
                <p className='text-white text-sm'>My Cancellations</p>
            </div>
            <div className='flex items-center gap-4 mb-2'>
                <Image src={require('../../../public/review.svg')} alt='account' />
                <p className='text-white text-sm'>My Reviews</p>
            </div>
            <div className='flex items-center gap-4 mb-2'>
                <Image src={require('../../../public/logout.svg')} alt='account' className='rotate-180' />
                <p className='text-white text-sm'>Logout</p>
            </div>
        </div>
    )
}

export default AccountDropDown
