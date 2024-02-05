"use client";
import { useState } from "react";
import { Avatar, Button, IconButton, List, styled } from "@mui/material";
import { Menu, MenuItem, Fade } from "@mui/material";

import "../styles/components/Header.scss";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledButton = styled(Button)({
    height: "38.5px",
    textTransform: "none",
    fontSize: "16px",
    width: "80%",
    border: "1px solid #050505",
    color: "#050505",
    "&:hover": {
      background: "#f5f5f5",
    },
  });

  return (
    <>
      <IconButton>
        <Avatar
          alt="avatar"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
          className="avatar"
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
      </IconButton>
      <Menu
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          marginTop: "1rem",
        }}
      >
        <List
          sx={{
            width: "12rem",
            padding: "0",
          }}
        >
          <MenuItem onClick={handleClose} sx={{ height: "38.5px" }}>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ height: "38.5px" }}>
            My account
          </MenuItem>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.8rem",
            }}
          >
            <StyledButton disableRipple>Log out</StyledButton>
          </div>
        </List>
      </Menu>
    </>
  );
};

export default ProfileMenu;
