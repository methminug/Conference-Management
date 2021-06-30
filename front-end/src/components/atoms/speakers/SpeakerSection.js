import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./SpeakerCard.style";

import SpeakerCard from "./SpeakerCard";

const SpeakerSection = ({speakers}) => {
  const classes = useStyles();

  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "#1c2a45",
      }}
    >

      <Grid container>
        {Object.values(speakers).map(({ name, speakerImage, description, designation, placeOfWork, linkedInProfile }) => (
          <SpeakerCard
            name={name}
            position={designation}
            company={placeOfWork}
            image={speakerImage}
            description={description}
            linkedInURL={linkedInProfile}
          />
        ))}
      </Grid>
    </div>
  );
};

export default SpeakerSection;