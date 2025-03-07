import { AudioWaveform } from 'lucide-react';
import { Video } from 'lucide-react';
import { Newspaper } from 'lucide-react';




export default function(){
    return(
        <>
        <div className="bg-slate-950 w-full min-h-screen flex justify-between">
           <div className="w-[20%] min-h-screen flex flex-col items-center space-y-7">
                <h1 className="mt-[50px] font-bold text-[40px] text-slate-100">Virtual-Lab</h1>
                <div className="w-[80%] h-[80%] flex flex-col items-center border space-y-4 border-slate-600 rounded-3xl">
                <div className='flex items-center justify-center bg-slate-900 w-[80%] rounded-xl hover:bg-slate-800 hover:cursor-pointer  mt-6 p-5 space-x-2'>
                  <AudioWaveform className='text-slate-400'></AudioWaveform>
                  <h1 className='text-slate-400 font-bold'>Audio -- Text</h1>
               </div>

               <div className='flex items-center justify-center bg-slate-900 w-[80%] rounded-xl hover:bg-slate-800 hover:cursor-pointer  mt-6 p-5 space-x-2'>
                  <Video className='text-slate-400'></Video>
                  <h1 className='text-slate-400 font-bold'>Video -- Text</h1>
               </div>


               <div className='bg-slate-900 w-[80%] rounded-xl hover:bg-slate-800 hover:cursor-pointer flex items-center justify-center  mt-6 p-5 space-x-2'>
                  <Newspaper className='text-slate-400'></Newspaper>
                  <h1 className='text-slate-400 font-bold'>PDF -- Text</h1>
               </div>
                </div>
           </div>

           <div className="bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 w-[80%]">

           {/* <div className="flex justify-end items-center w-full h-[90%]">
               
            </div>

            <div className="flex justify-end items-center w-full h-[10%]">

              </div> */}
           </div>
        </div>
        </>
    )
}