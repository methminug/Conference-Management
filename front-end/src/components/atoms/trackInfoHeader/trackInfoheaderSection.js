import React from "react";
import { Container } from "@material-ui/core";

import trackHomeBackground from "../../../assets/images/trackHomeBG.png";
import { useStyles } from "./trackInfoheaderSection.style";

const TrackInfoHeaderSection = ({ trackName, trackDate }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: `url(${trackHomeBackground})`,
        backgroundSize: "cover",
        height: "600px",
        overflow: "auto",
      }}
    >
      <div className={classes.titleBG}>
        <Container>
          <p className={classes.trackTitle}>{trackName}</p>
          <p className={classes.trackDate}>{trackDate}</p>
        </Container>
      </div>
    </div>
  );
};

export default TrackInfoHeaderSection;
