import { NeonGradientCard } from "@/registry/magicui/neon-gradient-card";
import AiImage from "./ai.png"
import Image from "next/image";

export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
      <Image alt="image" src={AiImage} className="w-full h-full rounded-3xl"></Image>
      </span>
    </NeonGradientCard>
  );
}
