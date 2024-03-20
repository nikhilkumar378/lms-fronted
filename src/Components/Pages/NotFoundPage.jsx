import { useNavigate } from "react-router-dom"

function NotFoundPage(){

  const navigate = useNavigate()
  return(
<div className="w-full h-screen flex flex-col justify-center items-center bg-[#1A2238]">

<h1 className="font-extrabold text-9xl text-white tracking-widest ">
404
</h1>

<div className="text-white px-2 bg-black text-sm rounded rotate-12 absolute">

  Page Not Found
</div>

<button className="mt-5">

  <a className="relative inline-block text-sm font-medium text-[#FF6A3D]group active:text-yellow-500 focus:outline-none focus:ring">
    <span onClick={()=>navigate(-1)} className="px-8 py-3 block border border-current bg-[#1A2238] relative">Go Back</span>
  </a>
</button>

</div>

  )
}
export default NotFoundPage