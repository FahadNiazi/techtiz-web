import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  bgClr: {
    boxShadow:
      "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    backgroundColor: "#ffffff",

    color: "red",
  },
});
export const ChooseUSCard = ({ image, title, description }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.bgClr}>
      <Grid>{<img src={image} />}</Grid>
      <Grid>{title}</Grid>
      <Grid>{description}</Grid>
      <Grid></Grid>
    </Grid>
  );
};
