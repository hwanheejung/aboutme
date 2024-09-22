import ButtonTransition from "@/components/Transitions/ButtonTransition";
import { USERMETA } from "contents/meta";
import EmailIcon from "public/icons/links/email.svg";
import GithubIcon from "public/icons/links/github.svg";
import LinkedInIcon from "public/icons/links/linkedIn.svg";

const Contact = () => (
  <div className="flex items-center justify-center gap-8 py-10 pl-3">
    <div className="h-px flex-1 bg-primary/20" />
    {USERMETA.github && (
      <ButtonTransition>
        <a
          href={USERMETA.github}
          className="opacity-60 transition-opacity hover:opacity-100"
          target="_blank"
        >
          <GithubIcon className="h-8 w-8" />
        </a>
      </ButtonTransition>
    )}
    {USERMETA.linkedIn && (
      <ButtonTransition>
        <a
          href={USERMETA.linkedIn}
          className="opacity-60 transition-opacity hover:opacity-100"
          target="_blank"
        >
          <LinkedInIcon className="h-8 w-8" />
        </a>
      </ButtonTransition>
    )}
    {USERMETA.email && (
      <ButtonTransition>
        <a
          href={`mailto:${USERMETA.email}`}
          className="opacity-60 transition-opacity hover:opacity-100"
          target="_blank"
        >
          <EmailIcon className="h-8 w-8" />
        </a>
      </ButtonTransition>
    )}
    <div className="h-px flex-1 bg-primary/20" />
  </div>
);

export default Contact;
