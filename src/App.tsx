import "./main.css";
import React from "react";
import { GlobalStyles } from "./global";
import { AppRoutes } from "./router";
import { Footer } from "./components";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <AppRoutes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
