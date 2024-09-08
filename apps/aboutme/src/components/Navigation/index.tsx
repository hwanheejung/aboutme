

import Link from "next/link";
import Menu from "./Menu";

const MENUS = [
  {
    title: "CV",
    link: "/cv",
  },
  {
    title: "Tech Blog",
    link: "/blog",
  },
  {
    title: "Projects",
    link: "/projects",
  },
];

const Navigation = () => {
  
  return (
    <nav className="py-7 px-5">
      <h1 className="text-main text-2xl font-bold px-2 pr-4">
        <Link href="/">Hwanhee Jeong</Link>
      </h1>
      <ul className="flex flex-col gap-2 mt-10">
        {MENUS.map((menu) => (
          <Menu key={menu.link} title={menu.title} link={menu.link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
