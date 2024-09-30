import { ProjectFrontMatter } from "@/types";
import Image from "next/image";

interface IntroProps {
  data: ProjectFrontMatter;
}
const Intro = ({ data }: IntroProps) => {
  return (
    <div className="min-h-section flex flex-col items-center pb-10">
      <h1 className="pb-4 pt-20 text-4xl font-bold">{data.title}</h1>
      <p className="max-w-[450px] pb-10 text-center opacity-60">
        {data.description}
      </p>

      {data.img.mockup === "WEB" ? (
        <div className="rounded-lg border-2 border-primary/60 bg-black p-3">
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <Image
              src={`/aboutme/projects/${data.img.mockupSrc}`}
              alt={data.title}
              width={600}
              height={450}
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        <Image
          src={`/aboutme/projects/${data.img.mockupSrc}`}
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
