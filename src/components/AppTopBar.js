import React, { useContext } from "react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";
import Settings from "@mui/icons-material/Settings";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";
import { useScrollTrigger } from "@mui/material";

import { LayoutContext } from "../context/LayoutContext";
import Cherry from "../Cherry.svg";

const AppTopBar = () => {
  const { layoutState, dispatch } = useContext(
    LayoutContext
  );
  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const toggleSidebar = () => {
    dispatch({
      type: "SET_SIDEBAR_OPEN",
      payload: !layoutState.sidebarIsOpen,
    });
  };

  const theme = useTheme();

  const styles = {
    appTopBar: css`
      background-color: ${isScrolled
        ? theme.palette.translucent
        : `transparent`};
      backdrop-filter: saturate(150%)
        blur(${theme.spacing(1)});
      padding: ${theme.spacing(1)};
      width: ${layoutState.sidebarIsPermanent
        ? `calc(100% - ${layoutState.sidebarWidth}px)`
        : "100%"};
      border-radius: ${theme.spacing(2)};
    `,
    title: css`
      color: black;
    `,
    toolbar: css`
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    `,
    toolbarSpace: css`
      flex: 1;
    `,
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 6 : 0}
        sx={{
          ...styles.appTopBar,
        }}
      >
        <Toolbar sx={{ ...styles.toolbar }}>
          {!layoutState.sidebarIsPermanent && (
            <React.Fragment>
              <img
                style={{
                  height: "64px",
                }}
                src={Cherry}
                alt="Cherry Logo"
              />
              <span style={{ flex: "1" }} />
              <Typography
                sx={{
                  ...styles.title,
                }}
                variant="h4"
                noWrap
                component="div"
              >
                AppBar
              </Typography>
              <span style={{ flex: "1" }} />
              <IconButton onClick={toggleSidebar}>
                {layoutState.sidebarIsOpen ? (
                  <MenuIcon />
                ) : (
                  <MenuOpen />
                )}
              </IconButton>
              <IconButton>
                <Settings />
              </IconButton>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppTopBar;
