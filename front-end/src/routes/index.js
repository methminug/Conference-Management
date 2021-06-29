import React from "react";
import { Router, BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { createBrowserHistory } from "history";
import { Home, Register } from "../pages";
import PublicRoute from "./PublicRoute";
import { APP_ROUTES } from "../utilities/constants";
import {NavigationBar} from "../components"

const AppRoutes = () => {
  const history = createBrowserHistory();

  //Add app routes
  return (
    // <Router history={history}>

    //     <PublicRoute exact path={APP_ROUTES.ROOT} Component={Home} />
    // </Router>
    <Router history={history}>
        <NavigationBar />
      <Switch>
        <PublicRoute exact path={APP_ROUTES.ROOT} Component={Home} />
        <PublicRoute exact path={APP_ROUTES.REGISTER} Component={Register} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
