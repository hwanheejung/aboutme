const ProfilePic = () => {
  return (
    <div className="custom-shape mx-auto mt-10 overflow-hidden border border-main">
      <img
        src="images/profile.jpg"
        alt="profile picture"
        width={150}
        height={150}
        className="object-cover"
      />
    </div>
  );
};

export default ProfilePic;
