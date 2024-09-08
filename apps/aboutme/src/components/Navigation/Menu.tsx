"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface MenuProps {
  title: string;
  link: string;
}

const Menu = ({ title, link }: MenuProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={link}
      className={twMerge(
        "group transition-all border border-transparent hover:border-gray-300 hover:bg-gray-100 flex w-full items-center justify-between rounded-md py-2 px-3 text-sm font-medium hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 opacity-50 hover:opacity-100",
        pathName === link ? "opacity-100" : ""
      )}
    >
      {title}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </Link>
  );
};

export default Menu;
