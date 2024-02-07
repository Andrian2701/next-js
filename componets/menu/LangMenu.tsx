"use client";

import { useState } from "react";
import Image from "next/image";
import { IconButton, List, Fade, Menu, Tooltip } from "@mui/material";
import { MenuItem, Box } from "@mui/material";

import { langItems } from "@/data/langItems";

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
      </Tooltip>
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
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <List
          sx={{
            width: "12rem",
            padding: "0",
          }}
        >
          {langItems.map((item) => (
            <MenuItem
              onClick={handleClose}
              sx={{ height: "38.5px", display: "flex", gap: "0.8rem" }}
            >
              <Box sx={{ height: "20px", width: "27px" }}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  alt="language"
                  src={item.img}
                />
              </Box>
              {item.title}
            </MenuItem>
          ))}
        </List>
      </Menu>
    </>
  );
};

export default LangMenu;
