import React, { Fragment, useState } from "react";
//App component
import { NewMovieContainer, BtnNewMovie } from "../styles";
import Modal from "./Modal/Modal";

const NewMovie = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <Fragment>
      <NewMovieContainer>
        New Movie
        <BtnNewMovie onClick={handleModalOpen}>New movie</BtnNewMovie>
        {showModal && <Modal title="Agregar nueva película" CloseModal={handleModalClose} />}
      </NewMovieContainer>
    </Fragment>
  );
};

export default NewMovie;
