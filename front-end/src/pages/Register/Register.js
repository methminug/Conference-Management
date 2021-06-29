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

const Register = () => {
  const classes = useStyles();

  return (
    <div>
        <p>REGISTER HERE</p>
    </div>
  );
};

export default Register;
