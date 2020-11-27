import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
//App components
import Loading from "../../Components/Loading/Loading";
//Api components
import useFetch from "../../Hooks/useFetch";
import { ApiUrl } from "../../Services/ApiUrl";

const Movie = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`${ApiUrl}/movies/${id}`);

  if (loading) return <Loading />;

  return (
    <Fragment>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <h5>{data.year}</h5>
    </Fragment>
  );
};

export default Movie;
