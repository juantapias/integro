import React, { Fragment } from "react";
import { FaWindowClose } from "react-icons/fa";
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
import Inputs from "./Inputs/Inputs";
import Textareas from "./Textarea/Textarea";

const Modal = ({ CloseModal }) => {
  return (
    <Fragment>
      <ModalSection>
        <ModalContainer>
          <ModalHeader>
            <h5>Agregar nueva película</h5>
            <FaWindowClose onClick={() => CloseModal()} />
          </ModalHeader>
          <ModalBody>
            <Inputs
              attr={{ name: "title", type: "text", placeholder: "Título" }}
            />
            <Textareas attr={{name: "description", placeholder: "Sinopsi"}} />
            <Inputs
              attr={{ name: "year", type: "text", placeholder: "Año" }}
            />
          </ModalBody>
          <ModalFooter>
            <BtnCancel onClick={() => CloseModal()}>Cancelar</BtnCancel>
            <BtnSave>Guardar</BtnSave>
          </ModalFooter>
        </ModalContainer>
      </ModalSection>
    </Fragment>
  );
};

export default Modal;
