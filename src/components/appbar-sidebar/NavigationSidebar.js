import * as React from "react";
import { useContext, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { css } from "@emotion/react";

import { LayoutContext } from "../../context/LayoutContext";
import Cherry from "../../Cherry.svg";
import navigationRoutes from "../../routes/sidebarNavigationRoutes";
import NavigationSidebarItem from "./NavigationSidebarItem";

const NavigationSidebar = () => {
  const { layoutState, dispatch } = useContext(
    LayoutContext
  );
  const theme = useTheme();
  const subSm = useMediaQuery(
    theme.breakpoints.down("md")
  );
  useEffect(() => {
    dispatch({
      type: "SET_SIDEBAR_PERMANENCE",
      payload: !subSm,
    });
    if (subSm) {
      dispatch({
        type: "SET_SIDEBAR_OPEN",
        payload: false,
      });
    }
  }, [subSm, dispatch]);
  const closeSidebar = () => {
    dispatch({
      type: "SET_SIDEBAR_OPEN",
      payload: false,
    });
  };

  const styles = {
    navigationSidebar: css`
      width: ${layoutState.sidebarWidth}px;
      flex-shrink: 0;
      & .MuiDrawer-paper {
        width: ${layoutState.sidebarWidth}px;
        background-color: ${theme.palette
          .transparent.translucent95};
      }
    `,
  };

  return (
    <Drawer
      sx={{
        ...styles.navigationSidebar,
      }}
      variant={
        layoutState.sidebarIsPermanent
          ? "permanent"
          : "temporary"
      }
      anchor="left"
      open={layoutState.sidebarIsOpen}
      onClose={closeSidebar}
    >
      <img
        style={{
          height: "64px",
          padding: 6,
        }}
        src={Cherry}
        alt="Cherry Logo"
      />
      <Divider />
      <List>
        {navigationRoutes.map((route, index) => {
          return (
            <React.Fragment key={index}>
              <NavigationSidebarItem
                label={route.label}
                icon={route.icon}
                path={route.path}
              />
            </React.Fragment>
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
};

export default NavigationSidebar;
