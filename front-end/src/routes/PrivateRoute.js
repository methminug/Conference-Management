import React from "react";
import { APP_ROUTES } from "../utilities/constants";
import { Redirect, Route } from "react-router-dom";

//Implement private routing
const PrivateRoute = () => {
    return (
        <Redirect
            to={{ pathname: APP_ROUTES.ROOT, state: {} }}
        />
    )
}

export default PrivateRoute;
