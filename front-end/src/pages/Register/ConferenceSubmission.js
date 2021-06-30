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
import storage from "./firebase";

const ConferenceSubmission = ({
  nextStep,
  prevStep,
  details,
  handleChange,
  handleFileUpload,
}) => {
  const classes = useStyles();
  const [downloadUrl, setDownloadUrl] = useState("");

  const upload = () => {
    if (details.upload == null) return;
    setDownloadUrl("Getting Download Link...");

    const fileName = details.uploadTitle + " - " + details.name;

    // Sending File to Firebase Storage
    storage
      .ref(`/conferencesubmissions/${fileName}`)
      .put(details.upload)
      .on("state_changed", () => {
        // Getting Download Link
        storage
          .ref("conferencesubmissions")
          .child(fileName)
          .getDownloadURL()
          .then((url) => {
            setDownloadUrl(url);
            console.log(url);
            console.log(details);

            //POST HERE

            nextStep()
          });
      });
  };

  return (
    <Grid direction="column" container justify="center" alignItems="center">
      <Grid item className={classes.gridItem}>
        <Typography style={{ color: "#F9564F" }} variant="h3" component="h2">
          Upload your submission
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
                  id="uploadTitle"
                  value={details.uploadTitle}
                  label="Title"
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item className={classes.gridItem}>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Button variant="contained" component="label">
                {details.upload !== "" ? details.upload.name : "Pick a File"}
                  <input
                    id="upload"
                    onChange={handleFileUpload}
                    type="file"
                    hidden
                  />
                </Button>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Button variant="contained" onClick={upload}>
                  SUBMIT
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

export default ConferenceSubmission;
