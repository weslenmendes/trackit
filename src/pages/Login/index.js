import { Link } from "react-router-dom";
import { Container, Input, Button } from "./styled";

import Logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" width="180px" />
      <form>
        <Input type="text" placeholder="email" />
        <Input type="password" placeholder="senha" />
        <Button>Entrar</Button>
      </form>
      <Link to="/signin">
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </Container>
  );
};

export { Login };
