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
        href="/register"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<TollOutlined style={{ fontSize: "60px" }} />}
        >
          Register
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
