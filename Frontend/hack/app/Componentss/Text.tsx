import { SparklesText } from "@/registry/magicui/sparkles-text";

export function SparklesTextDemo({item}:any) {
  return <SparklesText className="text-white text-[30px] md:text-[60px] -mt-24" text={item} />;
}
