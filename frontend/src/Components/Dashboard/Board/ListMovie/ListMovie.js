import React, { Fragment } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useHistory } from "react-router-dom";
//App component
import { Movies, NameMovie, YearMovie, MovieActions } from "../styles";

const ListMovie = ({ data }) => {
  const history = useHistory();

  const handleDetails = (id) => {
    history.push(`/movie/${id}`);
  };

  return (
    <Fragment>
      <Movies>
        <NameMovie>{data.title}</NameMovie>
        <YearMovie>{data.year}</YearMovie>
        <MovieActions>
          <FaEye onClick={() => handleDetails(data.id)} />
          <FaEdit />
          <FaTrash />
        </MovieActions>
      </Movies>
    </Fragment>
  );
};

export default ListMovie;
