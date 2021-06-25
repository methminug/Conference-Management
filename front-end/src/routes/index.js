import React from "react";
import { Router, BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import { createBrowserHistory } from 'history';
import {Home} from "../pages";
import PublicRoute from "./PublicRoute";
import {APP_ROUTES} from "../utilities/constants";
import {NavigationBar} from "../components"

const AppRoutes = () => {

    const history = createBrowserHistory();

    //Add app routes
    return(
        // <Router history={history}>
            
        //     <PublicRoute exact path={APP_ROUTES.ROOT} Component={Home} />
        // </Router>
        <Router history={history}>
            <NavigationBar />
            <Switch>
                <PublicRoute exact path={APP_ROUTES.ROOT} Component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRoutes;
