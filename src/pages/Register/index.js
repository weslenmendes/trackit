import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

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
  const [status, setStatus] = useState({ isLoading: false, isDisabled: false });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, isLoading: true, isDisabled: true });

    try {
      const URL = "auth/sign-up";
      await api.post(URL, { ...userInfo });
      setUserInfo(initialState);
      setStatus({ ...status, isLoading: false, isDisabled: false });
      navigate("/");
    } catch (e) {
      setStatus({ ...status, isLoading: false, isDisabled: false });
      alert(
        "Ocorreu um erro no envio do cadastro, verifique os dados enviados."
      );
    }
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
          disabled={status.isDisabled}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="senha"
          onChange={handleChange}
          disabled={status.isDisabled}
          required
        />
        <Input
          type="text"
          name="name"
          placeholder="nome"
          onChange={handleChange}
          disabled={status.isDisabled}
          required
        />
        <Input
          type="text"
          name="image"
          placeholder="foto"
          onChange={handleChange}
          disabled={status.isDisabled}
          required
        />
        <Button content="Cadastrar" status={status} />
      </form>
      <Link to="/">
        <span>Já tem uma conta? Faça login!</span>
      </Link>
    </Container>
  );
};

export { Register };
