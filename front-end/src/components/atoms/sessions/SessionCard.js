import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";

import { useStyles } from "./SessionCard.style";

const SessionCard = ({
  name,
  position,
  company,
  image,
  topic,
  startTime,
  sessiontype,
  description,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      {sessiontype === "Break" ? (
        <Card
          variant="outlined"
          style={{
            margin: "20px 40px 20px 40px",
            padding: "20px",
            backgroundColor: "#dee1e6",
          }}
        >
          <Grid container spacing={4} direction="row">
            <Grid item xs={2}>
              <Typography variant="h4">{startTime}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h5">{topic}</Typography>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <Card variant="outlined" style={{ margin: "20px 40px 20px 40px", padding: "20px" }}>
          <Grid container spacing={4} direction="row">
            <Grid item xs={2}>
              <Typography variant="h4">{startTime}</Typography>
            </Grid>
            <Grid item xs container direction="row" >
              <img src={image} className={classes.speakerImage} />
              <Grid item xs container direction="column">
                <Typography variant="h5">{topic}</Typography>
                <Typography variant="h6">
                  {name} - {position} - {company}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" xs={5}>
              <Typography variant="h6">{sessiontype}</Typography>
              <Typography>{description}</Typography>
            </Grid>
          </Grid>
        </Card>
      )}
    </Grid>
  );
};

export default SessionCard;
