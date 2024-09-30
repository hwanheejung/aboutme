"use client";

import Link from "next/link";
import MenuList from "../Menu/MenuList";
import Theme from "./Theme";
import Title from "./Title";
import { usePathname } from "next/navigation";
import ButtonTransition from "../Transitions/ButtonTransition";

const NavDesktop = () => {
  const pathName = usePathname();

  const checkCurrentPage = (link: string) => {
    if (pathName === "/") {
      return pathName === link;
    } else {
      if (link !== "/") {
        return pathName.startsWith(link);
      }
    }
  };

  return (
    <header className="relative flex h-20 flex-1 items-center justify-between px-10 font-bold">
      <Title />
      <MenuList
        renderItem={(nav) => (
          <div
            key={nav.link}
            className="relative flex justify-center px-4 py-3"
          >
            <Link href={nav.link}>
              <ButtonTransition>{nav.title}</ButtonTransition>
            </Link>
            {checkCurrentPage(nav.link) && (
              <div className="absolute bottom-3 left-1/2 -z-10 h-3 w-3/4 -translate-x-1/2 -rotate-6 -skew-x-6 transform bg-accent-red/70" />
            )}
          </div>
        )}
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-primary/20 px-4 text-lg"
      />
      <menu className="flex items-center justify-center rounded-full border border-primary/20 px-4 py-3">
        <Theme />
      </menu>
    </header>
  );
};

export default NavDesktop;
