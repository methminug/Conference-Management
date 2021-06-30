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
    if (details.upload == "") {
      alert("Please upload your submission to proceed");
      return
    };

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

            nextStep();
          });
      });
  };

  return (
    <Grid direction="column" container justify="center" alignItems="center">
      <Grid item className={classes.gridItem}>
        <Typography style={{ color: "#F9564F" }} variant="h3" component="h2">
          Upload your Submission
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
                value={details.uploadTitle}
                label="Submission Title"
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
                    onChange={handleFileUpload}
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
                onClick={upload}
              >
                SUBMIT
              </Button>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ConferenceSubmission;
