import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="relative flex h-20 flex-1 items-center justify-between px-10 font-bold">
      <Link
        href="/"
        className="flex items-center justify-center gap-3 rounded-full border border-primary/20 px-4 py-3 text-lg"
      >
        <div className="h-4 w-4 rounded-full bg-main"></div>
        <h1 className="text-white">J.HH</h1>
      </Link>
      <ul className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-primary/20 px-4 text-lg">
        <Menu name="About me" link="/" />
        <Menu name="Projects" link="/projects" />
        <Menu name="Tech Blog" link="/blog" />
        <Menu name="CV" link="/cv" />
      </ul>
      <menu></menu>
    </header>
  );
};

export default Header;
