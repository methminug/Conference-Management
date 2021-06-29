import React, { useEffect } from "react";
import { Card, Grid, Typography } from "@material-ui/core";

import { useStyles } from "./SessionCard.style";

const SessionCard = ({session}) => {
  const classes = useStyles();

  const time = new Date(session.startAt).toTimeString().split(' ')[0].substring(0,5)

  return (
    <Grid item xs={12}>
      {session.sessiontype === "Break" ? (
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
              <Typography variant="h4">{time}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h3">{session.topic}</Typography>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <Card
          variant="outlined"
          style={{ margin: "20px 40px 20px 40px", padding: "20px" }}
        >
          <Grid container spacing={4} direction="row">
            <Grid item xs={2}>
              <Typography variant="h4">{time}</Typography>
            </Grid>
            <Grid item xs container direction="row">
              <img src={session.speakers.speakerImage} className={classes.speakerImage} />
              <Grid item xs container direction="column">
                <Typography variant="h5">{session.topic}</Typography>
                <Typography className={classes.speakerDesc}>
                  {session.speakers.name} - {session.speakers.designation} - {session.speakers.placeOfWork}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" xs={5}>
              <Typography variant="h6">{session.sessiontype}</Typography>
              <Typography>{session.description}</Typography>
            </Grid>
          </Grid>
        </Card>
      )}
    </Grid>
  );
};

export default SessionCard;
