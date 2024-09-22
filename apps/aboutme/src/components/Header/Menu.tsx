"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  name: string;
  link: string;
}

const Menu = ({ name, link }: MenuProps) => {
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
    <li className="relative px-4 py-3 transition-opacity hover:opacity-80">
      <Link href={link}>{name}</Link>
      {checkCurrentPage() && (
        <div className="absolute bottom-3 left-1/2 -z-10 h-3 w-3/4 -translate-x-1/2 -rotate-6 -skew-x-6 transform bg-accent-red/70" />
      )}
    </li>
  );
};

export default Menu;
