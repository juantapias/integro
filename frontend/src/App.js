import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import { GlobalStyles } from "./Styles/GlobalStyles";
import Routes from "./Routes/Routes";

function App() {
  return (
    <Route>
      <GlobalStyles />
      <Routes />
    </Route>
  );
}

export default App;
