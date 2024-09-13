import { Preview } from "@/types/project";
import Image from "next/image";

const Preview = (props: Preview) => {
  const mockup = require(`public/projects/${props.imgSrc}`);
  let hoverBg;
  if (props.hoverBg) {
    hoverBg = require(`public/projects/${props.hoverBg}`);
  }

  return (
    <div className="group relative max-w-3xl cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
      {hoverBg && (
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Image
            src={hoverBg.default}
            alt={props.title}
            fill
            className="scale-125 object-contain"
          />
        </div>
      )}
      <div>
        <div className="flex items-center justify-between px-5 pt-5 font-thin opacity-60">
          <div className="uppercase tracking-wider">
            0{props.num} | {props.role}
          </div>
          <div>{props.platform}</div>
        </div>
        <div className="flex md:flex-col">
          <div className="relative w-2/5">
            <div className="absolute left-0 top-32 h-full w-full">
              {mockup && (
                <Image
                  src={mockup.default}
                  className="ml-5 scale-150 transform object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.55]"
                  alt={props.title}
                  fill
                />
              )}
            </div>
          </div>
          <div className="flex-1 px-5 pb-40 pt-20">
            <div className="pb-3 font-mono text-4xl font-semibold">
              {props.title}
            </div>
            <div>{props.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
