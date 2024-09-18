"use client";

import type { ProjectFrontMatter } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PreviewProps extends ProjectFrontMatter {
  slug: string;
}

const Preview = (props: PreviewProps) => {
  const router = useRouter();

  const handleLink = () => {
    if (props.slug) {
      router.push(`/projects/${props.slug}`);
    }
  };

  return (
    <div
      onClick={handleLink}
      className="group relative max-w-3xl cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-gray-100 lg:max-h-[500px] dark:border-neutral-700 dark:bg-neutral-800/30"
    >
      {props.img.bgSrc && (
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Image
            src={`/aboutme/projects/${props.img.bgSrc}`}
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
        <div className="flex lg:flex-col">
          {props.img.mockupSrc && props.img.mockup === "APP" && (
            <div className="relative w-2/5 lg:order-1 lg:mx-auto lg:h-[620px] lg:w-[300px]">
              <div className="absolute left-0 top-32 h-full w-full lg:top-0">
                <Image
                  src={`/aboutme/projects/${props.img.mockupSrc}`}
                  className="ml-5 scale-150 transform object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.55] lg:ml-0 lg:scale-100 lg:object-cover group-hover:lg:scale-[1.05]"
                  alt={props.title}
                  fill
                />
              </div>
            </div>
          )}
          {props.img.mockupSrc && props.img.mockup === "WEB" && (
            <div className="relative w-[400px] lg:order-1 lg:mx-auto lg:h-[400px] sm:w-[300px]">
              <div className="absolute -bottom-1 -left-10 h-[250px] w-[400px] rounded-lg border-2 border-primary/60 bg-black p-3 transition-transform duration-500 ease-in-out group-hover:scale-[1.05] lg:-bottom-0 lg:-left-0 lg:top-5 md:mx-auto sm:h-[220px] sm:w-[300px]">
                <div className="relative h-full w-full overflow-hidden rounded-md">
                  <Image
                    src={`/aboutme/projects/${props.img.mockupSrc}`}
                    className="object-cover"
                    alt={props.title}
                    fill
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex-1 px-5 pb-40 pt-20 lg:pb-10 lg:text-center">
            <div className="pb-3 font-mono text-4xl font-semibold">
              {props.title}
            </div>
            <div className="opacity-60">{props.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
