import React from "react";
import { Typography, Card, Grid } from "@material-ui/core";
import { useStyles } from "./SpeakerCard.style";
import SpeakerInfoModal from "./SpeakerInfoModal";

const SpeakerCard = ({ name, position, company, image, description, linkedInURL }) => {
  const classes = useStyles();
  return (
    <Grid item xs={2} style={{ marginBottom: "45px" }}>
      <img src={image} className={classes.speakerImage} />
      <SpeakerInfoModal
        speakerCompany={company}
        speakerPosition={position}
        speakerName={name}
        speakerDesc={description}
        speakerLinkedIn={linkedInURL}
      />
      <Typography className={classes.speakerDesc}>{position}</Typography>
      <Typography className={classes.speakerDesc}>{company}</Typography>
    </Grid>
  );
};

export default SpeakerCard;
