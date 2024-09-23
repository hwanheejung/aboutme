import FooterContact from "../Contact/FooterContact";
import Menu from "../Menu";

const Footer = () => {
  return (
    <>
      <div className="mx-5 mt-20 grid grid-cols-2 rounded-xl border border-primary/20 px-10 py-10 md:grid-cols-1">
        <div className="my-auto pr-5 md:order-1 md:mx-auto md:pt-10 md:text-center">
          <p>Designed and Developed by Hwanhee Jeong</p>
          <p>Built with Next.js</p>
        </div>
        <div className="grid grid-cols-2">
          <nav className="w-fit md:mx-auto">
            <div className="relative z-10 w-fit px-1">
              <h2 className="mb-4 text-xl font-bold">Explore</h2>
              <div className="absolute bottom-0 left-1/2 -z-10 h-3 w-full -translate-x-1/2 -rotate-6 -skew-x-6 transform bg-accent-red/70" />
            </div>
            <ul className="flex flex-col text-lg">
              <Menu name="About me" link="/" className="py-1" />
              <Menu name="Projects" link="/projects" className="py-1" />
              <Menu name="Tech Blog" link="/blog" className="py-1" />
              <Menu name="CV" link="/cv" className="py-1" />
            </ul>
          </nav>
          <nav className="w-fit md:mx-auto">
            <div className="relative z-10 w-fit px-1">
              <h2 className="mb-4 text-xl font-bold">Contact</h2>
              <div className="absolute bottom-0 left-1/2 -z-10 h-3 w-full -translate-x-1/2 -rotate-6 -skew-x-6 transform bg-accent-red/70" />
            </div>
            <FooterContact />
          </nav>
        </div>
      </div>
      <div className="flex justify-between px-10 py-5 text-primary/60 md:flex-col md:text-center">
        <p>© 2024 Hwanhee Jeong</p>
        <p>Seoul, South Korea</p>
      </div>
    </>
  );
};

export default Footer;
