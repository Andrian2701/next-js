import { Avatar } from "@mui/material";

import "../../styles/common/ProfileAvatar.scss";

const ProfileAvatar = ({ onClick }: any) => {
  return (
    <Avatar
      alt="avatar"
      src="https://assets.codepen.io/1480814/av+1.png"
      className="avatar"
      onClick={onClick}
    />
  );
};

export default ProfileAvatar;
