"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Menu, MenuItem, IconButton, List, Tooltip } from "@mui/material";

import "../../styles/layouts/ProfileMenu.scss";
import ProfileAvatar from "../common/ProfileAvatar";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Profile">
        <IconButton onClick={handleClick}>
          <ProfileAvatar />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          marginTop: "1.7rem",
        }}
      >
        <List sx={{ width: "12rem", padding: 0 }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <Link href="/sign-in">
            <MenuItem onClick={handleClose}>Sign In</MenuItem>
          </Link>
          <div className="btn">
            <Link href="#" className="log-out-btn" onClick={() => signOut()}>
              Log out
            </Link>
          </div>
        </List>
      </Menu>
    </>
  );
};

export default ProfileMenu;
