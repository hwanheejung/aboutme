import { Preview } from "@/types/project";
import Image from "next/image";

const Preview = (props: Preview) => {
  const mockup = require(`public/projects/${props.img.mockupSrc}`);
  let hoverBg;
  if (props.img.bgSrc) {
    hoverBg = require(`public/projects/${props.img.bgSrc}`);
  }

  return (
    <div className="group relative max-w-3xl cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
      {hoverBg && (
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Image
            src={hoverBg.default}
            alt={props.title}
            fill
            className="scale-[1.3] object-contain"
          />
        </div>
      )}
      <div>
        <div className="flex items-center justify-between px-5 pt-5 font-thin opacity-60">
          <div className="uppercase tracking-wider">
            {String(props.num).padStart(2, "0")} | {props.role}
          </div>
          <div>{props.platform}</div>
        </div>
        <div className="flex md:flex-col">
          {mockup && props.img.mockup === "APP" && (
            <div className="relative w-2/5">
              <div className="absolute left-0 top-32 h-full w-full">
                <Image
                  src={mockup.default}
                  className="ml-5 scale-150 transform object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.55]"
                  alt={props.title}
                  fill
                />
              </div>
            </div>
          )}
          {mockup && props.img.mockup === "WEB" && (
            <div className="relative w-[400px]">
              <div className="absolute -bottom-1 -left-10 h-[250px] w-[400px] rounded-lg border-2 border-primary/60 bg-black p-3 transition-transform duration-500 ease-in-out group-hover:scale-[1.05]">
                <div className="relative h-full w-full overflow-hidden rounded-md">
                  <Image
                    src={mockup.default}
                    className="object-cover"
                    alt={props.title}
                    fill
                  />
                </div>
              </div>
            </div>
          )}
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
