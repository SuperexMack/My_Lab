import { BoxRevealDemo } from "./AimHead";
import { HyperTextDemo } from "./AimText";


const HeadingArray = [
  "AI-Generated Summaries" , "Multilingual Support" , "Teacher Accessibility" , 
  "Cost-Effective Solution" , "Training for Local Educators"
]

const dataArray = [
  ["The platform will analyze video lectures and generate short, clear summaries that highlight the main points." , 
    "This will save students’ time and allow them to quickly revise important topics."
  ]
  ,
  [
    "The generated summaries can be translated into any local language, making learning accessible to all students, even those who do not understand English or Hindi well.",
    "This feature ensures that language is not a barrier to education."
  ]
  ,
  [
    "Expert teachers do not need to travel to rural areas to conduct classes. Instead, they can teach from anywhere in the world, and students in remote locations can still benefit from their knowledge.",
    "This will encourage more experienced teachers to participate, improving the overall quality of education in rural areas."
  ]
  ,
  [
    "Traditional schooling requires more teachers, classrooms, and resources, making it expensive to expand education in rural areas.",
    "Our AI platform reduces costs because a few teachers can handle a large number of students by using technology effectively."
  ]
  ,[
    "To make sure rural students fully benefit from this platform, we will train local teachers and volunteers on how to use it.",
    "This will create a self-sustaining system where the community can manage the platform without always depending on external support."
  ]
]

export function Aim(){
  return(
    <>
    <div className="w-full h-auto p-5 flex flex-col items-center mt-[200px]">
       <HyperTextDemo></HyperTextDemo>
       <div className="w-full h-auto p-4 flex flex-col items-center">
            <div className="p-5 space-y-5 md:w-[80%] w-[130%]">

            <div className="flex justify-between w-full">
            <BoxRevealDemo Heading={HeadingArray[0]} first={dataArray[0][0]} second={dataArray[0][1]}></BoxRevealDemo>
            </div>


            <div className="flex justify-end w-full">
            <BoxRevealDemo Heading={HeadingArray[1]} first={dataArray[1][0]} second={dataArray[1][1]}></BoxRevealDemo>
            </div>
           
            <div className="flex justify-between w-full">
            <BoxRevealDemo Heading={HeadingArray[2]} first={dataArray[2][0]} second={dataArray[2][1]}></BoxRevealDemo>
            </div>


            <div className="flex justify-end w-full">
            <BoxRevealDemo Heading={HeadingArray[3]} first={dataArray[3][0]} second={dataArray[3][1]}></BoxRevealDemo>
            </div>

            <div className="flex justify-between w-full">
            <BoxRevealDemo Heading={HeadingArray[4]} first={dataArray[4][0]} second={dataArray[4][1]}></BoxRevealDemo>
            </div>


            </div>
       </div>
    </div>
    </>
  )
}