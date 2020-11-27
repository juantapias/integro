import React from "react";
import { Switch, Route } from "react-router-dom";
//App component
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Movie from "../Pages/Movie/Movie";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/movie/:id" component={Movie} />
      <Route exact path="/movie/update/:id" component={Movie} />
    </Switch>
  );
};

export default Routes;
