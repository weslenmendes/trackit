import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import { Container } from "./styled";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import Logo from "../../assets/images/logo.png";

const initialState = {
  name: "",
  email: "",
  password: "",
  image: "",
};

const Register = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, { ...userInfo });
    promise.then(() => {
      setUserInfo(initialState);
      setDisabled(false);
      navigate("/");
    });
    promise.catch((e) => {
      setDisabled(false);
    });
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <img src={Logo} alt="Logo" width="180px" />
      <form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          disabled={disabled}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="senha"
          onChange={handleChange}
          disabled={disabled}
          required
        />
        <Input
          type="text"
          name="name"
          placeholder="nome"
          onChange={handleChange}
          disabled={disabled}
          required
        />
        <Input
          type="text"
          name="image"
          placeholder="foto"
          onChange={handleChange}
          disabled={disabled}
          required
        />
        <Button
          opacity={disabled ? 0.7 : 1}
          pointer={disabled ? "none" : "auto"}
        >
          {disabled ? (
            <ThreeDots color="#fff" height={13} width={50} />
          ) : (
            "Registrar"
          )}
        </Button>
      </form>
      <Link to="/">
        <span>Já tem uma conta? Faça login!</span>
      </Link>
    </Container>
  );
};

export { Register };
