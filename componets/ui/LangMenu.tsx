"use client";
import { useState } from "react";
import { IconButton, List, Fade, Menu } from "@mui/material";

import LangItems from "./LangItems";

const LangMenu = () => {
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
      <IconButton
        className="lang"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src="https://media.istockphoto.com/id/854115776/photo/flag-of-england.jpg?s=612x612&w=0&k=20&c=EojPOFUwYV_8vhsJ9RR06rmTwOsSpfVqWbbxGiVpxgk="
          alt="language"
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
          <LangItems handleClose={handleClose} />
        </List>
      </Menu>
    </>
  );
};

export default LangMenu;
