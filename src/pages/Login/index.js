import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { UserContext } from "../../contexts/UserContext";

import { Container, Input } from "./styled";
import { Button } from "./../../components/Button";

import {
  getLocalStorage as getItem,
  setLocalStorage as setItem,
} from "../../utils";

import Logo from "../../assets/images/logo.png";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ isLoading: false, isDisabled: false });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (getItem("user")) {
      setUser(getItem("user"));
      navigate("/habits", { replace: true });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ ...status, isDisabled: true, isLoading: true });

    const URL = "auth/login";
    const promise = api.post(URL, { ...form });

    promise.then(({ data }) => {
      setStatus({ ...status, isDisabled: false });
      setItem("user", {
        token: data.token,
        image: data.image,
        name: data.name,
      });
      setUser(data);
      navigate("/habits", { replace: true });
    });

    promise.catch((e) => {
      setStatus({ ...status, isDisabled: false });
      alert(e);
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
