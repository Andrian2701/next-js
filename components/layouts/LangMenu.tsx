"use client";

import { useState } from "react";
import Image from "next/image";
import { IconButton, List, Menu, Tooltip, MenuItem } from "@mui/material";

import { langItems } from "@/placeholder/lang";
import britain from "../../assets/lang/britain.jpeg";
import "../../styles/layouts/LangMenu.scss";

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
      <Tooltip title="Language">
        <IconButton className="lang" onClick={handleClick}>
          <Image src={britain} alt="language" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
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
          {langItems.map((item) => (
            <MenuItem
              key={item.title}
              onClick={handleClose}
              className="lang-link"
            >
              <div>
                <Image alt="language" src={item.img} />
              </div>
              {item.title}
            </MenuItem>
          ))}
        </List>
      </Menu>
    </>
  );
};

export default LangMenu;
