import Link from "next/link"

const ErrorPage = () => {
  return (
    <>
    <div>
      <h1 className="font-bold text-center text-5xl">404 Not Found</h1>
      <p className="text-lg mt-5">Your visited page not found. You may go home page.</p>
      <button className="bg-red-500 py-3 px-8"><Link href={'../'}>Go To Home Page</Link></button>
    </div>
    </>
  )
}

export default ErrorPage
