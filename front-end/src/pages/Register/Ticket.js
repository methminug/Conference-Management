import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Paper,
} from "@material-ui/core";

import { useStyles } from "./Register.style";
import { URL_USER } from "../../AppUrls";

const Ticket = ({ nextStep, prevStep, details, handleChange }) => {
  const classes = useStyles();

  const [error, setError] = useState("")

  const signUp = () => {
    axios.post(URL_USER,details).then((response) => {
      console.log(response);
      nextStep()
    }).catch((e) => {
      setError(e.error)
    });
  }

  return (
    <Grid direction="column" container justify="center" alignItems="center">
      <Grid item className={classes.gridItem}>
        <Typography style={{ color: "#F9564F" }} variant="h3" component="h2">
          Attendee Payment
        </Typography>
      </Grid>
      <Grid item>
        <Paper className={classes.background}>
          <Grid
            container
            direction="column"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              alignItems: "center",
              alignContent: "space-around"
            }}
          >
            <Grid item>
              <TextField
                required
                id="uploadTitle"
                type="number"
                value={details.uploadTitle}
                label="Title"
                onChange={handleChange}
                variant="outlined"
                style={{marginTop:"100px"}}
              />
            </Grid>

            <Grid item>
              <div className={classes.textFields}>
                <Button variant="contained" component="label">
                  {details.upload !== "" ? details.upload.name : "Pick a File"}
                  <input
                    id="upload"
                    type="file"
                    hidden
                  />
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <div style={{ alignContent: "center" }}>
              <Button
                className={classes.button2}
                variant="contained"
                onClick={prevStep}
              >
                PREVIOUS
              </Button>
              <Button
                className={classes.button2}
                variant="contained"
                onClick={signUp}
              >
                PROCEED TO PAYMENT
              </Button>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Ticket;
