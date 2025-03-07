import { AudioWaveform } from 'lucide-react';
import { Video } from 'lucide-react';
import { Newspaper } from 'lucide-react';




export default function(){
    return(
        <>
        <div className="bg-slate-950 w-full min-h-screen flex justify-between">
           <div className="w-[20%] min-h-screen flex flex-col items-center space-y-7">
                <h1 className="mt-[50px] font-bold text-[40px] text-slate-100">Virtual-Lab</h1>
                <div className="w-[90%] h-auto p-4 flex flex-col items-center border space-y-2 border-slate-600 rounded-3xl">
                <div className='flex items-center justify-center bg-slate-900 w-[90%] rounded-xl hover:bg-slate-800 hover:cursor-pointer  mt-6 p-5 space-x-2'>
                  <AudioWaveform className='text-slate-400'></AudioWaveform>
                  <h1 className='text-slate-400 font-bold'>Audio -- Text</h1>
               </div>

               <div className='flex items-center justify-center bg-slate-900 w-[90%] rounded-xl hover:bg-slate-800 hover:cursor-pointer  mt-6 p-5 space-x-2'>
                  <Video className='text-slate-400'></Video>
                  <h1 className='text-slate-400 font-bold'>Video -- Text</h1>
               </div>


               <div className='bg-slate-900 w-[90%] rounded-xl hover:bg-slate-800 hover:cursor-pointer flex items-center justify-center  mt-6 p-5 space-x-2'>
                  <Newspaper className='text-slate-400'></Newspaper>
                  <h1 className='text-slate-400 font-bold'>PDF -- Text</h1>
               </div>
                </div>
           </div>

           <div className="bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 w-[80%]">

           <div className="flex justify-end items-center w-full h-[80%]">
               
            </div>

            <div className="flex justify-center items-center w-full h-[20%]">
               <div className='w-[70%] h-[80%] flex flex-col items-center p-2 space-y-5 bg-slate-900 rounded-xl'>
                  <h1 className='text-slate-300 font-medium text-center'>Add your Audio file here and Add your preferred Language</h1>
                  <div className='w-[80%] h-full flex justify-center space-x-20 items-center'>
                    <div className='border border-violet-500 w-[70%] flex border-dashed justify-center items-center p-4 rounded-xl space-x-2'>
                    <AudioWaveform className='h-[40px] w-[40px] text-white'></AudioWaveform>
                    <h1 className='text-white'>Upload File</h1>
                    </div>
                     <div className="w-full sm:w-auto">
                  <select className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="chinese">Chinese</option>
                    <option value="japanese">Japanese</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                  </select>
                </div>
                
                <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Convert
                </button>
                  </div>
               </div>
            </div>
           </div>
        </div>
        </>
    )
}