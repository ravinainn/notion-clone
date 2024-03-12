import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo.svg" alt="Logo" width={40} height={40} />
      <span className={cn("font-semibold", font.className)}>Jotion</span>
      <div className="md:"></div>
    </div>
  );
};
