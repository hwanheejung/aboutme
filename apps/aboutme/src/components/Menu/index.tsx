"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonTransition from "../Transitions/ButtonTransition";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface MenuProps {
  name: string;
  link: string;
  className?: HTMLAttributes<HTMLLIElement>["className"];
}

const Menu = ({ name, link, className }: MenuProps) => {
  const pathName = usePathname();

  const checkCurrentPage = () => {
    if (pathName === "/") {
      return pathName === link;
    } else {
      if (link !== "/") {
        return pathName.startsWith(link);
      }
    }
  };

  return (
    <li className={twMerge("relative transition-opacity", className)}>
      <ButtonTransition>
        <Link href={link}>{name}</Link>
      </ButtonTransition>
      {checkCurrentPage() && (
        <div className="absolute bottom-3 left-1/2 -z-10 h-3 w-3/4 -translate-x-1/2 -rotate-6 -skew-x-6 transform bg-accent-red/70" />
      )}
    </li>
  );
};

export default Menu;
