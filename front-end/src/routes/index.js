import React from "react";
import { Router } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import { createBrowserHistory } from 'history';
import {Home} from "../pages";
import PublicRoute from "./PublicRoute";
import {APP_ROUTES} from "../utilities/constants";

const AppRoutes = () => {

    const history = createBrowserHistory();

    //Add app routes
    return(
        <Router history={history}>
            <PublicRoute exact path={APP_ROUTES.ROOT} Component={Home} />
        </Router>
    )
}

export default AppRoutes;
