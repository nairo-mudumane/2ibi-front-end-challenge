import "./main.css";
import React from "react";
import { GlobalStyles } from "./global";
import { AppRoutes } from "./router";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
