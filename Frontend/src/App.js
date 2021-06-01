import React from 'react';
import ReactDom from 'react-dom';
import AppRoutes from "./routes"

const App = () => {
    return (       
      <AppRoutes />
    );
}

ReactDom.render(<App/>, document.getElementById("root"))