import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  return (
    <Fragment>
      <h1>movie details</h1>
    </Fragment>
  );
};

export default Movie;
