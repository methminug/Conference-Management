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
  AppBar,
  Toolbar,
  FormControl,
  IconButton,
  Select,
  Button,
} from "@material-ui/core";

import { MenuOpen } from "@material-ui/icons";

import { useStyles } from "../../assets/globalTheme";

const Home = () => {
  const classes = useStyles();

  const selectTrack = {
    _id: "",
    name: "AF CONF 2021",
    speakers: [],
    sessions: [],
  };

  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(selectTrack);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    axios.get(URL_GET_TRACKS).then((response) => {
      console.log(response.data.tracks);
      setTracks(response.data.tracks);
    });
  }, []);

  useEffect(() => {
    if (selectedTrack.id === "") {
      axios.get(URL_GET_SPEAKERS).then((response) => {
        console.log(response.data.speakers);
        setSpeakers(response.data.speakers);
      });
    } else {
      axios.get(URL_GET_TRACKS + selectedTrack.id).then((response) => {
        console.log(response.data.speakers);
        setSpeakers(response.data.speakers);
      });
    }
  }, [selectedTrack]);

  const handleTrackChange = (e) => {
    const thisTrack = e.target.value;
    //SET SPEAKERS ANBD SESSIONS
    setSelectedTrack((currentDetails) => {
      return {
        ...currentDetails,
        id: thisTrack._id,
        name: thisTrack.name,
      };
    });
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuOpen />
          </IconButton>
          <Typography variant="h6" className={classes.logoText}>
            Conference Logo
          </Typography>
          <Button color="inherit">Login</Button>
          <Typography variant="h6">Select Track</Typography>
          <FormControl>
            <Select onChange={handleTrackChange}>
              <option value={selectTrack} selected={true}>All tracks</option>
              {Object.values(tracks).map((track) => (
                <option value={track}>{track.name}</option>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>

      <TrackInfoHeaderSection
        trackName={selectedTrack.name}
        trackDate="12th December 2021"
      />
      <SpeakerSection speakers={speakers} />
      <SessionSection />
      <ConferenceDownloadsSection />
    </div>
  );
};

export default Home;
