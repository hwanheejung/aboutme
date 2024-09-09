import { USERMETA } from "contents/meta";
import GithubIcon from "public/icons/links/github.svg";
import LinkedInIcon from "public/icons/links/linkedIn.svg";
import EmailIcon from "public/icons/links/email.svg";

const Links = () => {
  return (
    <div className="mt-10 flex items-center gap-3 pl-3">
      {USERMETA.github && (
        <a
          href={USERMETA.github}
          className="opacity-60 transition-opacity hover:opacity-100"
        >
          <GithubIcon />
        </a>
      )}
      {USERMETA.linkedIn && (
        <>
          <div className="h-4 w-px bg-primary opacity-40" />
          <a
            href={USERMETA.linkedIn}
            className="opacity-60 transition-opacity hover:opacity-100"
          >
            <LinkedInIcon />
          </a>
        </>
      )}
      {USERMETA.email && (
        <>
          <div className="h-4 w-px bg-primary opacity-40" />
          <a
            href={`mailto:${USERMETA.email}`}
            className="opacity-60 transition-opacity hover:opacity-100"
          >
            <EmailIcon />
          </a>
        </>
      )}
    </div>
  );
};

export default Links;
