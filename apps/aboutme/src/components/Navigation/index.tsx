import Link from "next/link";
import Menu from "./Menu";
import Info from "./Info";
import Links from "./Links";
import { MENUS, USERMETA } from "contents/meta";

const Navigation = () => {
  return (
    <nav className="px-5 py-7">
      <h1 className="px-2 pr-4 text-2xl font-bold text-main">
        <Link href="/">{USERMETA.name}</Link>
      </h1>
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
    </nav>
  );
};

export default Navigation;
