import React, { Fragment } from "react";
//App component
import { Container } from "./styles";
import NewMovie from "./NewMovie/NewMovie";
import Board from "./Board/Board";

const Dashboard = () => {
  return (
    <Fragment>
      <Container>
        <NewMovie />
        <Board />
      </Container>
    </Fragment>
  );
};

export default Dashboard;
