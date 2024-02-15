"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { List, Drawer, IconButton } from "@mui/material";
import { IoMenuSharp } from "react-icons/io5";

import NavLinks from "@/components/common/NavLinks";
import Logo from "@/components/common/Logo";
import ProfileAvatar from "@/components/common/ProfileAvatar";
import "../../styles/layouts/MobileMenu.scss";

const MobileMenu = () => {
  const [mobMenu, setMobMenu] = useState({
    left: false,
  });
  const session = useSession();

  const toggleMobMenu =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMobMenu({ ...mobMenu, [anchor]: open });
    };

  return (
    <IconButton className="mob-menu-icon">
      <IoMenuSharp onClick={toggleMobMenu("left", true)} />
      <Drawer
        anchor={"left"}
        open={mobMenu["left"]}
        onClose={toggleMobMenu("left", false)}
      >
        <div className="mob-menu">
          <List className="list">
            <Logo onClick={toggleMobMenu("left", false)} />
            <div className="profile-badge">
              <ProfileAvatar />
              <p>{session?.data?.user?.email || "Email"}</p>
            </div>
            <NavLinks
              selector="menu-links"
              onClick={toggleMobMenu("left", false)}
            />
          </List>
        </div>
      </Drawer>
    </IconButton>
  );
};

export default MobileMenu;
