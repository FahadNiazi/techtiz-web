import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
const usestyles = makeStyles({
  card: {
    backgroundColor: "#fff",
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
    marginTop: 68,
  },
  name: {
    fontWeight: 700,
    fontSize: 22,
    fontFamily: "Circular-Loom",
    color: "#000000",
  },
  description: {
    fontWeight: 400,
    fontSize: 14,
    fontFamily: "Circular-Loom",
    color: "#000000",
    width: "94%",
    lineHeight: "29px",
    marginTop: 10,
  },
});
export const Cards = ({ image, name, description }) => {
  const classes = usestyles();
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Box className={classes.card}>
        <Grid className={classes.dFlex}>
          {<img style={{ marginTop: 18 }} src={image} />}
        </Grid>
        <Grid style={{ padding: 32 }}>
          <Grid className={classes.name}>{name}</Grid>
          <Grid className={classes.description}>{description}</Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
