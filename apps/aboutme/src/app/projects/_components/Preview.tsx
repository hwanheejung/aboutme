"use client";

import ButtonTransition from "@/components/Transitions/ButtonTransition";
import type { ProjectFrontMatter } from "@/types";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GithubIcon from "public/icons/links/github.svg";
import WebAppIcon from "public/icons/webApp.svg";

const cardVariants: Variants = {
  offscreen: {
    scale: 0.85,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8,
    },
  },
};

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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      className="relative max-w-4xl overflow-hidden rounded-xl border border-gray-300 md:max-h-[550px] dark:border-neutral-700 dark:bg-neutral-800/30"
    >
      <div>
        <div className="flex items-center justify-between px-5 pt-5">
          <div className="uppercase tracking-wider">
            {String(props.num).padStart(2, "0")} | {props.role}
          </div>
          <div>{props.platform}</div>
        </div>
        <div className="flex md:flex-col">
          {props.img.mockupSrc && props.img.mockup === "APP" && (
            <div className="relative w-2/5 md:order-1 md:mx-auto md:h-[620px] md:w-[300px]">
              <div className="absolute left-0 top-32 h-full w-full md:top-0">
                <Image
                  src={`/aboutme/projects/${props.img.mockupSrc}`}
                  className="ml-5 scale-150 transform object-contain transition-transform duration-500 ease-in-out md:ml-0 md:scale-100 md:object-cover"
                  alt={props.title}
                  fill
                />
              </div>
            </div>
          )}
          {props.img.mockupSrc && props.img.mockup === "WEB" && (
            <div className="relative w-[400px] md:order-1 md:mx-auto md:h-[400px] sm:w-[300px]">
              <div className="absolute -bottom-1 -left-10 h-[250px] w-[400px] rounded-lg border-2 border-primary/60 bg-black p-3 transition-transform duration-500 ease-in-out md:-bottom-0 md:-left-0 md:top-5 md:mx-auto sm:h-[220px] sm:w-[300px]">
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
          <div className="z-20 flex-1 px-5 pb-5 pt-20 md:pb-10 md:text-center">
            <div className="pb-3 text-4xl font-bold">{props.title}</div>
            <div className="opacity-60">{props.description}</div>
            <div className="mt-28 flex gap-4 md:mt-5 md:flex-col">
              <div className="flex justify-center gap-4">
                {props.site && (
                  <a
                    href={props.site}
                    target="_blank"
                    className="flex items-center justify-center rounded-full dark:border-neutral-700 dark:bg-neutral-800/30"
                  >
                    <ButtonTransition>
                      <WebAppIcon className="h-7 w-7" />
                    </ButtonTransition>
                  </a>
                )}
                {props.github && (
                  <a
                    href={props.github}
                    target="_blank"
                    className="flex items-center justify-center rounded-full dark:border-neutral-700 dark:bg-neutral-800/30"
                  >
                    <ButtonTransition>
                      <GithubIcon className="h-7 w-7" />
                    </ButtonTransition>
                  </a>
                )}
              </div>
              <button
                type="button"
                onClick={handleLink}
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 dark:border-neutral-700 dark:bg-neutral-800/30"
              >
                <ButtonTransition>View Details</ButtonTransition>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preview;
