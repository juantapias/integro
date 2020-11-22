import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 1366px;
`;

export const NewMovieContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 25px auto;
`;

export const BtnNewMovie = styled.button`
  align-items: center;
  background: #34626c;
  border: 0;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 35px;
  justify-content: center;
  margin-left: 15px;
  transition: all 0.3s ease;
  width: 120px;
  &:hover {
    background: #839b97;
  }
`;

export const ModalSection = styled.div`
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ModalContainer = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 25px;
  width: 525px;
`;

export const ModalHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  h5 {
    text-transform: uppercase;
  }
  svg {
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  margin: 25px auto;
  width: 100%;
`;

export const Input = styled.input `
  border: 1px solid #c9c9c9;
  border-radius: 25px;
  display: flex;
  height: 45px;
  margin: 0 auto 10px;
  text-indent: 10px;
  width: 90%;
`
export const Textarea = styled.textarea `
  border: 1px solid #c9c9c9;
  border-radius: 25px;
  display: flex;
  height: 100px;
  margin: 0 auto 10px;
  text-indent: 10px;
  width: 90%;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const BtnCancel = styled.button`
  align-items: center;
  background: #cfd3ce;
  border: 0;
  border-radius: 25px;
  color: #000;
  display: flex;
  height: 35px;
  justify-content: center;
  margin-right: 10px;
  transition: all .3s ease;
  width: 100px;
  &:hover {
    background: #839b97;
  }
`
export const BtnSave = styled.button`
  align-items: center;
  background: #34626c;
  border: 0;
  border-radius: 25px;
  color: #fff;
  display: flex;
  height: 35px;
  justify-content: center;
  transition: all .3s ease;
  width: 100px;
  &:hover {
    background: #839b97;
  }
`
