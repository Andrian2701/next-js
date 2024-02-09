"use client";

import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { IoMenuSharp } from "react-icons/io5";

import MobileMenu from "./MobileMenu";
import LangMenu from "./LangMenu";
import ProfileMenu from "./ProfileMenu";
import NavLinks from "../common/NavLinks";
import Logo from "../common/Logo";

import "../../styles/layouts/Header.scss";

const Header = () => {
  const [mobMenu, setMobMenu] = useState({
    left: false,
  });

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
    <header>
      <nav>
        <div className="left">
          <IconButton className="mob-menu-icon">
            <IoMenuSharp onClick={toggleMobMenu("left", true)} />
            <Drawer
              anchor={"left"}
              open={mobMenu["left"]}
              onClose={toggleMobMenu("left", false)}
            >
              <MobileMenu onClick={toggleMobMenu("left", false)} />
            </Drawer>
          </IconButton>
          <Logo />
        </div>
        <div className="right">
          <NavLinks selector="header-links" />
          <div className="cta">
            <LangMenu />
            <ProfileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
