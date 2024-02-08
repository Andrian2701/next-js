"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import { BiSolidError } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { IoMenuSharp } from "react-icons/io5";

import MobileMenu from "./menu/mobile-menu/MobileMenu";
import ProfileMenu from "./menu/ProfileMenu";
import LangMenu from "./menu/LangMenu";
import "../styles/components/Header.scss";

const Header = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="mob-menu-icon">
            <IoMenuSharp onClick={toggleDrawer("left", true)} />
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              <MobileMenu onClick={toggleDrawer("left", false)} />
            </Drawer>
          </IconButton>
          <Link href="/">Dash</Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link href="/not-found">
                <BiSolidError />
                Not Found
              </Link>
            </li>
            <li>
              <Link href="/products">
                <RiShoppingBag2Fill />
                Products
              </Link>
            </li>
          </ul>
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
