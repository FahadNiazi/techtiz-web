import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { HaveOffer } from "./haveOffers";
const usestyles = makeStyles({
  heading: {
    fontWeight: 700,
    fontSize: 69,
    fontFamily: "Circular-Loom",
    color: "#000000",
  },
  dflex: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 80,
  },
});

const offers = [
  {
    image: "https://techtiz.com/wp-content/uploads/2021/05/Innovation.png",
    title: "Innovation",
    description:
      "TechTiz runs on dedication and innovation. Our timely solutions will streamline your business operations and make your growth more scalable.",
  },
  {
    image: "https://techtiz.com/wp-content/uploads/2021/05/Quality.png",
    title: "Quality",
    description:
      "Ethical coding standards, advanced techniques, and a brilliant team; Tech Tiz never compromises on quality.",
  },
  {
    image: "https://techtiz.com/wp-content/uploads/2021/05/Responsibility.png",
    title: "Responsibility",
    description:
      "From start to end, TechTiz owns its projects. Our responsive tech support team and passionate developers are a call away if you need assistance.",
  },
];
export const Offer = () => {
  const classes = usestyles();
  return (
    <Box className={classes.dflex}>
      <Box>
        <Box className={classes.heading}>WHAT</Box>
        <Box className={classes.heading}>WE</Box>
        <Box className={classes.heading}>OFEFR?</Box>
      </Box>
      <Grid style={{ width: "37%" }} spacing={5} container>
        {offers.map((offer) => (
          <Grid item xs={12}>
            <HaveOffer
              image={offer.image}
              title={offer.title}
              description={offer.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
