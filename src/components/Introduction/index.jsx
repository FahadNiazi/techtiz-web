import React from "react";
import { Box, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  bgColor: {
    backgroundImage: "radial-gradient(at top left, #043496 0%, #0256FF 100%)",
  },
  header: {
    color: "#ffffff",
    fontSize: 55,
    lineHeight: "1.1em",
    textAlign: "center",
    width: "42%",
    fontWeight: 700,
    marginTop: 150,
  },
  text1: {
    color: "white",
    fontSize: 18,
    width: "74%",
    marginTop: 50,
  },
  text2: {
    color: "white",
    fontSize: 15,
    width: "74%",
    marginTop: 40,
  },
  dflex: {
    display: "flex",
    justifyContent: "center",
  },
  textInCenter: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonStyling: {
    color: "#ffffff",
    border: "2px solid #ffffff",
    textTransform: "initial",
    fontSize: 16,
    fontWeight: 600,
    width: "25%",
    padding: 23,
    borderRadius: 32,
    marginBottom: 32,
  },
  arrowDown: {
    width: 0,
    height: 0,
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    borderTop: "20px solid #f00",
  },
});
export const Introduction = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={[classes.bgColor]}>
        <Box className={classes.dflex}>
          <Box className={classes.header}>
            The Full-Stack App Development Company​
          </Box>
        </Box>
        <Box className={classes.textInCenter}>
          <Box className={classes.text1}>
            At Techtiz, we build applications that click! With extraordinarily
            creative minds on board, we turn your ideas into a fine-tuned mobile
            application that creates an exceptional user experience.
          </Box>
        </Box>
        <Box className={classes.textInCenter}>
          <Box className={classes.text2}>
            Our passion-driven team with our tried and tested application
            development techniques will help you rise above the competition;
            let’s connect and build something GREAT.
          </Box>
        </Box>
        <Box
          style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        >
          <Button className={classes.buttonStyling}>
            Let’s discuss your idea
          </Button>
        </Box>

        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="elementor-shape-fill"
              d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"
            ></path>
          </svg>
        </Box>
      </Box>
      <img src=" https://techtiz.com/wp-content/uploads/2020/02/illus-home6.png" />
    </Box>
  );
};
