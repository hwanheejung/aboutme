import { Preview } from "@/types";
import Image from "next/image";

interface IntroProps {
  data: Preview;
  subTitle?: string;
}
const Intro = ({ data, subTitle }: IntroProps) => {
  const mockup = require(`public/projects/${data.img.mockupSrc}`);
  return (
    <div className="min-h-section flex flex-col items-center pb-10">
      <h1 className="pb-4 pt-20 text-4xl font-bold">{data.title}</h1>
      <p className="max-w-[450px] pb-10 text-center font-thin tracking-wider opacity-60">
        {subTitle ? subTitle : data.description}
      </p>

      {data.img.mockup === "WEB" ? (
        <div className="rounded-lg border-2 border-primary/60 bg-black p-3">
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <Image
              src={mockup.default}
              alt={data.title}
              width={600}
              height={450}
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        <Image
          src={mockup.default}
          alt={data.title}
          width={250}
          height={200}
          className="object-contain"
        />
      )}
    </div>
  );
};

export default Intro;
