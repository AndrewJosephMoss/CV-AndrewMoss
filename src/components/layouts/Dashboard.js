import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import { css } from "@emotion/react";

import DashboardItemSmall from "./DashboardItemSmall";
import DashboardItemTiny from "./DashboardItemTiny";

const Dashboard = ({ title }) => {
  const theme = useTheme();

  const styles = {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar />
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <DashboardItemTiny />
        <DashboardItemTiny />
        <DashboardItemTiny />
        <DashboardItemTiny />
        <DashboardItemTiny />
        <DashboardItemTiny />

        <DashboardItemSmall />
        <DashboardItemSmall
          text="Semper risus in hendrerit gravida rutrum
        quisque non tellus. Convallis convallis
        tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio
        aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer
        quis."
        />
        <DashboardItemSmall
          text="Cursus euismod quis viverra nibh
          cras. Metus vulputate eu scelerisque felis
          imperdiet proin fermentum leo. Mauris
          commodo quis imperdiet massa tincidunt."
        />
        <DashboardItemSmall
          text="Cras tincidunt lobortis feugiat vivamus at
          augue. At augue eget arcu dictum varius
          duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec
          massa sapien faucibus et molestie ac."
        />
        <DashboardItemSmall />
        <DashboardItemSmall
          text="Semper risus in hendrerit gravida rutrum
        quisque non tellus. Convallis convallis
        tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio
        aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer
        quis."
        />
      </Grid>
    </Box>
  );
};

export default Dashboard;
