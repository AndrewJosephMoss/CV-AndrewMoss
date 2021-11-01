import React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

import { AccessibilityNew } from "@mui/icons-material";

const DashboardItemTiny = ({ label, icon }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Item>
        <Typography>{label}</Typography>
        <IconButton>
          <SvgIcon component={icon} />
        </IconButton>
      </Item>
    </Grid>
  );
};

DashboardItemTiny.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object,
};

DashboardItemTiny.defaultProps = {
  label: "Some label",
  icon: AccessibilityNew,
};

export default DashboardItemTiny;
