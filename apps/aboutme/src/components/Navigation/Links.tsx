import Link from "next/link";
import GithubIcon from "public/icons/links/github.svg";
import LinkedInIcon from "public/icons/links/linkedIn.svg";

const Links = () => {
  return (
    <div className="mt-16 flex items-center gap-3 pl-3">
      <Link href="/" className="text-red-300 hover:text-primary">
        <GithubIcon />
      </Link>
      <Link href="/" className="hover:text-primary">
        <LinkedInIcon />
      </Link>
    </div>
  );
};

export default Links;
