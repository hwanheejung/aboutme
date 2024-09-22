import WebAppIcon from "public/icons/webApp.svg";
import BookIcon from "public/icons/book.svg";
import ButtonTransition from "@/components/Transitions/ButtonTransition";
import ArrorRight from "public/icons/arrow-right.svg";
import Link from "next/link";

const WhatIDo = () => {
  return (
    <>
      <h2 className="py-10 text-center text-3xl font-bold uppercase text-accent-lime">
        what i do
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        <div className="flex flex-col items-center rounded-lg border border-gray-300/60 px-5 pb-5 pt-10 text-center dark:border-neutral-700 dark:bg-neutral-800/30">
          <WebAppIcon className="h-20 text-accent-teal" />
          <div className="pb-3 pt-5 text-xl font-bold text-accent-teal">
            Web&App Development
          </div>
          <p className="pb-5 text-primary">
            Solve real-world problems through development
          </p>

          <Link
            href="/projects"
            className="w-full rounded-full border border-gray-300 py-3 dark:border-neutral-700"
          >
            <ButtonTransition className="flex items-center justify-center gap-3">
              Go check out my Projects
              <ArrorRight className="h-5 w-5" />
            </ButtonTransition>
          </Link>
        </div>
        <div className="flex flex-col items-center rounded-lg border border-gray-300/60 px-5 pb-5 pt-10 text-center dark:border-neutral-700 dark:bg-neutral-800/30">
          <BookIcon className="h-20 text-accent-yellow" />
          <div className="pb-3 pt-5 text-xl font-bold text-accent-yellow">
            Documentation
          </div>
          <p className="pb-5 text-primary">
            Consistently share my learnings & insights on my blog
          </p>
          <Link
            href="/blog"
            className="w-full rounded-full border border-gray-300 py-3 dark:border-neutral-700"
          >
            <ButtonTransition className="flex items-center justify-center gap-3">
              Go check out my Blog
              <ArrorRight className="h-5 w-5" />
            </ButtonTransition>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
