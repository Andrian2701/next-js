"use client";

import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";

import { tasks } from "@/data/data";
import "../../styles/components/dash/Tasks.scss";

const NewsUpdate = () => {
  const [checked, setChecked] = useState<number[]>([]);

  const handleToggle = (item: number) => () => {
    const currentIndex = checked.indexOf(item);
    const newChecked = [...checked];

    currentIndex === -1
      ? newChecked.push(item)
      : newChecked.splice(currentIndex, 1);

    setChecked(newChecked);
  };

  return (
    <Box className="container" boxShadow={2}>
      <h2>Tasks</h2>
      <List className="task-list">
        {tasks.map((item, idx) => {
          return (
            <ListItem key={item} disablePadding>
              <ListItemButton
                onClick={handleToggle(idx)}
                dense
                disableRipple
                className="list-item"
              >
                <ListItemIcon className="button">
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(idx) !== -1}
                    tabIndex={-1}
                    className="check-box"
                  />
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default NewsUpdate;
