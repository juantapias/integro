import React, { Fragment } from "react";
//App component
import Board from "../../Components/Dashboard/Dashboard";
import Loading from "../../Components/Loading/Loading";
//Api component
import useFetch from "../../Hooks/useFetch";
import { ApiUrl } from "../../Services/ApiUrl";

const Dashboard = () => {
  const { data, loading } = useFetch(`${ApiUrl}/movies`);

  if (loading) return <Loading />;

  return (
    <Fragment>
      <Board data={data} />
    </Fragment>
  );
};

export default Dashboard;
