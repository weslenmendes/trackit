import styled from "styled-components";

const History = () => {
  return (
    <Container>
      <Title>Histórico</Title>
      <SubTitle>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </SubTitle>
    </Container>
  );
};

const Container = styled.section`
  min-width: 350px;
  height: calc(100vh - 75px);
  margin-top: 75px;
  padding: 28px 18px 0px;
  background-color: #f2f2f2;
`;

const Title = styled.h2`
  font-size: 23px;
  line-height: 29px;
  font-weight: 400px;
  color: #126ba5;
`;

const SubTitle = styled.p`
  margin-top: 17px;
  font-size: 18px;
  color: #666666;
  line-height: 22px;
`;

export { History };
