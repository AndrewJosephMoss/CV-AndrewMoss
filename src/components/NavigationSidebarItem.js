import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import {
  Link,
  useLocation,
} from "react-router-dom";

const NavigationSidebarItem = ({
  label,
  icon,
  path,
}) => {
  const location = useLocation();
  const [isActiveRoute, setActive] =
    useState(false);

  useEffect(() => {
    setActive(location.pathname === path);
  }, [location, path]);

  return (
    <ListItem button component={Link} to={path}>
      <ListItemIcon
        sx={isActiveRoute && { color: "blue" }}
      >
        <SvgIcon component={icon} />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default NavigationSidebarItem;
