import React, { Fragment } from "react";
import ListMovie from "./ListMovie/ListMovie";
//App component
import { Container, MoviesTitle, NameMovie, YearMovie, MovieActions } from "./styles";

import data from "../../../Data/data.json";

const Board = () => {
  return (
    <Fragment>
      <Container>
        <MoviesTitle>
          <NameMovie>Nombre</NameMovie>
          <YearMovie>Año</YearMovie>
          <MovieActions>Acción</MovieActions>
        </MoviesTitle>
        {data.movies.map((movie) => {
          return <ListMovie key={movie.id} id={movie.id} data={movie} />;
        })}
      </Container>
    </Fragment>
  );
};

export default Board;
