import { USERMETA } from "contents/meta/user";
import GithubIcon from "public/icons/links/github.svg";
import LinkedInIcon from "public/icons/links/linkedIn.svg";
import EmailIcon from "public/icons/links/email.svg";
import Item from "./Item";

const FooterContact = () => (
  <ul className="flex w-fit flex-col text-lg">
    {USERMETA.github && (
      <Item
        link={USERMETA.github}
        icon={<GithubIcon className="h-6 w-6" />}
        text="Github"
        className="py-1"
      />
    )}
    {USERMETA.linkedIn && (
      <Item
        link={USERMETA.linkedIn}
        icon={<LinkedInIcon className="h-6 w-6" />}
        text="LinkedIn"
        className="py-1"
      />
    )}
    {USERMETA.email && (
      <Item
        link={USERMETA.email}
        icon={<EmailIcon className="h-6 w-6" />}
        text="Email"
        className="py-1"
      />
    )}
  </ul>
);

export default FooterContact;
