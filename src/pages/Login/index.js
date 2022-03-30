import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Input } from "./styled";
import { Button } from "./../../components/Button";

import Logo from "../../assets/images/logo.png";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [token, setToken] = useState("");
  const [status, setStatus] = useState({ isLoading: false, isDisabled: false });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ ...status, isDisabled: true, isLoading: true });

    const URL = "auth/login";
    const promise = api.post(URL, { ...user });

    promise.then(({ data }) => {
      setStatus({ ...status, isDisabled: false });
      setToken(data.token);
      navigate("/home", { state: { token } });
    });

    promise.catch((e) => {
      setStatus({ ...status, isDisabled: false });
      alert(e);
    });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <img src={Logo} alt="logo" width="180px" />
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
        <Button status={status} content="Entrar" />
      </form>
      <Link to="/register">
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </Container>
  );
};

export { Login };
