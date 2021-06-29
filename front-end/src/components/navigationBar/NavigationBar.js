import React, { useEffect, useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  FormControl,
  Select,
} from "@material-ui/core";

import { MenuOpen } from "@material-ui/icons";
import axios from "axios";

import { useStyles } from "../../assets/globalTheme";
import { URL_GET_TRACKS } from "../../AppURLS";

const NavigationBar = () => {
  const classes = useStyles();

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get(URL_GET_TRACKS).then((response) => {
      console.log(response.data.tracks);
      setTracks(response.data.tracks)
    });
  }, []);

  const handleTrackChange = (e) => {
    console.log(e.target.value);
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
              {Object.values(tracks).map((track) => (
                <option value={track._id}>{track.name}</option>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
