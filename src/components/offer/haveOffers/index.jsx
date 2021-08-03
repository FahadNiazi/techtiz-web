import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const usestyles = makeStyles({
  dflex: {
    display: "flex",
  },
  tite: {
    fontWeight: 700,
    fontSize: 22,
    fontFamily: "Circular-Loom",
    color: "#000000",
  },
  description: {
    fontWeight: 400,
    fontSize: 16,
    fontFamily: "Circular-Loom",
    color: "#000000",
    width: "94%",
    lineHeight: "29px",
    marginTop: 10,
  },
});
export const HaveOffer = ({ image, title, description }) => {
  const classes = usestyles();
  return (
    <Box className={classes.dflex}>
      <Box>
        <Box>{<img style={{ height: 70 }} src={image} />}</Box>
      </Box>
      <Box style={{ marginLeft: 30, marginBottom: 80 }}>
        <Box className={classes.tite}>{title}</Box>
        <Box className={classes.description}>{description}</Box>
      </Box>
    </Box>
  );
};
