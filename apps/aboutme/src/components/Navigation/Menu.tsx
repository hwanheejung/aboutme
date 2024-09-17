"use client";

import type { Menu } from "contents/meta";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface MenuProps extends Menu {
  onClick: () => void;
}

const Menu = ({ title, link, subs, onClick }: MenuProps) => {
  const pathName = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  // if pathname starts with /blog, open the submenu
  useEffect(() => {
    if (pathName.startsWith("/blog") && link === "/blog") {
      setIsSubMenuOpen(true);
    } else {
      setIsSubMenuOpen(false);
    }
  }, [pathName, link]);

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
    <div className="">
      <Link
        href={link}
        className={twMerge(
          "group flex w-full items-center justify-between rounded-md border border-transparent px-3 py-2 text-sm font-medium opacity-100 transition-all hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
          checkCurrentPage() ? "opacity-100" : "opacity-60",
        )}
        onClick={() => {
          !subs && onClick();
          setIsSubMenuOpen(true);
        }}
      >
        {title}
        <span
          className={`inline-block ${subs && isSubMenuOpen ? "rotate-90" : ""} transform transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}
        >
          -&gt;
        </span>
      </Link>
      <div>
        {subs &&
          isSubMenuOpen &&
          subs.map((item) => (
            <div className="ml-2" key={item.title}>
              <Link
                key={item.title}
                href={item.link}
                className={twMerge(
                  "flex px-3 py-2 text-xs opacity-60 transition-all hover:opacity-100",
                  pathName === item.link ? "text-main opacity-100" : "",
                )}
                onClick={onClick}
              >
                {item.title}
              </Link>
              {item.subs && (
                <div className="mb-2 ml-6 mt-1">
                  {item.subs.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.link}
                      className={twMerge(
                        "flex border-l border-l-primary px-3 py-1 text-xs opacity-60 transition-all hover:opacity-100",
                        pathName === sub.link
                          ? "border-l-main text-main opacity-100"
                          : "",
                      )}
                      onClick={onClick}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
