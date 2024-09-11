import Link from "next/link";
import Menu from "./Menu";
import Info from "./Info";
import Links from "./Links";
import { MENUS, USERMETA } from "contents/meta";
import ProfilePic from "./ProfilePic";

const Navigation = () => {
  return (
    <nav className="px-5 py-7 pb-48">
      <h1 className="px-2 pr-4 text-2xl font-bold text-main">
        <Link href="/">{USERMETA.name}</Link>
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
          />
        ))}
      </ul>

      <Links />
      <span className="pl-3 text-xs opacity-60">©2024 by hwanheejung</span>
    </nav>
  );
};

export default Navigation;
