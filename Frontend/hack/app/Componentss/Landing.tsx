import Image from "next/image"
import { AnimatedShinyTextDemo } from "./ShinyText"
import { SparklesTextDemo } from "./Text"
import AiImage from "./ai.png"
import { Aim } from "./Aim"
import { SiteFooter } from "./Footer"



export function Landing(){
    return(
        <>
          <div className="bg-black w-full h-auto p-4 flex flex-col items-center mt-6">
            <div className="w-full flex flex-col items-center p-3">
                <AnimatedShinyTextDemo></AnimatedShinyTextDemo>
                <div className="w-[60%] flex items-center text-center mt-[40px] flex-col space-y-6">
                <h1 className="text-[70px]  font-bold bg-gradient-to-r from-slate-400 via-slate-600 to-slate-700 bg-clip-text text-transparent">
                   <SparklesTextDemo></SparklesTextDemo>
                </h1>
                <p className="text-white font-medium text-[17px]">A AI Platform Where students can learn
                    via AI Irrespective of the place where do they live 
                    and what is their backGround
                </p>
            </div>
            <div className="w-[70%] h-[600px] mt-[60px] shadow-[0px_-40px_80px_-10px_pink]">
                  <Image alt="image" src={AiImage} className="w-full h-full rounded-3xl"></Image>
                </div>
            </div>
            <Aim></Aim>
            <SiteFooter></SiteFooter>
          </div>
        </>
    )
}

