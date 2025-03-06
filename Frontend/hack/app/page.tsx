import Image from "next/image";
import { Navbar } from "./Componentss/Navbar";
import { Landing } from "./Componentss/Landing";

export default function Home() {
  return(
    <>
    <Navbar></Navbar>
    <div className="flex flex-col">
     <Landing></Landing>
    </div>
    </>
  )
}
