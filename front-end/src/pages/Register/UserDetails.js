import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Button,
  FormGroup,
  Grid,
  Paper,
} from "@material-ui/core";

import { useStyles } from "./Register.style";

const UserDetails = ({ nextStep, details, handleChange, setUserType }) => {
  const classes = useStyles();

  function handleRadioChange(e) {
    setUserType(e.target.value);
  }

  return (
    <Grid direction="column" container justify="center" alignItems="center">
      <Grid item className={classes.gridItem}>
        <Typography style={{ color: "#F9564F" }} variant="h3" component="h2">
          User details
        </Typography>
      </Grid>
      <Grid item>
        <Paper className={classes.background}>
          <Grid
            container
            direction="row"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <FormGroup>
              <Grid item>
                <Grid direction="column" container>
                  <Grid item>
                    <div className={classes.textFields}>
                      <TextField
                        required
                        id="email"
                        type="email"
                        value={details.email}
                        label="Your Email"
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </div>
                  </Grid>
                  <Grid item>
                    <div className={classes.textFields}>
                      <TextField
                        required
                        id="password"
                        type="password"
                        value={details.password}
                        label="New Password"
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </div>
                  </Grid>
                  <Grid item>
                    <div className={classes.textFields}>
                      <TextField
                        required
                        id="name"
                        value={details.name}
                        label="Your Name"
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </div>
                  </Grid>
                  <Grid item>
                    <div className={classes.textFields}>
                      <TextField
                        required
                        id="contactNumber"
                        type="phone"
                        value={details.contactNumber}
                        label="Contact Number"
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>

            <Grid item>
              <div className={classes.textFields}>
                <Typography variant="h6">I am</Typography>
                <RadioGroup
                  id="userType"
                  value={details.userType}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="Attendee"
                    control={<Radio />}
                    label="an Attendee"
                  />
                  <FormControlLabel
                    value="Workshop Presenter"
                    control={<Radio />}
                    label="a Workshop Presenter"
                  />
                  <FormControlLabel
                    value="Researcher"
                    control={<Radio />}
                    label="a Researcher"
                  />
                </RadioGroup>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <div style={{ alignContent: "center" }}>
              <Button className={classes.button} variant="contained" onClick={nextStep}>
                NEXT
              </Button>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
