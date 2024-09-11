import { USERMETA } from "contents/meta";
import LocationIcon from "public/icons/location.svg";
import OrganizationIcon from "public/icons/organization.svg";

const Info = () => {
  return (
    <div className="mt-10 flex flex-col gap-2 pl-3 text-sm opacity-70">
      <div className="flex items-center gap-2">
        <LocationIcon />
        <span>{USERMETA.location}</span>
      </div>
      <div className="flex items-center gap-2">
        <OrganizationIcon />
        <span>{USERMETA.school}</span>
      </div>
    </div>
  );
};

export default Info;
