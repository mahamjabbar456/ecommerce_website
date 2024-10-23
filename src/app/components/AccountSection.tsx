
const AccountSection = () => {
  return (
    <>
      <div className="md:flex md:justify-between md:gap-5">
            <div className="md:w-[20%]">
            <pre className="font-bold mb-4 tracking-normal">Manage My Account</pre>
                <pre className="text-sm mb-2 text-red-500 tracking-normal">   My Profile</pre>
                <pre className="text-sm mb-2 tracking-normal">   Address Book</pre>
                <pre className="text-sm mb-2 tracking-normal">   My Payment Options</pre>
            <pre className="font-bold mb-4 tracking-normal">My Orders</pre>
                    <pre className="text-sm mb-2 tracking-normal">   My Cancellations</pre>
                    <pre className="text-sm mb-2 tracking-normal">   My Returns</pre>
            <pre className="font-bold mb-4 tracking-normal">My WishList</pre>
            </div>
            <div className="bg-white py-5 px-3 md:p-10 shadow-lg md:w-[70%] w-[100%] rounded-md">
                <form action="">
                    <p className="text-lg text-red-500 font-bold mb-4">Edit Your Profile</p>
                    <div className="flex gap-4">
                    <div>
                        <label htmlFor="fname" className="mb-2 font-bold">First Name</label>
                        <input type="text" name="fname" id="fname" placeholder="Maham" className="bg-gray-100 p-2 rounded-md w-[100%]" />
                    </div>
                    <div>
                        <label htmlFor="lname" className="mb-2 font-bold">Last Name</label>
                        <input type="text" name="lname" id="lname" placeholder="Jabbar" className="bg-gray-100 p-2 rounded-md w-[100%]" />
                    </div>
                    </div>
                    <div className="md:flex md:gap-4">
                        <div className="my-4">
                            <label htmlFor="email" className="font-bold md:mr-10">Email</label>
                            <input type="email" name="email" id="email" placeholder="test@gmail.com" className="bg-gray-100 p-2 mt-2 rounded-md w-[100%]" />
                        </div>
                        <div className="my-4">
                            <label htmlFor="address" className=" font-bold md:mr-4">Address</label>
                            <input type="text" name="address" id="address" placeholder="Kingston,5236,United State" className="bg-gray-100 p-2 mt-2 rounded-md w-[100%] " />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="pswd" className="font-bold">Password Changes</label>
                        <input type="passwod" name="pswd" id="pswd" placeholder="Current Password" className="bg-gray-100 p-2 rounded-md w-[100%] mt-2" />
                        <input type="passwod" name="pswd" id="pswd" placeholder="New Password" className="bg-gray-100 p-2 rounded-md w-[100%] mt-3" />
                        <input type="passwod" name="pswd" id="pswd" placeholder="Confirm New Password" className="bg-gray-100 p-2 rounded-md w-[100%] mt-3" />
                    </div>
                    <div className="mt-4 flex justify-end gap-3">
                        <button>Cancel</button>
                        <button className="bg-red-600 px-3 md:px-5 text-white rounded-md py-3">Save Changes</button>
                    </div>
                </form>
            </div>
      </div>
    </>
  )
}

export default AccountSection
