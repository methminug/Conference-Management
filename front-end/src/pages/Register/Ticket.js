import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Card,
  Typography,
  Button,
  FormGroup,
  Grid,
  Paper,
} from "@material-ui/core";

import { useStyles } from "./Register.style";

const Ticket = ({ nextStep, prevStep, details, handleChange }) => {
  const classes = useStyles();

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
            direction="column"
            container
            justify="center"
            alignItems="center"
          >
            <FormGroup>
              <Grid item className={classes.gridItem}>
                <TextField
                  required
                  id="email"
                  type="email"
                  value={details.email}
                  label="Your Email"
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField
                  required
                  id="password"
                  type="password"
                  value={details.password}
                  label="New Password"
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField
                  required
                  id="name"
                  value={details.name}
                  label="Your Name"
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField
                  required
                  id="contactNumber"
                  type="phone"
                  value={details.contactNumber}
                  label="Contact Number"
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item className={classes.gridItem}>
                <Button variant="contained" onClick={nextStep}>
                  NEXT
                </Button>
                <Button variant="contained" onClick={prevStep}>
                  PREVIOUS
                </Button>
              </Grid>
            </FormGroup>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Ticket;
