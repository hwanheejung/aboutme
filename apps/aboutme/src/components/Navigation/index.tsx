"use client";

import { MENUS, USERMETA } from "contents/meta";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useHamburger } from "./Hamburger";
import Info from "./Info";
import Links from "./Links";
import Menu from "./Menu";
import ProfilePic from "./ProfilePic";

const Overlay = ({ closeOnClick }: { closeOnClick: boolean }) => {
  const { isOpen, setClose } = useHamburger();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (closeOnClick && event.target === event.currentTarget) {
      setClose();
    }
  };

  return (
    <div
      className={`absolute inset-0 z-40 flex items-center justify-center bg-black/60 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={handleClick}
    />
  );
};

const Navigation = () => {
  const { isOpen, setClose } = useHamburger();

  return (
    <>
      <Overlay closeOnClick />
      <nav
        className={twMerge(
          "z-50 h-full overflow-y-scroll px-5 py-7 pb-48 transition-all scrollbar-hide sm:absolute sm:-left-full sm:top-0",
          isOpen ? "sm:-left-0" : "",
        )}
      >
        <h1 className="px-2 pr-4 text-2xl font-bold text-main">
          <Link href="/" onClick={setClose}>
            {USERMETA.name}
          </Link>
        </h1>
        <ProfilePic />
        <Info />
        <ul className="mt-10 flex flex-col gap-2">
          {MENUS.map((menu) => (
            <Menu
              key={menu.link}
              title={menu.title}
              link={menu.link}
              subs={menu.subs}
              onClick={setClose}
            />
          ))}
        </ul>

        <Links />
        <span className="pl-3 text-xs opacity-60">©2024 by hwanheejung</span>
      </nav>
    </>
  );
};

export default Navigation;
