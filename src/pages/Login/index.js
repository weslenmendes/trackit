import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Container, Input } from "./styled";
import { Button } from "./../../components/Button";

import Logo from "../../assets/images/logo.png";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [token, setToken] = useState("");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
      const promise = axios.get(URL, config);

      promise.then((res) => {
        setDisabled(false);
        console.log(res.data);
      });
      promise.catch((e) => {
        setDisabled(false);
        console.log(e);
      });
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const promise = axios.post(URL, { ...user });

    promise.then((res) => {
      setToken(res.data.token);
    });
    promise.catch((e) => console.log(e));
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
          placeholder="email"
          name="email"
          onChange={handleChange}
          disabled={disabled}
          required
        />
        <Input
          type="password"
          placeholder="senha"
          name="password"
          onChange={handleChange}
          disabled={disabled}
          required
        />
        <Button opacity={disabled ? 0.7 : 1}>
          {disabled ? (
            <ThreeDots color="#fff" height={13} width={50} />
          ) : (
            "Entrar"
          )}
        </Button>
      </form>
      <Link to="/register">
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </Container>
  );
};

export { Login };
