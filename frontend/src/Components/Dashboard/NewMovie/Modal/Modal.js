import React, { Fragment } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useForm } from "react-hook-form";
//App component
import {
  ModalSection,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  BtnCancel,
  BtnSave,
} from "../../styles";
//Api component
import { ApiUrl } from "../../../../Services/ApiUrl";

const Modal = ({ title, CloseModal }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${ApiUrl}/movies/create`, config)
    .then((res) => res.json())
    .then((res) => {
      console.log(("result", res));
    })
  };

  return (
    <Fragment>
      <ModalSection>
        <ModalContainer>
          <ModalHeader>
            <h5>{title}</h5>
            <FaWindowClose onClick={() => CloseModal()} />
          </ModalHeader>
          <ModalBody onSubmit={handleSubmit(onSubmit)}>
            <input
              name="title"
              type="text"
              placeholder="Título"
              ref={register}
            />
            <input name="year" type="date" placeholder="Año" ref={register} />
            <textarea name="description" placeholder="Sinopsi" ref={register} />
            <ModalFooter>
              <BtnCancel onClick={() => CloseModal()}>Cancelar</BtnCancel>
              <BtnSave type="submit">Guardar</BtnSave>
            </ModalFooter>
          </ModalBody>
        </ModalContainer>
      </ModalSection>
    </Fragment>
  );
};

export default Modal;
