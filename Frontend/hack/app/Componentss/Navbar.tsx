import Link from "next/link"

export function Navbar(){
    return(
        <>
        <div className="bg-black w-full h-[100px] flex items-center fixed top-0 z-10">
           <div className="absolute left-[15%]">
             <h1 className="font-bold text-[30px] text-white">Virtual-Lab</h1>
           </div>
           <div className="absolute right-[10%] flex space-x-7">
               <Link href={"/"}><span className="text-slate-400 hover:text-white text-[17px] font-bold">Home</span></Link>
               <Link href={"/"}><span className="text-slate-400 hover:text-white text-[17px] font-bold">Contact</span></Link>
               <Link href={"/"}><span className="text-slate-400 hover:text-white text-[17px] font-bold">About</span></Link>
               <Link href={"/"}><span className="text-slate-400 hover:text-white text-[17px] font-bold">Contribute</span></Link>
           </div>
        </div>
        </>
    )
}