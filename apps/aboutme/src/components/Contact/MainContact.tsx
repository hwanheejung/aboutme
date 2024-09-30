import { USERMETA } from "contents/meta/user";
import EmailIcon from "public/icons/links/email.svg";
import GithubIcon from "public/icons/links/github.svg";
import LinkedInIcon from "public/icons/links/linkedIn.svg";
import Item from "./Item";

const MainContact = () => (
  <>
    {USERMETA.github && (
      <Item
        link={USERMETA.github}
        icon={<GithubIcon className="h-8 w-8" />}
        className="opacity-60 transition-opacity hover:opacity-100"
      />
    )}
    {USERMETA.linkedIn && (
      <Item
        link={USERMETA.linkedIn}
        icon={<LinkedInIcon className="h-8 w-8" />}
        className="opacity-60 transition-opacity hover:opacity-100"
      />
    )}
    {USERMETA.email && (
      <Item
        link={USERMETA.email}
        icon={<EmailIcon className="h-8 w-8" />}
        className="opacity-60 transition-opacity hover:opacity-100"
      />
    )}
  </>
);

export default MainContact;
