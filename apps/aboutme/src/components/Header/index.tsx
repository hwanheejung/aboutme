import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <>
      <div className="md:hidden">
        <NavDesktop />
      </div>
      <div className="hidden md:block">
        <NavMobile />
      </div>
    </>
  );
};

export default Header;
