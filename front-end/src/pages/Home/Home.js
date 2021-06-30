import React, { useEffect, useState } from "react";
import axios from "axios";

import { URL_GET_TRACKS, URL_GET_SPEAKERS } from "../../AppURLS";
import {
  SpeakerSection,
  SessionSection,
  TrackInfoHeaderSection,
  ConferenceDownloadsSection,
} from "../../components";
import {
  Typography,
  Toolbar,
  FormControl,
  Select,
} from "@material-ui/core";

import { useStyles } from "../../assets/globalTheme";

const Home = () => {
  const classes = useStyles();

  const selectTrack = [
    {
      _id: "",
      name: "many languages and frameworks",
    },
  ];

  const [tracks, setTracks] = useState(selectTrack);
  const [selectedTrack, setSelectedTrack] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    axios.get(URL_GET_TRACKS).then((response) => {
      response.data.tracks.forEach((element) => {
        selectTrack.push(element);
      });
      console.log(selectTrack[0]);
      setTracks(selectTrack);
      setSelectedTrack(selectTrack[0]);
    });
  }, []);

  useEffect(() => {
    if (selectedTrack._id === "") {
      axios.get(URL_GET_SPEAKERS).then((response) => {
        console.log(response.data.speakers);
        setSpeakers(response.data.speakers);
      });
    } else {
      axios.get(URL_GET_TRACKS + selectedTrack._id).then((response) => {
        setSpeakers(response.data.speakers);
      });
    }
  }, [selectedTrack]);

  const handleTrackChange = (e) => {
    const thisTrack = e.target.value;
    console.log(thisTrack);
    setSelectedTrack(thisTrack);
  };

  return (
    <div>
      <TrackInfoHeaderSection
        trackName="International Conference on Application Frameworks"
        trackDate="12th December 2021"
      />
      <Toolbar style={{ display: "flex", justifyContent: "center", margin:"20px 0px 20px 0px" }}>
        <div>
          <Typography className={classes.sessionText}>
            With speakers on
          </Typography>
          <FormControl>
            <Select
              value={selectedTrack}
              className={classes.sessionDropDown}
              disableUnderline
              onChange={handleTrackChange}
            >
              {Object.values(tracks).map((track) => (
                <option value={track}>{track.name}</option>
              ))}
            </Select>
          </FormControl>
        </div>
      </Toolbar>
      <SpeakerSection speakers={speakers} />
      <SessionSection />
      <ConferenceDownloadsSection />
    </div>
  );
};

export default Home;
