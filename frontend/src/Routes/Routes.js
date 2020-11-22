import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
//App component
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Movie from "../Pages/Movie/Movie";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/movie/:id" component={Movie} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
