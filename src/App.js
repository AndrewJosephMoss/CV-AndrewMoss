import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import sidebarNavigationRoutes from "./routes/sidebarNavigationRoutes";
import { LayoutProvider } from "./context/LayoutContext.js";
import AppTopBar from "./components/AppTopBar.js";
import NavigationSidebar from "./components/NavigationSidebar.js";
import customTheme from "./theme/theme.js";

const sidebarWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Box
          sx={{
            display: "flex",
            backgroundColor:
              customTheme.palette
                .backgroundColour,
          }}
        >
          <LayoutProvider>
            <AppTopBar
              sidebarWidth={sidebarWidth}
            />
            <NavigationSidebar
              sidebarWidth={sidebarWidth}
            />
            <Switch>
              {sidebarNavigationRoutes.map(
                (route, index) => {
                  return (
                    <Route
                      key={index}
                      exact
                      path={route.path}
                    >
                      {route.component}
                    </Route>
                  );
                }
              )}
              <Redirect
                from="*"
                to="/dashboard"
              />
            </Switch>
          </LayoutProvider>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
