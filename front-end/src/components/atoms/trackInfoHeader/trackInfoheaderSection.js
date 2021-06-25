import React from "react";
import { Container } from "@material-ui/core";

import trackHomeBackground from "../../../assets/images/trackHomeBG.png";
import {useStyles} from "./trackInfoheaderSection.style"

const TrackInfoHeaderSection = ({ trackName, trackDate }) => {

    const classes = useStyles()

  return (
    <div
      style={{
        backgroundImage: `url(${trackHomeBackground})`,
        backgroundSize: "cover",
        height: "500px"
      }}
    >
      <Container className={classes.trackHeader}>
        <h1>{trackName}</h1>
        <h5>{trackDate}</h5>
      </Container>
    </div>
  );
};

export default TrackInfoHeaderSection;
