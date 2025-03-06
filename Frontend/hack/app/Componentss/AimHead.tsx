import { BoxReveal } from "@/registry/magicui/box-reveal";

export function BoxRevealDemo({Heading,first,second}:any) {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[40px] w-auto text-center font-semibold bg-gradient-to-r from-violet-400 via-violet-500 to-pink-400 bg-clip-text text-transparent">
        {Heading}<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>


      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            <li className="font-bold text-white text-[22px]">{first}</li>
            <li className="font-bold text-white text-[22px] mt-5">{second}</li>
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}
