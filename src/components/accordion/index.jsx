import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
  },
  heading: {
    fontSize: 16,
    fontWeight: 700,
    padding: 14,
  },
  icon: {
    color: "#000000",
  },
}));

export default function ExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Refine</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We believe in stats and conduct market research before proceeding
            with an application development plan. Whether you’re a start-up or
            an enterprise, TechTiz’s passionate app developers will analyze and
            refine your proposal before proceeding. This step removes ambiguity
            from the process and helps us deliver the project on time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Design</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            From basic outlines to the feature-enriched application, TechTiz
            promises to incorporate uniqueness at every stage. Our developers
            adhere to the international coding standards, and our designers
            suggest the most user-friendly interfaces, ensuring the end product
            meets your business goals. Our experienced application developers
            are some top-notch creative minds, so be rest assured about your new
            app.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Maintain</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Whether you need a new update or face a glitch in your mobile
            application, TechTiz is always there. Our reliable application
            maintenance process lets you focus more on your business growth and
            less on the back-end glitches. TechTiz’s technical team is
            experienced and responsive, so you work on the front while we cover
            the technicalities.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
