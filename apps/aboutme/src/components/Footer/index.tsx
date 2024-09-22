import FooterContact from "../Contact/FooterContact";
import Menu from "../Menu";

const Footer = () => {
  return (
    <div className="mt-20 grid grid-cols-2 border-t border-primary/20 px-10 py-10">
      <div className="my-auto">
        <p>Designed and Developed by Hwanhee Jeong</p>
        <p>Built with Next.js</p>
      </div>
      <div className="grid grid-cols-2">
        <nav className="w-fit">
          <h2 className="mb-4 text-xl font-bold text-accent-yellow">Explore</h2>
          <ul className="flex flex-col text-lg">
            <Menu name="About me" link="/" className="py-1" />
            <Menu name="Projects" link="/projects" className="py-1" />
            <Menu name="Tech Blog" link="/blog" className="py-1" />
            <Menu name="CV" link="/cv" className="py-1" />
          </ul>
        </nav>
        <nav>
          <h2 className="mb-4 text-xl font-bold text-accent-yellow">Contact</h2>
          <FooterContact />
        </nav>
      </div>
    </div>
  );
};

export default Footer;
