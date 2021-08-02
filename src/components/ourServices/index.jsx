import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Cards } from "../cards";
const usestyles = makeStyles({
  bgClr: {
    backgroundColor: "#FFF9F4",
    padding: 40,
  },
  heading: {
    fontWeight: 700,
    fontSize: 45,
    lineHeight: "1.2em",
    color: "#000000",
    fontFamily: "Circular-Loom",
    display: "flex",
    justifyContent: "center",
  },
  headingDetail: {
    color: "#000000",
    fontSize: 15,
    fontWeight: 400,
    fontFamily: "Circular-Loom",
    marginTop: 25,
    width: "85%",
    lineHeight: "25px",
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
});
export const OurServices = ({ image, name, description }) => {
  const classes = usestyles();

  return (
    <Box className={classes.bgClr}>
      <Box className={classes.heading}>Our Services</Box>
      <Box className={classes.dFlex}>
        <Box className={classes.headingDetail}>
          Tech Tiz specializes in all coding languages and app development
          software, ensuring our clients are always a step ahead of the
          competition. We deliver custom mobile application services for mobile
          devices, IoT, augmented reality devices, and mobile devices, helping
          you set a digital presence across all platforms.
        </Box>
      </Box>
      <Grid spacing={8} container>
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/Android-2.png"
          name="Android​"
          description="TechTiz custom mobile developers have hands-on command in android mobile app development, which streamlines your business goals"
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/Ios-1.png"
          name="iOS"
          description="TechTiz builds secure and practical iOS applications that don’t leave a user wanting more."
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/responsive_screen-512-copy-1.png"
          name="Cross-Platform ​​"
          description="Our experts design cross-platform apps to facilitate the users and help you grow across different devices."
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/Web-Development-1.png"
          name="Back-end ​ ​​"
          description="Our experts design cross-platform apps to facilitate the users and help you grow across different devices."
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/117-1174725_cloud-computing-cloud-computing-icon-transparent-1.png"
          name="Cloud-based apps ​​"
          description="Our experts design cross-platform apps to facilitate the users and help you grow across different devices."
        />
        <Cards
          image="https://techtiz.com/wp-content/uploads/2021/05/Game-Development-1.png"
          name="Game development ​​​"
          description="Our experts design cross-platform apps to facilitate the users and help you grow across different devices."
        />
      </Grid>
    </Box>
  );
};
