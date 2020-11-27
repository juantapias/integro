import React, { Fragment, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useHistory } from "react-router-dom";
//App component
import { Movies, NameMovie, YearMovie, MovieActions } from "../styles";
import Modal from "../../NewMovie/Modal/Modal";

const ListMovie = ({ data, removeItem }) => {
  const [modal, setModal] = useState(false);
  const history = useHistory();

  const handleDetails = (id) => {
    history.push(`/movie/${id}`);
  };

  const handleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  return (
    <Fragment>
      <Movies>
        <NameMovie>{data.title}</NameMovie>
        <YearMovie>{data.year}</YearMovie>
        <MovieActions>
          <FaEye onClick={() => handleDetails(data.id)} />
          <FaEdit onClick={() => handleModal()} />
          <FaTrash onClick={() => removeItem(data.id)} />
        </MovieActions>
      </Movies>
      {modal && <Modal title="Actualizar película" CloseModal={handleModal} />}
    </Fragment>
  );
};

export default ListMovie;
