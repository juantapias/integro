import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

//App component
import { Container, LoginForm, LoginButton, ErrorAlert } from "./styles";
import Title from "./Title/Title";
import Inputs from "./Inputs/Inputs";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleOnChange = (name, value) => {
    if (name === "email") {
      setEmail(value);
    } else {
      if (value.length < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
      setPassword(value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "juan@test.com" && password === "12345678") {
      setIsLogin(true);
      history.push("/dashboard");
    } else {
      setHasError(true);
    }
  };

  return (
    <Fragment>
      <Container>
        <LoginForm>
          <Title title="Iniciar sesion" />
          <Inputs
            attr={{
              name: "email",
              type: "email",
              placeholder: "Ingrese Usuario",
            }}
            onChange={handleOnChange}
          />
          <Inputs
            attr={{
              name: "password",
              type: "password",
              placeholder: "Ingrese Contraseña",
            }}
            onChange={handleOnChange}
          />
          {hasError && (
            <ErrorAlert>Usuario y/o contraseña incorrecta</ErrorAlert>
          )}
          {passwordError && (
            <ErrorAlert>
              Error en la contraseña debe tener minimo 8 caracteres
            </ErrorAlert>
          )}
          <LoginButton onClick={handleLogin}>
            {isLogin ? (
              <PulseLoader size={15} color={"#fff"} />
            ) : (
              "Iniciar sesión"
            )}
          </LoginButton>
        </LoginForm>
      </Container>
    </Fragment>
  );
};

export default Login;
