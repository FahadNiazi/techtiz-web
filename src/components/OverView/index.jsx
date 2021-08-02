import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Accordion from "../accordion";
const useStyles = makeStyles({
  bgImage: {
    backgroundColor: "#ffffff",
    display: "flex",
  },

  boxShadow: {
    color: "black",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;",
    backgroundColor: "white",

    padding: 41,
  },
  title: {
    color: "#DEB992",
    fontWeight: "bold",
    fontSize: 45,
  },
  heading1: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
    marginTop: 10,
  },
});
export const OverView = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bgImage}>
      <Box style={{ padding: 60 }}>
        <Box className={classes.boxShadow}>
          <Box className={classes.title}>Overview</Box>
          <Box className={classes.heading1}>
            TechTiz is a full-stack app development company that brings the most
            reliable technology driven solutions to the table. With years of
            hard work and happy customers under credit, Techtiz is your
            one-stop-solution for mobile application development.
          </Box>
          <Box className={classes.heading1}>
            We help companies scale their business and retain customers through
            user-friendly mobile applications that deliver. TechTiz conducts
            extensive market research and develops mobile apps that meet the
            needs of your target audiences. From straightforward interfaces to
            secure check-out features, our mobile applications are always at the
            top.
          </Box>
        </Box>
      </Box>
      <Box>
        <Accordion />
      </Box>
    </Box>
  );
};
