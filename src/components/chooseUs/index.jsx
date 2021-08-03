import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { ChooseUSCard } from "../chooseUsCard";

const useStyles = makeStyles({
  bgClr: {
    backgroundColor: "#0045FF",
  },
});
const choose = [
  {
    image: "https://techtiz.com/wp-content/uploads/2020/02/home9_icon1.png",
    title: "On-time delivery",
    description:
      "Time is money. TechTiz saves your time and energy with its collaborative, easy-to-follow onboarding process. You come to us with an idea, we provide a quick consultation, and map out the whole process according to your desired timeline.",
  },
  {
    image: "https://techtiz.com/wp-content/uploads/2020/02/home9_icon2.png",
    title: "Personalized Packages",
    description:
      "Our packages are flexible, depending upon the services you acquire. We provide a detailed consultation about pricing and delivery schedule when you first approach us to ensure we’re on the same page.",
  },
  {
    image: "https://techtiz.com/wp-content/uploads/2020/02/home9_icon3.png",
    title: "",
    description:
      "TechTiz offers a maintenance follow-up after launching your application. This reduces the operational hassle and removes any unprecedented bug from the application.",
  },
];
export const ChooseUs = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bgClr}>
      <Box>Why Choose us?</Box>
      {choose.map((item) => (
        <ChooseUSCard
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </Box>
  );
};
