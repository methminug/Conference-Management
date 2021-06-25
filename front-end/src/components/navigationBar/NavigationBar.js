import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core";

import { MenuOpen } from "@material-ui/icons";

import {useStyles} from "../../assets/globalTheme";

const NavigationBar = () => {
  const classes = useStyles();

  return (
      <div>
        <AppBar position="static" className={classes.navbar} >
          <Toolbar>
            <IconButton edge="end" color="inherit" aria-label="menu">
              <MenuOpen />
            </IconButton>
            <Typography variant="h6" className={classes.logoText}>Conference Logo</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default NavigationBar;
