import React from "react";
import { Container, Typography } from "@material-ui/core";

import trackHomeBackground from "../../../assets/images/trackHomeBG.png";
import { useStyles } from "./trackInfoheaderSection.style";

const TrackInfoHeaderSection = ({ trackName, trackDate }) => {
  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${trackHomeBackground})`,
          backgroundSize: "cover",
          height: "630px",
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
      <div
      className={classes.trackDescription}
      >
        <Typography variant="body1">
          Presenting the latest findings and implementations of programming
          languages. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Gravida arcu ac tortor dignissim convallis aenean et. Fermentum odio
          eu feugiat pretium nibh ipsum consequat nisl vel. Pretium viverra
          suspendisse potenti nullam ac. Turpis in eu mi bibendum neque egestas
          congue quisque egestas. Risus sed vulputate odio ut enim blandit
          volutpat maecenas. At volutpat diam ut venenatis tellus in metus
          vulputate eu. Feugiat vivamus at augue eget arcu dictum varius duis
          at. Purus viverra accumsan in nisl. Tristique senectus et netus et.
          Bibendum enim facilisis gravida neque convallis a cras. Tempor nec
          feugiat nisl pretium fusce id. At imperdiet dui accumsan sit amet
          nulla. Orci a scelerisque purus semper eget duis at tellus at.
        </Typography>
      </div>
    </div>
  );
};

export default TrackInfoHeaderSection;
