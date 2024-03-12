import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex  items-center justify-center max-w-5xl">
      <div className="relative w-[300px] h-[300px] sd:w-[350px] sd:h-[350px] md:w-[400px] md:h-[400px]">
        <Image
          className="object-contain"
          src="/documents.png"
          fill
          alt="Document"
        />
      </div>

      <div className="relative w-[400px] h-[400px] hidden md:block">
        <Image
          className="object-contain"
          src="/reading.png"
          fill
          alt="Reading"
        />
      </div>
    </div>
  );
};
