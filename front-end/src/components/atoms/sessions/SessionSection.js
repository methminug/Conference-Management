import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL_GET_SESSION } from "../../../AppURLS";

import { Typography, Grid, Button } from "@material-ui/core";
import { TollOutlined } from "@material-ui/icons";

import { useStyles } from "./SessionCard.style";
import SessionCard from "./SessionCard";

const SessionSection = () => {
  const classes = useStyles();

  const [sessionList, setSessionList] = useState({});

  useEffect(() => {
    axios.get(URL_GET_SESSION).then((response) => {
      console.log(response.data.sessions)
      setSessionList(response.data.sessions);
    });
    
  }, []);
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "#253d60",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Typography variant="h3" className={classes.sessionSectionTitle}>
          Schedule
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<TollOutlined style={{ fontSize: "60px" }} />}
        >
          Register for this track
        </Button>
      </div>

      <Grid container>
        {Object.values(sessionList).map((aSession) => (
          <SessionCard session={aSession} />
        ))}
      </Grid>
    </div>
  );
};

export default SessionSection;

// const sessions = [
//   {
//     topic: "Towards Self-supervised Curious Robots",
//     startTime: "9.00AM",
//     sessiontype: "Keynote",
//     description: "This is a keynote",
//     name: "Daphne Koller",
//     position: "CEO",
//     company: "Insitro",
//     img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//   },
//   {
//     topic: "Coffee Break",
//     startTime: "10.00AM",
//     sessiontype: "Break",
//   },
//   {
//     topic: "AI and Security: Lessons, Challenges and Future Directions",
//     sessiontype: "Research Paper Presentation",
//     description: "This is a research",
//     startTime: "10.30AM",
//     name: "Lex Fridman",
//     position: "Researcher",
//     company: "MIT",
//     img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//   },
// ];
