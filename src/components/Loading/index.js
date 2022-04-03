import styled from "styled-components";
import { ReactComponent as AnimatedLoading } from "./../../assets/loading.svg";

const Loading = () => {
  return (
    <Container>
      <AnimatedLoading />
    </Container>
  );
};

const Container = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { Loading };
