import React from "react";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  logo: {
    width: 93,
    marginTop: 2,
  },
  link: {
    fontSize: 15,
    fontWeight: 700,
    color: "#000000",
    marginLeft: 55,
  },
  dflex: {
    display: "flex",
    alignItems: "center",
  },
});
export const NavBar = () => {
  const classes = useStyles();
  return (
    <Box style={{ display: "flex", justifyContent: "space-around" }}>
      <Box>
        <img
          className={classes.logo}
          src="https://techtiz.com/wp-content/uploads/2021/05/Logo-Black.png"
        />
      </Box>
      <Box className={classes.dflex}>
        <Box>
          <Box className={classes.link}>Home</Box>
        </Box>
        <Box>
          <Box className={classes.link}>Our Service</Box>
        </Box>
        <Box>
          <Box className={classes.link}>Why Choose us</Box>
        </Box>
        <Box>
          <Box className={classes.link}>Contact Us</Box>
        </Box>
      </Box>
    </Box>
  );
};
