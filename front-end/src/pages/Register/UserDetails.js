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

const UserDetails = ({ nextStep, details, handleChange }) => {
  const classes = useStyles();

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
              </Grid>
            </FormGroup>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

{
  /* <Grid direction="column" container spacing={2} justify="center">
<Grid item xs={12}>
  <Card className={classes.formCard}>
    <Typography variant="h5" component="h2">
      User details
    </Typography>
    <FormGroup className={classes.formGroup}>
      <TextField
        required
        id="email"
        type="email"
        value={details.email}
        label="Your Email"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        required
        id="password"
        type="password"
        value={details.password}
        label="New Password"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        required
        id="name"
        value={details.name}
        label="Your Name"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        required
        id="contactNumber"
        type="phone"
        value={details.contactNumber}
        label="Contact Number"
        onChange={handleChange}
        variant="outlined"
      />
    </FormGroup>
    <Button variant="outlined" onClick={nextStep}>
      NEXT
    </Button>
  </Card>
</Grid>
</Grid> */
}

export default UserDetails;
