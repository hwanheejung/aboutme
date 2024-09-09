import Link from "next/link";
import Menu from "./Menu";
import Info from "./Info";
import Links from "./Links";
import { USERMETA } from "contents/meta";

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
    <nav className="px-5 py-7">
      <h1 className="px-2 pr-4 text-2xl font-bold text-main">
        <Link href="/">{USERMETA.name}</Link>
      </h1>
      <ul className="mt-10 flex flex-col gap-2">
        {MENUS.map((menu) => (
          <Menu key={menu.link} title={menu.title} link={menu.link} />
        ))}
      </ul>
      <Info />
      <Links />
    </nav>
  );
};

export default Navigation;
