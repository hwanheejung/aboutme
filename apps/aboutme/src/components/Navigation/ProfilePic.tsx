import Image from "next/image";
import Pic from "public/images/profile.jpg";

const ProfilePic = () => {
  return (
    <div className="relative mx-auto mb-5 mt-7 h-[150px] w-[150px]">
      <div className="custom-shape absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform" />
      <div className="custom-shape absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden !bg-primary">
        <Image src={Pic} alt="profile picture" width={150} height={150} />
      </div>
    </div>
  );
};

export default ProfilePic;
