import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const LoginForm = styled.form`
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 400px;
`;

export const Label = styled.h4 `
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
`

export const Input = styled.input`
  border: 1px solid #c9c9c9;
  border-radius: 25px;
  height: 45px;
  margin: 10px auto;
  text-indent: 15px;
  width: 100%;
`

export const LoginButton = styled.button `
  align-items: center;
  background: #34626c;
  border: 0;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 45px;
  justify-content: center;
  margin: 10px auto 0;
  text-transform: uppercase;
  transition: all .3s ease;
  width: 70%;
  &:hover {
    background: #839b97;
  }
`

export const ErrorAlert = styled.label`
  color: red;
  font-size: 12px;
  text-align: center;
`
