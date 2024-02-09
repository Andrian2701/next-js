import { List } from "@mui/material";

import NavLinks from "@/components/common/NavLinks";
import Logo from "@/components/common/Logo";
import ProfileAvatar from "@/components/common/ProfileAvatar";
import "../../styles/layouts/MobileMenu.scss";

const MobileMenu = ({ onClick }: any) => {
  return (
    <div className="mob-menu">
      <List className="list">
        <Logo onClick={onClick} />
        <div className="profile-badge">
          <ProfileAvatar />
          <p>Tom Aliston</p>
        </div>
        <NavLinks selector="menu-links" onClick={onClick} />
      </List>
    </div>
  );
};

export default MobileMenu;
