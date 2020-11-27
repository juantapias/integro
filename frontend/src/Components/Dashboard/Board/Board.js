import React, { Fragment, useState } from "react";
import ListMovie from "./ListMovie/ListMovie";
//App component
import {
  Container,
  MoviesTitle,
  NameMovie,
  YearMovie,
  MovieActions,
} from "./styles";
//Api component
import { ApiUrl } from "../../../Services/ApiUrl";

const Board = ({ data }) => {
  const [movies, setMovies] = useState(data);

  const handleUpdateMovie = async (id) => {
    let config = {
      method: "PUT",
    };
    fetch(`${ApiUrl}/movies/update/${id}`, config).then(() => {
      fetch(`${ApiUrl}/movies`)
        .then((res) => res.json())
        .then((res) => {
          console.log(("result", res));
          setMovies(res);
        })
        .catch((e) => console.log(e));
    });
  };

  const handleRemoveMovie = async (id) => {
    let config = {
      method: "DELETE",
    };
    fetch(`${ApiUrl}/movies/delete/${id}`, config).then(() => {
      fetch(`${ApiUrl}/movies`)
        .then((res) => res.json())
        .then((res) => {
          console.log(("result", res));
          setMovies(res);
        })
        .catch((e) => console.log(e));
    });
  };

  return (
    <Fragment>
      <Container>
        <MoviesTitle>
          <NameMovie>Nombre</NameMovie>
          <YearMovie>Año</YearMovie>
          <MovieActions>Acción</MovieActions>
        </MoviesTitle>
        {movies.map((movie) => {
          return (
            <ListMovie
              key={movie.id}
              data={movie}
              updateItem={handleUpdateMovie}
              removeItem={handleRemoveMovie}
            />
          );
        })}
      </Container>
    </Fragment>
  );
};

export default Board;
