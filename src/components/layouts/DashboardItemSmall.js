import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const DashboardItemSmall = ({ text }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Item>
        <Typography>{text}</Typography>
      </Item>
    </Grid>
  );
};

DashboardItemSmall.propTypes = {
  text: PropTypes.string,
};

DashboardItemSmall.defaultProps = {
  text: "Some default text",
};

export default DashboardItemSmall;
